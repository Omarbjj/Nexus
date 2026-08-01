import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Rol, TipoDocumento, UserForm } from "../../types/User";
import { createUser } from "../../services/userService";
import { useEffect, useState } from "react";
import { getRoles } from "../../services/rolService";
import { getTiposDocumento } from "../../services/tipoDocumentoService";

function Register () {
    const navigate = useNavigate();

    const [roles, setRoles] = useState<Rol[]>([]);
    const [tiposDocumento, setTiposDocumento] = useState<TipoDocumento[]>([]);

    const {
        control,
        handleSubmit,
    } = useForm<UserForm>({
        defaultValues: {
            tipo_documento_id: 0,
            numero_documento: "",
            nombres: "",
            apellidos: "",
            email: "",
            password: "",
            rol_id: 0,
        }
    });

    const onSubmit = async (data: UserForm) => {

        try {

            await createUser(data);

            navigate("/");

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        const loadCatalogos = async () => {

            try {

                const [rolesResponse, tiposDocumentoResponse] = await Promise.all([
                    getRoles(),
                    getTiposDocumento()
                ]);

                setRoles(rolesResponse);
                setTiposDocumento(tiposDocumentoResponse);

            } catch (error) {

                console.error(error);

            }

        };

        loadCatalogos();

    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4">
                Crear Usuario
            </Typography>

            <Controller
                name="tipo_documento_id"
                control={control}
                rules={{
                    required: "Seleccione un tipo de documento"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        select
                        label="Tipo documento"
                    >
                        <MenuItem value={0}>
                            Seleccione un tipo de documento
                        </MenuItem>

                        {
                            tiposDocumento.map((tipo) => (

                                <MenuItem
                                    key={tipo.id}
                                    value={tipo.id}
                                >
                                    {tipo.nombre}
                                </MenuItem>

                            ))
                        }
                    </TextField>

                )}
            />

            <Controller
                name="numero_documento"
                control={control}
                rules={{
                    required: "Ingrese el documento"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        label="Número documento"
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                rules={{
                    required: "Ingrese un usuario"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        label="Usuario"
                    />

                )}
            />

            <Controller
                name="password"
                control={control}
                rules={{
                    required: "Ingrese una contraseña"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        type="password"
                        label="Contraseña"
                    />

                )}
            />

            <Controller
                name="nombres"
                control={control}
                rules={{
                    required: "Ingrese los nombres"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        label="Nombres"
                    />

                )}
            />

            <Controller
                name="apellidos"
                control={control}
                rules={{
                    required: "Ingrese los apellidos"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        label="Apellidos"
                    />

                )}
            />

            <Controller
                name="rol_id"
                control={control}
                rules={{
                    required: "Seleccione un rol"
                }}
                render={({ field }) => (

                    <TextField
                        {...field}
                        select
                        label="rol"
                    >
                        <MenuItem value={0}>
                            Seleccione un rol
                        </MenuItem>

                        {

                            roles.map((rol) => (

                                <MenuItem
                                    key={rol.id}
                                    value={rol.id}
                                >
                                    {rol.nombre}
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
                Crear usuario
            </Button>
        </form>
    )
}

export default Register;