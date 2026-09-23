import { useNavigate } from "react-router";
import { BottomNav, Container, NavItem, Page } from "../Home/Home.styles";
import {
    DisciplineHeader,
    BackButton,
    DisciplineTitle,
    DisciplineSubtitle,
    DisciplineAreaCard,
    DisciplineAreaImage,
    DisciplineAreaIcon,
    DisciplineAreaTitle,
    DisciplineAreaDescription,
    DisciplineAreaArrow,
    AttendanceCard,
    AttendanceHeader,
    AttendanceTitle,
    AttendancePeriod,
    AttendanceContent,
    DonutWrapper,
    Donut,
    DonutCenter,
    DonutNumber,
    DonutLabel,
    Statistics,
    Statistic,
    StatisticIndicator,
    StatisticLabel,
    StatisticValue,
    ChartSection,
    ChartTitle,
    ChartColumn,
    ChartValue,
    ChartBar,
    ChartLabel,
    Chart,
} from "./Disciplinas.styles";
import { Activity, ArrowLeft, ArrowRight, CalendarPlus, User, Users } from "lucide-react";
import jiuJitsuImage from "../../assets/jiu-jitsu.png";
import boxeoImage from "../../assets/boxeo.png";

function Disciplinas () {


    const navigate = useNavigate();

    const KimonoIcon = () => (
        <svg
            width="42"
            height="42"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 6L10 10L5 21L12 25L15 19V40H33V19L36 25L43 21L38 10L31 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M17 6L24 14L31 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M15 27H33"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            <path
                d="M18 20L24 27L30 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const BoxingGlovesIcon = () => (
        <svg
            width="42"
            height="42"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 29C7 26 7 20 10 16L14 11C16 8 21 9 22 13L24 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M24 19L29 13C31 10 36 11 37 15L39 22C40 26 37 29 34 31L25 38H14C11 38 9 36 9 33C9 30 11 28 14 28H20L24 19Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M27 17L32 21"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            <path
                d="M19 28L24 32"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );

    const asistencias = 12;
    const inasistencias = 3;

    const totalClases =
        asistencias + inasistencias;

    const porcentajeAsistencia =
        Math.round(
            (asistencias / totalClases) * 100
        );

    const porcentajeInasistencia =
        Math.round(
            (inasistencias / totalClases) * 100
        );

    const datosMensuales = [
        {
            mes: "Abr",
            valor: 3,
            tipo: "asistencia",
        },
        {
            mes: "May",
            valor: 3,
            tipo: "asistencia",
        },
        {
            mes: "Jun",
            valor: 2,
            tipo: "asistencia",
        },
        {
            mes: "Jul",
            valor: 1,
            tipo: "inasistencia",
        },
        {
            mes: "Ago",
            valor: 3,
            tipo: "asistencia",
        },
        {
            mes: "Set",
            valor: 3,
            tipo: "inasistencia",
        },
    ];

    return (
        <Page>
            <Container>
                {/* ================= HEADER ================= */}
                <DisciplineHeader>
                    <BackButton
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={27} />
                    </BackButton>

                    <DisciplineTitle>
                        Selecciona una disciplina
                    </DisciplineTitle>

                    <DisciplineSubtitle>
                        Elige la disciplina en la que deseas participar
                        <br />
                        y comienza tu entrenamiento.
                    </DisciplineSubtitle>

                </DisciplineHeader>

                {/* ================= DISCIPLINAS ================= */}

                {/* ================= JIU JITSU ================= */}
                <DisciplineAreaCard
                    $variant="physical"
                    data-discipline="jiu-jitsu"
                    type="button"
                    onClick={() => navigate("/dashboard/2")}
                >

                    <DisciplineAreaIcon $variant="physical">
                        <KimonoIcon />
                    </DisciplineAreaIcon>

                    <DisciplineAreaTitle $variant="physical">
                        Jiu Jitsu
                    </DisciplineAreaTitle>

                    <DisciplineAreaDescription>
                        Disciplina, técnica
                        <br />
                        y control.
                    </DisciplineAreaDescription>

                    <DisciplineAreaImage
                        src={jiuJitsuImage}
                        alt=""
                    />

                    <DisciplineAreaArrow>
                        <ArrowRight size={20} />
                    </DisciplineAreaArrow>

                </DisciplineAreaCard>

                {/* ================= BOXEO ================= */}
                <DisciplineAreaCard
                    $variant="philosophy"
                    data-discipline="boxing"
                    type="button"
                    onClick={() => navigate("/disciplina/boxeo")}
                >

                    <DisciplineAreaIcon $variant="philosophy">
                        <BoxingGlovesIcon />
                    </DisciplineAreaIcon>

                    <DisciplineAreaTitle $variant="philosophy">
                        Boxeo
                    </DisciplineAreaTitle>

                    <DisciplineAreaDescription>
                        Fuerza, disciplina
                        <br />
                        y superación.
                    </DisciplineAreaDescription>

                    <DisciplineAreaImage
                        src={boxeoImage}
                        alt=""
                    />

                    <DisciplineAreaArrow>
                        <ArrowRight size={20} />
                    </DisciplineAreaArrow>

                </DisciplineAreaCard>

                {/* ================= ASISTENCIA ================= */}
                <AttendanceCard>

                    <AttendanceHeader>

                        <AttendanceTitle>
                            Mi asistencia
                        </AttendanceTitle>

                        <AttendancePeriod>
                            Últimos 6 meses
                            <span>⌄</span>
                        </AttendancePeriod>

                    </AttendanceHeader>


                    <AttendanceContent>

                        {/* DONUT */}

                        <DonutWrapper>

                            <Donut
                                $attendance={
                                    porcentajeAsistencia
                                }
                            >

                                <DonutCenter>

                                    <DonutNumber>
                                        {totalClases}
                                    </DonutNumber>

                                    <DonutLabel>
                                        Clases
                                        <br />
                                        totales
                                    </DonutLabel>

                                </DonutCenter>

                            </Donut>

                        </DonutWrapper>


                        {/* ESTADÍSTICAS */}

                        <Statistics>

                            <Statistic>

                                <StatisticIndicator
                                    $type="attendance"
                                />

                                <StatisticLabel>
                                    Asistencias
                                </StatisticLabel>

                                <StatisticValue>
                                    {asistencias}
                                </StatisticValue>

                                <span>
                                    {porcentajeAsistencia}%
                                </span>

                            </Statistic>


                            <Statistic>

                                <StatisticIndicator
                                    $type="absence"
                                />

                                <StatisticLabel>
                                    Inasistencias
                                </StatisticLabel>

                                <StatisticValue
                                    $type="absence"
                                >
                                    {inasistencias}
                                </StatisticValue>

                                <span>
                                    {porcentajeInasistencia}%
                                </span>

                            </Statistic>

                        </Statistics>

                    </AttendanceContent>


                    {/* ================= GRÁFICA ================= */}

                    <ChartSection>

                        <ChartTitle>
                            Asistencias e inasistencias
                        </ChartTitle>

                        <Chart>

                            {datosMensuales.map(
                                (dato) => (

                                    <ChartColumn
                                        key={dato.mes}
                                    >

                                        <ChartValue>
                                            {dato.valor}
                                        </ChartValue>

                                        <ChartBar
                                            $value={
                                                dato.valor
                                            }
                                            $type={
                                                dato.tipo
                                            }
                                        />

                                        <ChartLabel>
                                            {dato.mes}
                                        </ChartLabel>

                                    </ChartColumn>

                                )
                            )}

                        </Chart>

                    </ChartSection>

                </AttendanceCard>

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
    )
};

export default Disciplinas;