import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCurrentUser } from "../../services/userService";
import BackButton from "../../components/Button/BackButton";

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
        <div className="home">
            <BackButton />
            <p>Bienvenido</p>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Nombre"
                        secondary={`${user.nombres} ${user.apellidos}`}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Correo"
                        secondary="omar.cubas.b@gmail.com"
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Dni"
                        secondary={user.numero_documento}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="rol"
                        secondary={user.roles.nombre}
                    />
                </ListItem>
            </List>
            <Typography>
                Puntaje
            </Typography>
            <Typography>
                {user.puntaje}
            </Typography>
            <Swiper initialSlide={0} spaceBetween={20} slidesPerView={1}>
                <SwiperSlide>
                    <div onClick={() => navigate("/disciplinas")}>
                        Formación Física
                    </div>
                </SwiperSlide>
                <SwiperSlide>Grupo de Filosofía</SwiperSlide>
            </Swiper>
            {
                user.roles.nombre === "LIDER" && (
                    <>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => navigate("/clases")}
                        >
                            Crear clase
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => navigate("/disciplina")}
                        >
                            Crear disciplina
                        </Button>
                    </>
                )
            }
        </div>
    )
}

export default Home;