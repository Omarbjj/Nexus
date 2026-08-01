import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { getClases } from "../../services/clasesService";
import { getCurrentUser } from "../../services/userService";
import { confirmarAsistencia } from "../../services/asistenciaService";
import BackButton from "../../components/Button/BackButton";

function Dashboard() {

    const navigate = useNavigate();

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

        <>
            <BackButton />

            <h1>Listado de clases</h1>

            {

                clases.map((clase) => (

                    <div key={clase.id}>

                        <h3>{clase.disciplinas.nombre}</h3>

                        <p>Fecha: {clase.fecha}</p>

                        <p>Inicio: {clase.hora_inicio}</p>

                        <p>Fin: {clase.hora_fin}</p>

                        <p>Estado: {clase.estados.nombre}</p>

                        <hr />

                    </div>

                ))

            }

            <Button
                variant="contained"
                onClick={handleConfirmar}
                disabled={
                    confirmando ||
                    asistenciaConfirmada ||
                    !claseProgramada
                }
            >
                {
                    confirmando
                        ? "Confirmando..."
                        : asistenciaConfirmada
                            ? "Asistencia confirmada"
                            : "Confirmar asistencia"
                }
            </Button>

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

        </>

    );

}

export default Dashboard;