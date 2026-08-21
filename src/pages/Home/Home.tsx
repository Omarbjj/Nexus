import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCurrentUser } from "../../services/userService";
import { ActionArrow, ActionCard, ActionContent, ActionDescription, ActionIcon, ActionsGrid, ActionTitle, AreaArrow, AreaCard, AreaDescription, AreaIcon, AreaImage, AreasGrid, AreaTitle, BottomNav, Container, Header, HeaderLeft, LogoutButton, MenuButton, NavItem, Page, ProfileImage, ProfileImageWrapper, RoleBadge, ScoreArc, ScoreCenter, ScoreContent, ScoreIcon, ScoreLabel, ScoreMessage, ScoreNumber, ScorePoints, ScoreSection, ScoreSideLeft, ScoreSideRight, Section, SectionHeader, SectionTitle, SeeAll, UserCard, UserData, UserIcon, UserLabel, UserName, UserRow, UserValue, WelcomeDescription, WelcomeTitle } from "./Home.styles";
import { Activity, ArrowRight, BookOpen, CalendarPlus, IdCard, LogOut, Mail, Menu, ShieldCheck, Star, Target, Trophy, User, Users } from "lucide-react";
import profilePlaceholder from "../../assets/profile.png"

function Home () {
    const navigate = useNavigate();

    const [user, setUser] = useState<any>(null);

    useEffect(() => {

        const loadUser = async () => {

            try {

                const response = await getCurrentUser();

                setUser(response);

            } catch (error) {

                console.error(error);

            }

        };

        loadUser();
    }, []);

    if (!user) {
        return <>Cargando...</>;
    }

    return (
        <Page>
            <Container>
                {/* ================= HEADER ================= */}
                <Header>
                    <HeaderLeft>
                        <MenuButton
                            type="button"
                            onClick={() => {}}
                            // onClick={onMenuClick}
                        >
                            <Menu size={29} />
                        </MenuButton>

                        <WelcomeTitle>
                            ¡Bienvenido,
                            <UserName>
                                {`${user.nombres}`}
                            </UserName>
                        </WelcomeTitle>

                        <WelcomeDescription>
                            Este es tu espacio de formación
                            <br />
                            y crecimiento.
                        </WelcomeDescription>
                    </HeaderLeft>

                    <ProfileImageWrapper>
                        <ProfileImage
                            src={user.foto || profilePlaceholder}
                            alt="Foto de perfil"
                        />
                    </ProfileImageWrapper>

                    <LogoutButton
                        type="button"
                        onClick={() => navigate(-1)}
                        // onClick={onLogout}
                    >
                        <LogOut size={20} />

                        <span>
                            Cerrar sesión
                        </span>
                    </LogoutButton>
                </Header>

                {/* ================= USER INFO ================= */}
                <UserCard>
                    <UserRow>
                        <UserIcon $color="#9ec7b5">
                            <User />
                        </UserIcon>

                        <UserData>
                            <UserLabel>
                                Nombre
                            </UserLabel>

                            <UserValue>
                                {`${user.nombres} ${user.apellidos}`}
                            </UserValue>
                        </UserData>
                    </UserRow>

                    <UserRow>
                        <UserIcon $color="#8db8ca">
                            <Mail />
                        </UserIcon>

                        <UserData>
                            <UserLabel>
                                Correo
                            </UserLabel>

                            <UserValue>
                                {user.correo}
                            </UserValue>
                        </UserData>
                    </UserRow>

                    <UserRow>
                        <UserIcon $color="#9e91d1">
                            <IdCard />
                        </UserIcon>

                        <UserData>
                            <UserLabel>
                                DNI
                            </UserLabel>

                            <UserValue>
                                {user.numero_documento}
                            </UserValue>
                        </UserData>
                    </UserRow>

                    <UserRow>

                        <UserIcon $color="#d2b27d">
                            <ShieldCheck />
                        </UserIcon>

                        <UserData>
                            <UserLabel>
                                Rol
                            </UserLabel>

                            <RoleBadge>
                                {user.roles.nombre}
                            </RoleBadge>
                        </UserData>
                    </UserRow>
                </UserCard>

                {/* ================= SCORE ================= */}
                <ScoreSection>
                    <ScoreSideLeft>
                        <ScoreIcon $color="#9ec7b5">
                            <Target />
                        </ScoreIcon>

                        <span>
                            Participa en clases
                            <br />
                            y actividades
                        </span>
                    </ScoreSideLeft>

                    <ScoreContent>
                        <ScoreArc />

                        <ScoreCenter>
                            <ScoreLabel>
                                PUNTAJE TOTAL
                            </ScoreLabel>

                            <ScoreNumber>
                                {user.puntaje}
                            </ScoreNumber>

                            <ScorePoints>
                                PUNTOS
                            </ScorePoints>
                        </ScoreCenter>
                    </ScoreContent>

                    <ScoreSideRight>
                        <ScoreIcon $color="#9e91d1">
                            <Trophy />
                        </ScoreIcon>

                        <span>
                            Aumenta tu puntaje
                            <br />
                            y desbloquea
                            <br />
                            beneficios
                        </span>
                    </ScoreSideRight>
                </ScoreSection>

                <ScoreMessage>

                    <Star>
                        <Star size={20} />
                    </Star>

                    <span>
                        Sigue participando en clases y actividades
                        para aumentar tu puntaje y{" "}
                        <strong>
                            desbloquear beneficios.
                        </strong>
                    </span>

                </ScoreMessage>

                {/* ================= AREAS ================= */}
                <Section>
                    <SectionHeader>
                        <SectionTitle>
                            Mis áreas
                        </SectionTitle>

                        <SeeAll
                            type="button"
                            onClick={() => {}
                                // onNavigate?.("/areas")
                            }
                        >
                            Ver todas
                            <ArrowRight size={16} />
                        </SeeAll>
                    </SectionHeader>

                    <AreasGrid>
                        <AreaCard
                            $variant="physical"
                            type="button"
                            onClick={() => navigate("/disciplinas")
                            }
                        >
                            <AreaIcon $variant="physical">
                                <Activity />
                            </AreaIcon>

                            <AreaTitle $variant="physical">
                                Formación Física
                            </AreaTitle>

                            <AreaDescription>
                                Entrena tu cuerpo
                                <br />
                                y disciplina
                            </AreaDescription>

                            <AreaImage
                                src="/images/formacion-fisica.png"
                                alt=""
                            />

                            <AreaArrow>
                                <ArrowRight size={20} />
                            </AreaArrow>
                        </AreaCard>

                        <AreaCard
                            $variant="philosophy"
                            type="button"
                            onClick={() => {}
                                // onNavigate?.(
                                //     "/grupo-filosofia"
                                // )
                            }
                        >
                            <AreaIcon $variant="philosophy">
                                <BookOpen />
                            </AreaIcon>

                            <AreaTitle $variant="philosophy">
                                Grupo de Filosofía
                            </AreaTitle>

                            <AreaDescription>
                                Desarrolla tu mente
                                <br />
                                y pensamientos
                            </AreaDescription>

                            <AreaImage
                                src="/images/grupo-filosofia.png"
                                alt=""
                            />

                            <AreaArrow>
                                <ArrowRight size={20} />
                            </AreaArrow>
                        </AreaCard>
                    </AreasGrid>
                </Section>

                {/* ================= ACTIONS ================= */}
                {
                    user.roles.nombre === "LIDER" && (
                        <Section>
                            <SectionHeader>
                                <SectionTitle>
                                    Acciones rápidas
                                </SectionTitle>
                            </SectionHeader>

                            <ActionsGrid>
                                <ActionCard
                                    $color="green"
                                    type="button"
                                    onClick={() => navigate("/clases")
                                        // onNavigate?.("/crear-clase")
                                    }
                                >
                                    <ActionIcon $color="green">
                                        <CalendarPlus />
                                    </ActionIcon>

                                    <ActionContent>
                                        <ActionTitle $color="green">
                                            CREAR CLASE
                                        </ActionTitle>

                                        <ActionDescription>
                                            Crea una nueva clase
                                            <br />
                                            y gestiona miembros
                                        </ActionDescription>
                                    </ActionContent>

                                    <ActionArrow>
                                        <ArrowRight size={19} />
                                    </ActionArrow>
                                </ActionCard>

                                <ActionCard
                                    $color="blue"
                                    type="button"
                                    onClick={() => navigate("/disciplina")
                                        // onNavigate?.(
                                        //     "/crear-disciplina"
                                        // )
                                    }
                                >
                                    <ActionIcon $color="blue">
                                        <CalendarPlus />
                                    </ActionIcon>

                                    <ActionContent>
                                        <ActionTitle $color="blue">
                                            CREAR DISCIPLINA
                                        </ActionTitle>

                                        <ActionDescription>
                                            Gestiona disciplinas
                                            <br />
                                            y responsables
                                        </ActionDescription>
                                    </ActionContent>

                                    <ActionArrow>
                                        <ArrowRight size={19} />
                                    </ActionArrow>
                                </ActionCard>
                            </ActionsGrid>

                        </Section>
                    )
                }
            </Container>

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
        </Page>
    )
}

export default Home;