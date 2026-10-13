import { useEffect, useState } from "react";
import {
    GiPlanks,
    GiPush,
    GiWeightLiftingUp,
    GiWeightLiftingDown,
} from "react-icons/gi";
import { useNavigate } from "react-router";
import {
    ArrowLeft,
    CalendarDays,
    Check,
    Clock3,
    MapPin,
    Minus,
    Plus,
    Shirt,
    ShoppingBag,
    Droplets,
    Activity,
    CalendarPlus,
    Users,
    User,
    ChevronUp,
    ChevronDown,
    Trash2,
    Save,
} from "lucide-react";

import {
    Page,
    Container,
    BottomNav,
    NavItem,
} from "../Home/Home.styles";

import {
    ClassesHeader,
    BackButton,
    PageTitle,
    MonthTitle,

    DatesContainer,
    DateCard,
    DateDay,
    DateNumber,
    DateMonth,

    TrainingCard,
    TrainingHeader,
    TrainingTitle,
    TrainingStatus,

    TrainingInfo,
    InfoRow,
    InfoIcon,
    InfoText,

    ConfirmButton,

    RecommendationsCard,
    SectionTitle,
    RecommendationList,
    RecommendationItem,
    RecommendationIcon,
    RecommendationText,

    ProgressCard,
    ProgressHeader,
    ProgressTitle,

    ExerciseAccordionList,
    ExerciseAccordion,
    ExerciseAccordionHeader,
    ExerciseAccordionIcon,
    ExerciseAccordionInfo,
    ExerciseAccordionTitle,
    ExerciseAccordionSummary,
    SeriesEditorPanel,
    SeriesEditorDescription,
    SeriesMessage,
    SeriesRow,
    SeriesLabel,
    SeriesControls,
    SeriesStepButton,
    SeriesValue,
    DeleteSeriesButton,
    AddSeriesButton,
    SeriesActions,
    CancelSeriesButton,
    SaveSeriesButton,
} from "./Dashboard.styles";
import { confirmarAsistencia } from "../../services/asistenciaService";
import { getClases } from "../../services/clasesService";
import { getCurrentUser } from "../../services/userService";
import { Button } from "@mui/material";

import { obtenerSeriesEjercicio, guardarSeriesEjercicio, type SerieEjercicio } from "../../services/ejerciciosService";

interface ProgressItemData {
  id: ExerciseId;
  name: string;
  value: number;
  color: string;
  icon: ExerciseId;
  improvement: number;
}

type ExerciseId = "planchas" | "sentadillas" | "dominadas" | "paralelas";

const initialProgress: ProgressItemData[] = [
  {
    id: "planchas",
    name: "Planchas",
    value: 0,
    color: "#64D6B0",
    icon: "planchas",
    improvement: 5,
  },
  {
    id: "sentadillas",
    name: "Sentadillas",
    value: 0,
    color: "#A67CFF",
    icon: "sentadillas",
    improvement: 10,
  },
  {
    id: "dominadas",
    name: "Dominadas",
    value: 0,
    color: "#FF9A4A",
    icon: "dominadas",
    improvement: 8,
  },
  {
    id: "paralelas",
    name: "Paralelas",
    value: 0,
    color: "#FF5964",
    icon: "paralelas",
    improvement: 3,
  },
];

const getExerciseIcon = (
  type: ProgressItemData["icon"],
  color: string
) => {
  const iconProps = {
    size: 42,
    color,
    strokeWidth: 1.8,
  };

  switch (type) {
    case "planchas":
      return <GiPlanks {...iconProps} />;

    case "dominadas":
      return <GiPush {...iconProps} />;

    case "sentadillas":
      return <GiWeightLiftingUp {...iconProps} />;

    case "paralelas":
      return <GiWeightLiftingDown {...iconProps} />;

    default:
      return null;
  }
};

