import styled from "styled-components";

/* =========================================================
   PAGE / LAYOUT
========================================================= */

export const LoginPage = styled.main`
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;

    display: flex;
    justify-content: center;

    background-color: #05080d;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    box-sizing: border-box;

    padding-top: env(safe-area-inset-top, 0px);
    padding-right: env(safe-area-inset-right, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
    padding-left: env(safe-area-inset-left, 0px);

    overflow-x: hidden;
`;

export const LoginContainer = styled.div`
    width: min(100%, 620px);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding:
        clamp(40px, 8dvh, 100px)
        clamp(16px, 5vw, 28px)
        clamp(32px, 6dvh, 60px);

    box-sizing: border-box;

    /*
     * En pantallas con poca altura no dejamos
     * demasiado espacio arriba.
     */
    @media (max-height: 750px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    /*
     * Landscape en móviles.
     */
    @media (orientation: landscape) and (max-height: 600px) {
        padding-top: 24px;
        padding-bottom: 24px;
    }
`;


/* =========================================================
   LOGO
========================================================= */

export const Logo = styled.img`
    width: clamp(70px, 18vw, 120px);
    max-width: 120px;
    height: auto;

    display: block;

    margin: 0 auto clamp(18px, 3dvh, 32px);

    object-fit: contain;

    flex-shrink: 0;
`;


/* =========================================================
   TITLE
========================================================= */

export const Title = styled.h1`
    margin: 0;

    width: 100%;

    color: #ffffff;

    font-family: "Times New Roman", Georgia, serif;

    font-size: clamp(32px, 7vw, 52px);
    font-weight: 400;

    line-height: 1.05;

    letter-spacing: clamp(2px, 0.8vw, 5px);

    text-align: center;
    text-transform: uppercase;

    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);

    overflow-wrap: normal;
`;


/* =========================================================
   SUBTITLE
========================================================= */

export const Subtitle = styled.p`
    width: 100%;

    margin: clamp(12px, 2dvh, 18px) 0 0;

    color: #18c8e8;

    font-family: Arial, Helvetica, sans-serif;

    font-size: clamp(11px, 3vw, 18px);
    font-weight: 400;

    line-height: 1.5;

    letter-spacing: clamp(2px, 0.8vw, 5px);

    text-align: center;
    text-transform: uppercase;
`;


/* =========================================================
   SEPARATOR
========================================================= */

export const Separator = styled.div`
    width: min(60%, 300px);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(10px, 3vw, 14px);

    margin: clamp(20px, 4dvh, 30px) auto 0;
`;

export const SeparatorLine = styled.div`
    flex: 1;

    min-width: 0;

    height: 1px;

    background: rgba(167, 170, 178, 0.55);
`;

export const SeparatorDiamond = styled.div`
    width: 8px;
    height: 8px;

    flex-shrink: 0;

    border: 1px solid #858891;

    transform: rotate(45deg);

    box-sizing: border-box;
`;


/* =========================================================
   WELCOME
========================================================= */

export const WelcomeTitle = styled.h2`
    width: 100%;

    margin: clamp(24px, 4dvh, 34px) 0 0;

    color: #ffffff;

    font-family: "Times New Roman", Georgia, serif;

    font-size: clamp(26px, 6vw, 32px);
    font-weight: 600;

    line-height: 1.2;

    letter-spacing: 0.5px;

    text-align: center;

    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
`;

export const WelcomeDescription = styled.p`
    width: 100%;
    max-width: 420px;

    margin: clamp(8px, 1.5dvh, 10px) 0 0;

    color: #b5b7bd;

    font-family: Arial, Helvetica, sans-serif;

    font-size: clamp(14px, 4vw, 18px);
    font-weight: 400;

    line-height: 1.5;

    letter-spacing: 0.2px;

    text-align: center;
`;


/* =========================================================
   FORM
========================================================= */

export const LoginForm = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: clamp(10px, 2dvh, 14px);

    margin-top: clamp(24px, 4dvh, 32px);
`;


/* =========================================================
   CONTINUE WITH
========================================================= */

export const ContinueWith = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: clamp(10px, 3vw, 16px);

    margin:
        clamp(22px, 4dvh, 30px)
        0
        clamp(18px, 3dvh, 24px);
`;

export const ContinueLine = styled.div`
    flex: 1;
    min-width: 0;

    height: 1px;

    background: #454850;
`;

