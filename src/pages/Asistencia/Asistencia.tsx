import { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import {
    getAsistenciasPorClase,
    registrarAsistencias
} from "../../services/asistenciaService";
import { useNavigate, useParams } from "react-router";
import BackButton from "../../components/Button/BackButton";

function Asistencia() {

    const navigate = useNavigate();

    const { claseId } = useParams();

    const [asistencias, setAsistencias] = useState<any[]>([]);

    const [selecciones, setSelecciones] =
        useState<Record<number, boolean>>({});

    const [guardando, setGuardando] =
        useState(false);

    const handleSeleccion = (
        userId: number,
        asistio: boolean
    ) => {

        setSelecciones(prev => ({
            ...prev,
            [userId]: asistio
        }));

    };

    const handleEnviar = async () => {

        try {

            if (
                Object.keys(selecciones).length !==
                asistencias.length
            ) {

                alert(
                    "Debe registrar la asistencia de todos los miembros."
                );

                return;

            }

            setGuardando(true);

            const asistenciasEnviar =
                Object.entries(selecciones).map(
                    ([userId, asistio]) => ({
                        user_id: Number(userId),
                        asistio
                    })
                );

            await registrarAsistencias(
                Number(claseId),
                asistenciasEnviar
            );

            alert("Asistencia registrada.");

            navigate("/home");

        } catch (error) {

            console.error(error);

        } finally {

            setGuardando(false);

        }

    };

    useEffect(() => {

        const loadAsistencias = async () => {

            try {

                const response =
                    await getAsistenciasPorClase(
                        Number(claseId)
                    );

                setAsistencias(response);

            } catch (error) {

                console.error(error);

            }

        };

        loadAsistencias();

    }, [claseId]);

    return (

        <>
            <BackButton />

            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >

                Tomar asistencia

            </Typography>

            {

                asistencias.map((item) => (

                    <Card
                        key={item.id}
                        sx={{ mb: 2 }}
                    >

                        <CardContent>

                            <Typography>

                                {item.users.nombres}{" "}
                                {item.users.apellidos}

                            </Typography>

                            <Button

                                variant={
                                    selecciones[item.users.id] === true
                                        ? "contained"
                                        : "outlined"
                                }

                                onClick={() =>
                                    handleSeleccion(
                                        item.users.id,
                                        true
                                    )
                                }

                            >

                                Asistió

                            </Button>

                            <Button

                                sx={{ ml: 2 }}

                                variant={
                                    selecciones[item.users.id] === false
                                        ? "contained"
                                        : "outlined"
                                }

                                onClick={() =>
                                    handleSeleccion(
                                        item.users.id,
                                        false
                                    )
                                }

                            >

                                Faltó

                            </Button>

                        </CardContent>

                    </Card>

                ))

            }

            <Button

                variant="contained"

                disabled={guardando}

                onClick={handleEnviar}

            >

                {

                    guardando
                        ? "Guardando..."
                        : "Enviar asistencia"

                }

            </Button>

        </>

    );

}

export default Asistencia;