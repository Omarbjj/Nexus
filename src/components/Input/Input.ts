import styled from "styled-components";

export const InputWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #a7aab2;

    transition: color 0.2s ease;

    svg {
        width: 26px;
        height: 26px;
    }
`;

export const Divider = styled.div`
  width: 1px;
  height: 36px;

  background: #454850;
  margin: 0 24px;

  transition: background 0.2s ease;
`;

export const StyledInput = styled.input`
    flex: 1;

    border: none;
    outline: none;
    background: transparent;

    color: #ffffff;

    font-size: 18px;
    font-family: inherit;

    &::placeholder {
        color: #858891;
    }

    &:not(:placeholder-shown) {
        color: #ffffff;
    }
`;

export const EyeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;

    color: #a7aab2;

    transition: color 0.2s ease;

    svg {
        width: 26px;
        height: 26px;
    }
`;

export const ErrorMessage = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    color: #e85d68;

    font-size: 14px;
    font-family: inherit;

    padding-left: 16px;

    svg {
        width: 18px;
        height: 18px;

        flex-shrink: 0;
    }
`;

interface InputContainerProps {
    $error?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;

    background: rgba(18, 20, 25, 0.85);

    border: 1px solid ${({ $error }) => ($error ? "#e85d68" : "#454850")};
    border-radius: 12px;

    padding: 0 22px;
    box-sizing: border-box;

    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    /* =========================
       FOCUS
    ========================= */

    &:focus-within {
        border-color: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
        box-shadow: ${({ $error }) => $error ? "0 0 0 1px rgba(232, 93, 104, 0.25)" : "0 0 0 1px rgba(24, 200, 232, 0.25)"};
    }

    &:focus-within ${IconContainer} {
        color: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
    }

    &:focus-within ${Divider} {
        background: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
    }

    &:focus-within ${StyledInput} {
        color: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
    }

    &:focus-within ${StyledInput}::placeholder {
        color: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
    }

    &:focus-within ${EyeButton} {
        color: ${({ $error }) => $error ? "#e85d68" : "#18c8e8"};
    }

    /* =========================
       CON TEXTO
    ========================= */

    &:not(:focus-within) ${StyledInput}:not(:placeholder-shown) {
        color: #ffffff;
    }

    /* =========================
       ERROR
    ========================= */

    ${({ $error }) =>
        $error &&
        `
            ${IconContainer} {
                color: #e85d68;
            }

            ${Divider} {
                background: #e85d68;
            }

            ${StyledInput} {
                color: #e85d68;
            }

            ${StyledInput}::placeholder {
                color: #e85d68;
            }

            ${EyeButton} {
                color: #e85d68;
            }
        `}
`;