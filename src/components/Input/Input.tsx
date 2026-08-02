import type { InputHTMLAttributes } from "react";

function Input ({
    type = "text",
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <>
            <input
                {...props}
                type={type}
            />
        </>
    )
};

export default Input;