export const ContinueText = styled.span`
    flex-shrink: 0;

    color: #858891;

    font-family: Arial, Helvetica, sans-serif;

    font-size: clamp(10px, 2.8vw, 12px);
    font-weight: 500;

    letter-spacing: clamp(1px, 0.5vw, 2px);

    text-transform: uppercase;

    white-space: nowrap;
`;


/* =========================================================
   SOCIAL BUTTONS
========================================================= */

export const SocialButtonsContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: clamp(10px, 3vw, 16px);

    /*
     * En teléfonos extremadamente pequeños
     * los botones pasan uno debajo del otro.
     */
    @media (max-width: 320px) {
        grid-template-columns: 1fr;
    }
`;

export const SocialButton = styled.button`
    width: 100%;
    min-width: 0;

    height: clamp(56px, 9dvh, 64px);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(8px, 2.5vw, 14px);

    padding: 0 clamp(10px, 3vw, 18px);

    box-sizing: border-box;

    background: rgba(18, 20, 25, 0.85);

    border: 1px solid #454850;
    border-radius: 10px;

    color: #b5b7bd;

    font-family: Arial, Helvetica, sans-serif;

    font-size: clamp(14px, 4vw, 18px);
    font-weight: 400;

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.1s ease;

    svg {
        width: clamp(22px, 6vw, 28px);
        height: clamp(22px, 6vw, 28px);

        flex-shrink: 0;
    }

    &:hover {
        border-color: #18c8e8;

        color: #ffffff;

        background: rgba(24, 200, 232, 0.05);

        box-shadow: 0 0 14px rgba(24, 200, 232, 0.1);
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus-visible {
        outline: 2px solid #18c8e8;
        outline-offset: 3px;
    }
`;


/* =========================================================
   CREATE ACCOUNT
========================================================= */

export const CreateAccountButton = styled.button`
    width: 100%;

    min-height: clamp(60px, 9dvh, 72px);

    margin-top: clamp(24px, 4dvh, 32px);

    padding: 12px clamp(12px, 4vw, 24px);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(10px, 3vw, 16px);

    box-sizing: border-box;

    background:
        linear-gradient(#05070b, #05070b) padding-box,
        linear-gradient(
            90deg,
            #3457ff 0%,
            #168fe8 50%,
            #18c8e8 100%
        ) border-box;

    border: 1px solid transparent;
    border-radius: 10px;

    color: #25aeea;

    font-family: Arial, Helvetica, sans-serif;

    font-size: clamp(13px, 3.7vw, 17px);
    font-weight: 600;

    letter-spacing: clamp(0.4px, 0.2vw, 0.8px);

    text-align: center;
    text-transform: uppercase;

    cursor: pointer;

    transition:
        transform 0.15s ease,
        box-shadow 0.2s ease,
        filter 0.2s ease;

    svg {
        width: clamp(24px, 6vw, 30px);
        height: clamp(24px, 6vw, 30px);

        flex-shrink: 0;

        color: #18bcec;

        stroke-width: 1.8;
    }

    &:hover {
        filter: brightness(1.15);

        box-shadow:
            0 0 12px rgba(24, 200, 232, 0.12),
            0 0 20px rgba(52, 87, 255, 0.08);
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid #18c8e8;
        outline-offset: 3px;
    }
`;


/* =========================================================
   LEGAL
========================================================= */

export const LegalContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: clamp(30px, 6dvh, 42px);

    padding-bottom: env(safe-area-inset-bottom, 0px);

    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;

    text-align: center;
`;

export const LegalText = styled.p`
    margin: 0;

    color: #858891;

    font-size: clamp(12px, 3.5vw, 14px);
    font-weight: 400;

    line-height: 1.5;
`;

export const LegalLinks = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 5px;

    margin-top: 2px;

    font-size: clamp(12px, 3.5vw, 14px);

    line-height: 1.5;
`;

export const LegalLink = styled.button`
    padding: 0;

    background: transparent;
    border: none;

    color: #18a9d5;

    font-family: Arial, Helvetica, sans-serif;

    font-size: inherit;
    font-weight: 400;

    cursor: pointer;

    transition: color 0.2s ease;

    &:hover {
        color: #18c8e8;

        text-decoration: underline;
    }

    &:focus-visible {
        outline: 1px solid #18c8e8;
        outline-offset: 3px;

        border-radius: 2px;
    }
`;

export const LegalSeparator = styled.span`
    color: #858891;
`;