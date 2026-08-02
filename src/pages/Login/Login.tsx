import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import "./Login.scss";
import type { loginForm } from "../../types/User";
import { signIn } from "../../services/authService";
import fondoNuevaIlustracion from "../../assets/fondo-nueva-ilustracion.jpg";
import Input from "../../components/Input/Input";
import { Title } from "../../components/Title/Title.ts";

function Login () {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
    } = useForm<loginForm>({
        defaultValues: {
            email: "",
            password: "",
        }
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
            {/* <p>NUEVA ILUSTRACION</p> */}
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
                        required: "Ingrese un correo"
                    }}
                    render={({ field }) => (

                        <Input
                            {...field}
                            type="text"
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

                        <Input
                            {...field}
                            type="password"
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