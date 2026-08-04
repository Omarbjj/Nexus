import { useState, type InputHTMLAttributes } from "react";
import { Divider, ErrorMessage, EyeButton, IconContainer, InputContainer, InputWrapper, StyledInput } from "../Input/Input";
import { Mail, Lock, Eye, CircleAlert, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "email" | "password";
    error?: string;
}

export function Input ({
    variant = "email",
    type,
    error,
    ...props
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = variant === "password";
    return (
        <InputWrapper>
            <InputContainer $error={!!error}>
                <IconContainer>
                    {isPassword ? <Lock /> : <Mail />}
                </IconContainer>

                <Divider />

                <StyledInput
                    {...props}
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type ?? "email"
                    }
                    placeholder={
                        isPassword ? "Contraseña" : "Correo electrónico"
                    }
                />

                {isPassword && (
                    <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff /> : <Eye />}
                    </EyeButton>
                )}
            </InputContainer>

            {error && (
                <ErrorMessage>
                    <CircleAlert />
                    <span>{error}</span>
                </ErrorMessage>
            )}
        </InputWrapper>
    )
};