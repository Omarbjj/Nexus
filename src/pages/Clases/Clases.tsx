import { Controller, useForm } from "react-hook-form";
import type { clasesForm, EstadoClase } from "../../types/User";
import { Button, MenuItem, TextField } from "@mui/material";
import { createClase } from "../../services/clasesService";
import { useEffect, useState } from "react";
import { getDisciplinas } from "../../services/disciplinaService";
import { useNavigate } from "react-router";
import { getEstadosClase } from "../../services/estadoClaseService";
import BackButton from "../../components/Button/BackButton";

function Clases () {

    const navigate = useNavigate();
    const [disciplinas, setDisciplinas] = useState<any[]>([]);
    const [estadosClase, setEstadosClase] = useState<EstadoClase[]>([]);

    const {
        control,
        handleSubmit,
    } = useForm<clasesForm>({
        defaultValues: {
            disciplina_id: 0,
            fecha: "",
            hora_inicio: "",
            hora_fin: "",
            estado_id: 0,
        }
    });

    const onSubmit = async (data: clasesForm) => {

        try {

            await createClase(data);

            navigate("/home");

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        const loadCatalogos = async () => {

            try {

                const [
                    disciplinasResponse,
                    estadosResponse
                ] = await Promise.all([
                    getDisciplinas(),
                    getEstadosClase()
                ]);

                setDisciplinas(disciplinasResponse);
                setEstadosClase(estadosResponse);

            } catch (error) {

                console.error(error);

            }

        };

        loadCatalogos();

    }, []);

    return (
        <>
            <BackButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="disciplina_id"
                    control={control}
                    rules={{
                        required: "Seleccione una disciplina"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            select
                            label="Disciplina"
                        >
                            {
                                disciplinas.map((disciplina) => (
                                    <MenuItem
                                        key={disciplina.id}
                                        value={disciplina.id}
                                    >
                                        {disciplina.nombre}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                    )}
                />

                <Controller
                    name="fecha"
                    control={control}
                    rules={{
                        required: "Ingrese la fecha"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Fecha"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="hora_inicio"
                    control={control}
                    rules={{
                        required: "Ingrese la hora de inicio"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Hora inicio"
                            type="time"
                        />
                    )}
                />

                <Controller
                    name="hora_fin"
                    control={control}
                    rules={{
                        required: "Ingrese la hora de fin"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Hora fin"
                            type="time"
                        />
                    )}
                />

                <Controller
                    name="estado_id"
                    control={control}
                    rules={{
                        required: "Seleccione un estado"
                    }}
                    render={({ field, fieldState }) => (

                        <TextField
                            {...field}
                            select
                            label="Estado"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        >
                            <MenuItem value={0}>
                                Seleccione un estado
                            </MenuItem>

                            {
                                estadosClase.map((estado) => (

                                    <MenuItem
                                        key={estado.id}
                                        value={estado.id}
                                    >
                                        {estado.nombre}
                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    )}
                />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Crear
                </Button>
            </form>
        </>
    )
};

export default Clases;