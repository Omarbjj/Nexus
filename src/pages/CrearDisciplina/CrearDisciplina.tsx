import { Controller, useForm } from "react-hook-form";
import type { DisciplinaForm } from "../../types/User";
import { createDisciplina } from "../../services/disciplinaService";
import { Button, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getLideres } from "../../services/userService";
import BackButton from "../../components/Button/BackButton";

function CrearDisciplina() {
    const [lideres, setLideres] = useState<any[]>([]);

    const {
        control,
        handleSubmit,
    } = useForm<DisciplinaForm>({
        defaultValues: {
            nombre: "",
            activa: true,
            responsable_id: 0,
        }
    });

    const onSubmit = async (
        data: DisciplinaForm
    ) => {

        try {

            const response =
                await createDisciplina(data);

            console.log(response);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        const loadData = async () => {

            try {

                const response = await getLideres();

                setLideres(response);

            } catch (error) {

                console.error(error);

            }

        };

        loadData();

    }, []);

    return (
        <>
            <BackButton />
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="nombre"
                    control={control}
                    rules={{
                        required: "Ingrese el nombre"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            label="Nombre"
                        />

                    )}
                />

                <Controller
                    name="activa"
                    control={control}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            select
                            label="Estado"
                            value={String(field.value)}
                            onChange={(e) => field.onChange(e.target.value === "true")}
                        >

                            <MenuItem value="true">
                                Activa
                            </MenuItem>

                            <MenuItem value="false">
                                Inactiva
                            </MenuItem>

                        </TextField>

                    )}
                />

                <Controller
                    name="responsable_id"
                    control={control}
                    rules={{
                        required: "Seleccione un responsable"
                    }}
                    render={({ field }) => (

                        <TextField
                            {...field}
                            select
                            label="Responsable"
                            fullWidth
                        >

                            <MenuItem value={0}>
                                Seleccione un responsable
                            </MenuItem>

                            {
                                lideres.map((lider) => (

                                    <MenuItem
                                        key={lider.id}
                                        value={lider.id}
                                    >
                                        {lider.nombres} {lider.apellidos}
                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    )}
                />

                <Button
                    type="submit"
                    variant="contained"
                >
                    Crear disciplina
                </Button>

            </form>
        </>
    )
};

export default CrearDisciplina;