import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import "./Login.scss";
import type { loginForm } from "../../types/User";
import { signIn } from "../../services/authService";
import fondoNuevaIlustracion from "../../assets/fondo-nueva-ilustracion.jpg";
import { Input } from "../../components/Input/Input.tsx"
import { Title } from "../../components/Title/Title.ts";

function Login () {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
    } = useForm<loginForm>({
        mode: "onChange",
    });

    const onSubmit = async (data: loginForm) => {

        try {

            await signIn(data.email, data.password);

            navigate("/home");

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <div className="login" style={{
            backgroundImage: `url(${fondoNuevaIlustracion})`
        }}>
            <Title>
                NUEVA
                <br />
                ILUSTRACIÓN
            </Title>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Ingresa tu correo electrónico",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ingresa un correo electrónico válido"
                        }
                    }}
                    render={({ field, fieldState }) => (

                        <Input
                            {...field}
                            variant="email"
                            error={fieldState.error?.message}
                        />

                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "Ingresa tu contraseña"
                    }}
                    render={({ field, fieldState }) => (

                        <Input
                            {...field}
                            variant="password"
                            error={fieldState.error?.message}
                        />

                    )}
                />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Iniciar sesión
                </Button>
            </form>

            <Button
                variant="contained"
                type="submit"
                onClick={() => navigate("/register")}
            >
                Crear usuario
            </Button>
        </div>
    )
};

export default Login;