function Dashboard() {

    const toLocalDateString = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const [seriesError, setSeriesError] = useState<string | null>(null);

    const navigate = useNavigate();

    const [loadingSeries, setLoadingSeries] = useState(false);

    const [savingSeries, setSavingSeries] = useState(false);

    const [progress, setProgress] =
        useState<ProgressItemData[]>(initialProgress);

    const [editing, setEditing] =
        useState<string | null>(null);

    const [confirmed, setConfirmed] =
        useState(false);

    const [draftSeries, setDraftSeries] = useState<SerieEjercicio[]>([]);

    const [seriesByExercise, setSeriesByExercise] = useState<Record<ExerciseId, SerieEjercicio[]>>({
      planchas: [], sentadillas: [], dominadas: [], paralelas: [],
    });

    const [selectedProgressDate, setSelectedProgressDate] = useState(toLocalDateString(new Date()));

    const [clases, setClases] = useState<any[]>([]);
    const [user, setUser] = useState<any>(null);

    const [confirmando, setConfirmando] = useState(false);
    const [asistenciaConfirmada, setAsistenciaConfirmada] = useState(false);

    // Obtener la clase que está PROGRAMADA
    const claseProgramada = clases.find(
        (clase) => clase.estados.nombre === "PROGRAMADA"
    );

    const handleConfirmar = async () => {

        try {

            if (!user) {
                alert("No se pudo obtener el usuario.");
                return;
            }

            if (!claseProgramada) {
                alert("No existe una clase programada.");
                return;
            }

            setConfirmando(true);

            await confirmarAsistencia(
                user.id,
                claseProgramada.id
            );

            setAsistenciaConfirmada(true);

            alert("Asistencia confirmada");

        } catch (error) {

            console.error(error);

        } finally {

            setConfirmando(false);

        }

    };

    const cancelSeriesEditing = () => {
      if (editing) setDraftSeries(seriesByExercise[editing]);
      setSeriesError(null);
      setEditing(null);
    };

    const saveExerciseSeries = async () => {
      if (!editing) return;
      setSavingSeries(true);
      setSeriesError(null);
      const exercise = editing;
      const normalized = draftSeries.map((row, index) => ({
        numero_serie: index + 1, valor: row.valor,
      }));
      try {
        await guardarSeriesEjercicio(exercise, selectedProgressDate, normalized);
        setSeriesByExercise((current) => ({ ...current, [exercise]: normalized }));
        setProgress((current) => current.map((item) => item.id === exercise ? {
          ...item, value: normalized.reduce((sum, row) => sum + row.valor, 0),
        } : item));
        setEditing(null);
      } catch (error) {
        console.error("No se pudieron guardar las series", error);
        setSeriesError("No se pudieron guardar los cambios. Revisa Supabase e inténtalo de nuevo.");
      } finally {
        setSavingSeries(false);
      }
    };

    const openExerciseEditor = async (exercise: ExerciseId) => {
      if (editing === exercise) { setEditing(null); return; }
      setEditing(exercise);
      setLoadingSeries(true);
      setSeriesError(null);
      try {
        setDraftSeries(await obtenerSeriesEjercicio(exercise, selectedProgressDate));
      } catch (error) {
        console.error(error);
        setDraftSeries([]);
        setSeriesError("No se pudieron cargar las series. Verifica tu sesión y las políticas RLS.");
      } finally {
        setLoadingSeries(false);
      }
    };

    const removeSeries = (number: number) => setDraftSeries((rows) =>
      rows.filter((row) => row.numero_serie !== number)
        .map((row, index) => ({ ...row, numero_serie: index + 1 }))
    );

    const changeSeriesValue = (number: number, amount: number) => {
      setDraftSeries((rows) => rows.map((row) =>
        row.numero_serie === number ? { ...row, valor: Math.max(0, row.valor + amount) } : row
      ));
    };

    const addSeries = () => setDraftSeries((rows) => [
      ...rows,
      { numero_serie: rows.length ? Math.max(...rows.map((row) => row.numero_serie)) + 1 : 1, valor: 0 },
    ]);

    useEffect(() => {
      let active = true;
      const loadSummaries = async () => {
        try {
          const ids: ExerciseId[] = ["planchas", "sentadillas", "dominadas", "paralelas"];
          const entries = await Promise.all(ids.map(async (id) => [id, await obtenerSeriesEjercicio(id, selectedProgressDate)] as const));
          if (!active) return;
          const next = { planchas: [], sentadillas: [], dominadas: [], paralelas: [] } as Record<ExerciseId, SerieEjercicio[]>;
          entries.forEach(([id, rows]) => { next[id] = rows; });
          setSeriesByExercise(next);
          setProgress((current) => current.map((item) => ({
            ...item,
            value: next[item.id].reduce((sum, serie) => sum + serie.valor, 0),
          })));
        } catch (error) {
          console.error("No se pudo cargar el progreso", error);
        }
      };
      void loadSummaries();
      return () => { active = false; };
    }, [selectedProgressDate]);

    useEffect(() => {

        const loadData = async () => {

            try {

                const [
                    clasesResponse,
                    usuarioResponse
                ] = await Promise.all([
                    getClases(),
                    getCurrentUser()
                ]);

                setClases(clasesResponse);
                setUser(usuarioResponse);

            } catch (error) {

                console.error(error);

            }

        };

        loadData();

    }, []);

    return (
        <Page>

            <Container>

                {/* ================= HEADER ================= */}

                <ClassesHeader>

                    <BackButton
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={26} />
                    </BackButton>

                    <PageTitle>
                        Clases
                    </PageTitle>

                    <MonthTitle>
                        Setiembre <strong>2026</strong>
                    </MonthTitle>

                </ClassesHeader>


                {/* ================= FECHAS ================= */}

                <DatesContainer>

                    {[
                        "17",
                        "18",
                        "24",
                        "25",
                    ].map((day) => {

                        const selected =
                            day === "17";

                        return (
                            <DateCard
                                key={day}
                                $selected={selected}
                            >

                                <DateDay>
                                    SAB
                                </DateDay>

                                <DateNumber>
                                    {day}
                                </DateNumber>

                                <DateMonth>
                                    OCT
                                </DateMonth>

                            </DateCard>
                        );

                    })}

                </DatesContainer>

                {/* ================= PRÓXIMO ENTRENAMIENTO ================= */}
                {claseProgramada && (
                    <TrainingCard key={claseProgramada.id}>

                        <TrainingHeader>

                            <TrainingTitle>
                                PRÓXIMO ENTRENAMIENTO
                            </TrainingTitle>

                            <TrainingStatus>
                                <span />
                                {claseProgramada.estados.nombre}
                            </TrainingStatus>

                        </TrainingHeader>

                        <TrainingInfo>

                            <InfoRow>
                                <InfoIcon>
                                    <CalendarDays size={25} />
                                </InfoIcon>

                                <InfoText>
                                    {claseProgramada.fecha}
                                </InfoText>
                            </InfoRow>

                            <InfoRow>
                                <InfoIcon>
                                    <Clock3 size={25} />
                                </InfoIcon>

                                <InfoText>
                                    {claseProgramada.hora_inicio} —{" "}
                                    {claseProgramada.hora_fin}
                                </InfoText>
                            </InfoRow>

                            <InfoRow>
                                <InfoIcon>
                                    <MapPin size={25} />
                                </InfoIcon>

                                <InfoText>
                                    Av. 28 de Julio 340, Jesús María
                                </InfoText>
                            </InfoRow>

                        </TrainingInfo>

                        <ConfirmButton
                            type="button"
                            $confirmed={confirmed}
                            onClick={() => {
                                handleConfirmar();
                                setConfirmed(!confirmed);
                            }}
                            disabled={
                                confirmando ||
                                asistenciaConfirmada ||
                                !claseProgramada
                            }
                        >

                            {confirmando ? (
                                <>
                                    <Check size={23} />
                                    ASISTENCIA CONFIRMADA
                                </>
                            ) : (
                                <>
                                    <CalendarDays size={23} />
                                    CONFIRMAR ASISTENCIA
                                </>
                            )}

                        </ConfirmButton>

                        {
                            user?.roles?.nombre === "LIDER" && (

                                <Button
                                    variant="contained"
                                    sx={{ ml: 2 }}
                                    onClick={() =>
                                        navigate(`/asistencia/${claseProgramada.id}`)
                                    }
                                >
                                    Lista de asistencia
                                </Button>

                            )
                        }

                    </TrainingCard>
                )}

                {/* ================= RECOMENDACIONES ================= */}

                <RecommendationsCard>

                    <SectionTitle>
                        Antes de entrenar
                    </SectionTitle>


                    <RecommendationList>

                        <RecommendationItem>

                            <RecommendationIcon>
                                <Droplets size={22} />
                            </RecommendationIcon>

                            <RecommendationText>
                                Lleva agua y mantente hidratado.
                            </RecommendationText>

                        </RecommendationItem>


                        <RecommendationItem>

                            <RecommendationIcon>
                                <Clock3 size={22} />
                            </RecommendationIcon>

                            <RecommendationText>
                                Llega puntual.
                            </RecommendationText>

                        </RecommendationItem>


                        <RecommendationItem>

                            <RecommendationIcon>
                                <Shirt size={22} />
                            </RecommendationIcon>

                            <RecommendationText>
                                Ven debidamente vestido (kimono).
                            </RecommendationText>

                        </RecommendationItem>


                        <RecommendationItem>

                            <RecommendationIcon>
                                <ShoppingBag size={22} />
                            </RecommendationIcon>

                            <RecommendationText>
                                Lleva tus implementos necesarios.
                            </RecommendationText>

                        </RecommendationItem>

                    </RecommendationList>

                </RecommendationsCard>


                {/* ================= PROGRESO ================= */}

                <ProgressCard>

                    <ProgressHeader>

                        <ProgressTitle>
                            Mi progreso
                        </ProgressTitle>

                    </ProgressHeader>

                    <ExerciseAccordionList>
                      {progress.map((item) => {
                        const expanded = editing === item.id;
                        const series = seriesByExercise[item.id] ?? [];
                        const total = series.reduce((sum, row) => sum + row.valor, 0);

                        return (
                          <ExerciseAccordion key={item.id}>
                            <ExerciseAccordionHeader
                              type="button"
                              aria-expanded={expanded}
                              onClick={() => void openExerciseEditor(item.id)}
                            >
                              <ExerciseAccordionIcon $color={item.color}>
                                {getExerciseIcon(item.icon, item.color)}
                              </ExerciseAccordionIcon>
                              <ExerciseAccordionInfo>
                                <ExerciseAccordionTitle>{item.name}</ExerciseAccordionTitle>
                                <ExerciseAccordionSummary>
                                  {series.length} series <span>•</span> {total} repeticiones
                                </ExerciseAccordionSummary>
                              </ExerciseAccordionInfo>
                              {expanded ? <ChevronUp size={27} color="#35bfff" /> : <ChevronDown size={27} color="#35bfff" />}
                            </ExerciseAccordionHeader>

                            {expanded && (
                              <SeriesEditorPanel>
                                <SeriesEditorDescription>Modifica tus series y guarda cuando termines.</SeriesEditorDescription>
                                {loadingSeries ? <SeriesMessage>Cargando series...</SeriesMessage> : (
                                  <>
                                    {draftSeries.map((serie) => (
                                      <SeriesRow key={serie.numero_serie}>
                                        <SeriesLabel>
                                          <strong>Serie {serie.numero_serie}</strong>
                                          <span>Repeticiones</span>
                                        </SeriesLabel>
                                        <SeriesControls>
                                          <SeriesStepButton
                                            type="button"
                                            aria-label={`Disminuir serie ${serie.numero_serie}`}
                                            disabled={serie.valor <= 0}
                                            onClick={() => changeSeriesValue(serie.numero_serie, -1)}
                                          ><Minus size={21} /></SeriesStepButton>
                                          <SeriesValue>{serie.valor}</SeriesValue>
                                          <SeriesStepButton
                                            type="button"
                                            aria-label={`Aumentar serie ${serie.numero_serie}`}
                                            onClick={() => changeSeriesValue(serie.numero_serie, 1)}
                                          ><Plus size={21} /></SeriesStepButton>
                                        </SeriesControls>
                                        <DeleteSeriesButton
                                          type="button"
                                          aria-label={`Eliminar serie ${serie.numero_serie}`}
                                          onClick={() => removeSeries(serie.numero_serie)}
                                        ><Trash2 size={22} /></DeleteSeriesButton>
                                      </SeriesRow>
                                    ))}
                                    <AddSeriesButton type="button" onClick={addSeries}>
                                      <Plus size={24} /> Agregar serie
                                    </AddSeriesButton>
                                    {seriesError && <SeriesMessage role="alert">{seriesError}</SeriesMessage>}
                                    <SeriesActions>
                                      <CancelSeriesButton type="button" onClick={cancelSeriesEditing} disabled={savingSeries}>
                                        Cancelar
                                      </CancelSeriesButton>
                                      <SaveSeriesButton type="button" onClick={() => void saveExerciseSeries()} disabled={savingSeries || loadingSeries}>
                                        <Save size={20} /> {savingSeries ? "Guardando..." : "Guardar cambios"}
                                      </SaveSeriesButton>
                                    </SeriesActions>
                                  </>
                                )}
                              </SeriesEditorPanel>
                            )}
                          </ExerciseAccordion>
                        );
                      })}
                    </ExerciseAccordionList>
                </ProgressCard>

                {/* ================= NAVIGATION ================= */}
                <BottomNav>
                    <NavItem
                        $active
                        type="button"
                        onClick={() => {}
                            // onNavigate?.("/")
                        }
                    >
                        <Activity />

                        <span>Inicio</span>
                    </NavItem>

                    <NavItem
                        type="button"
                        onClick={() => {}
                            // onNavigate?.("/clases")
                        }
                    >
                        <CalendarPlus />

                        <span>Clases</span>
                    </NavItem>

                    <NavItem
                        type="button"
                        onClick={() => {}
                            // onNavigate?.("/comunidad")
                        }
                    >
                        <Users />

                        <span>Comunidad</span>
                    </NavItem>

                    <NavItem
                        type="button"
                        onClick={() => {}
                            // onNavigate?.("/perfil")
                        }
                    >
                        <User />

                        <span>Perfil</span>
                    </NavItem>
                </BottomNav>

            </Container>

        </Page>
    );
}

export default Dashboard;