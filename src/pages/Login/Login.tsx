import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import type { loginForm } from "../../types/User";
import { signIn } from "../../services/authService";
import nuevaIlustracion from "../../assets/nueva-ilustracion.png";
import logoNuevaIlustracion from "../../assets/icon-nueva-ilustracion.png";
import { Input } from "../../components/Input/Input.tsx"
import { ForgotPassword, LoginButton } from "../../components/Title/Title.ts";
import { ContinueLine, ContinueText, ContinueWith, CreateAccountButton, LegalContainer, LegalLink, LegalLinks, LegalSeparator, LegalText, LoginContainer, LoginForm, LoginPage, Logo, Separator, SeparatorDiamond, SeparatorLine, SocialButton, SocialButtonsContainer, Subtitle, Title, WelcomeDescription, WelcomeTitle } from "./Login.styles.ts";
import { ArrowRight, UserRoundPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

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
        <LoginPage style={{
            backgroundImage: `url(${nuevaIlustracion})`
        }}>
            <LoginContainer>

                <Logo
                    src={logoNuevaIlustracion}
                    alt="Nueva Ilustración"
                />
                <Title>
                    NUEVA
                    <br />
                    ILUSTRACIÓN
                </Title>
                <Subtitle>
                    THINK TANK DE TERCERA
                    <br />
                    POSICIÓN CIENTIFICISTA
                </Subtitle>
                <Separator>
                    <SeparatorLine />
                    <SeparatorDiamond />
                    <SeparatorLine />
                </Separator>
                <WelcomeTitle>
                    Bienvenido de nuevo
                </WelcomeTitle>
                <WelcomeDescription>
                    Accede a tu espacio de formación,
                    <br />
                    actividades y comunidad.
                </WelcomeDescription>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>

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

                    <ForgotPassword
                        type="button"
                        // onClick={() => navigate("/forgot-password")}
                    >
                        ¿Olvidaste tu contraseña?
                    </ForgotPassword>

                    <LoginButton type="submit">
                        <span>INICIAR SESIÓN</span>

                        <ArrowRight />
                    </LoginButton>
                </LoginForm >

                <ContinueWith>
                    <ContinueLine />

                    <ContinueText>
                        O CONTINÚA CON
                    </ContinueText>

                    <ContinueLine />
                </ContinueWith>

                <SocialButtonsContainer>

                    <SocialButton type="button">
                        <FcGoogle />
                        Google
                    </SocialButton>

                    <SocialButton type="button">
                        <FaApple />
                        Apple
                    </SocialButton>

                </SocialButtonsContainer>

                <CreateAccountButton
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    <UserRoundPlus />

                    <span>CREAR NUEVA CUENTA</span>
                </CreateAccountButton>
                <LegalContainer>
                    <LegalText>
                        Al continuar aceptas nuestros
                    </LegalText>

                    <LegalLinks>
                        <LegalLink
                            type="button"
                            // onClick={() => navigate("/terms")}
                        >
                            Términos y Condiciones
                        </LegalLink>

                        <LegalSeparator>y</LegalSeparator>

                        <LegalLink
                            type="button"
                            // onClick={() => navigate("/privacy")}
                        >
                            Política de Privacidad
                        </LegalLink>
                    </LegalLinks>
                </LegalContainer>
            </LoginContainer>
        </LoginPage>
    )
};

export default Login;