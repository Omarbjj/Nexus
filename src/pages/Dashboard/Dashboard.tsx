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
    ArrowUp,
    CalendarDays,
    Check,
    ChevronDown,
    Clock3,
    MapPin,
    Minus,
    Pencil,
    Plus,
    Shirt,
    ShoppingBag,
    Droplets,
    Activity,
    CalendarPlus,
    Users,
    User,
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
    PeriodButton,

    ProgressGrid,
    ProgressItem,
    ProgressItemHeader,
    ExerciseIcon,
    ExerciseName,
    EditButton,

    ProgressValueContainer,
    DecreaseButton,
    IncreaseButton,
    ProgressValue,

    Improvement,
} from "./Dashboard.styles";
import { confirmarAsistencia } from "../../services/asistenciaService";
import { getClases } from "../../services/clasesService";
import { getCurrentUser } from "../../services/userService";
import { Button } from "@mui/material";


interface ProgressItemData {
    id: string;
    name: string;
    value: number;
    color: string;
    icon: "planchas" | "abdominales" | "sentadillas" | "flexiones";
    improvement: number;
}


const initialProgress: ProgressItemData[] = [
    {
        id: "planchas",
        name: "Planchas",
        value: 35,
        color: "#64D6B0",
        icon: "planchas",
        improvement: 5,
    },
    {
        id: "abdominales",
        name: "Abdominales",
        value: 42,
        color: "#FF9A4A",
        icon: "abdominales",
        improvement: 8,
    },
    {
        id: "sentadillas",
        name: "Sentadillas",
        value: 50,
        color: "#A67CFF",
        icon: "sentadillas",
        improvement: 10,
    },
    {
        id: "flexiones",
        name: "Flexiones",
        value: 30,
        color: "#FF5964",
        icon: "flexiones",
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

    case "abdominales":
      return <GiPush {...iconProps} />;

    case "sentadillas":
      return <GiWeightLiftingUp {...iconProps} />;

    case "flexiones":
      return <GiWeightLiftingDown {...iconProps} />;

    default:
      return null;
  }
};

function Dashboard() {

    const navigate = useNavigate();

    const [progress, setProgress] =
        useState<ProgressItemData[]>(initialProgress);

    const [editing, setEditing] =
        useState<string | null>(null);

    const [confirmed, setConfirmed] =
        useState(false);


    const updateValue = (
        id: string,
        amount: number
    ) => {

        setProgress((current) =>
            current.map((item) => {

                if (item.id !== id) {
                    return item;
                }

                return {
                    ...item,
                    value: Math.max(
                        0,
                        item.value + amount
                    ),
                };
            })
        );
    };

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
                        "06",
                        "13",
                        "20",
                        "27",
                    ].map((day) => {

                        const selected =
                            day === "27";

                        return (
                            <DateCard
                                key={day}
                                $selected={selected}
                            >

                                <DateDay>
                                    DOM
                                </DateDay>

                                <DateNumber>
                                    {day}
                                </DateNumber>

                                <DateMonth>
                                    SEP
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

                        <PeriodButton
                            type="button"
                        >
                            Últimas 4 semanas
                            <ChevronDown size={17} />
                        </PeriodButton>

                    </ProgressHeader>


                    <ProgressGrid>

                        {progress.map((item) => (

                            <ProgressItem key={item.id}>

                                <ProgressItemHeader>

                                    <ExerciseIcon>
                                        {getExerciseIcon(
                                            item.icon,
                                            item.color
                                        )}
                                    </ExerciseIcon>


                                    <ExerciseName>
                                        {item.name}
                                    </ExerciseName>


                                    <EditButton
                                        type="button"
                                        onClick={() =>
                                            setEditing(
                                                editing === item.id
                                                    ? null
                                                    : item.id
                                            )
                                        }
                                    >
                                        <Pencil size={17} />
                                    </EditButton>

                                </ProgressItemHeader>

                                <ProgressValueContainer>

                                    <DecreaseButton
                                        type="button"
                                        onClick={() =>
                                            updateValue(item.id, -1)
                                        }
                                    >
                                        <Minus size={18} />
                                    </DecreaseButton>

                                    <ProgressValue>
                                        {item.value}
                                    </ProgressValue>

                                    <IncreaseButton
                                        type="button"
                                        onClick={() =>
                                            updateValue(item.id, 1)
                                        }
                                    >
                                        <Plus size={18} />
                                    </IncreaseButton>

                                </ProgressValueContainer>

                                <Improvement>

                                    <ArrowUp size={15} />

                                    +{item.improvement} esta semana

                                </Improvement>

                            </ProgressItem>

                        ))}

                    </ProgressGrid>

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