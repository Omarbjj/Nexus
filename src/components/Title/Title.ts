import styled from "styled-components";

export const ForgotPassword = styled.button`
    margin: 2px auto 10px;
    padding: 0;

    align-self: center;

    background: transparent;
    border: none;

    color: #18c8e8;

    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(13px, 3.5vw, 14px);
    font-weight: 400;

    line-height: 1.4;
    letter-spacing: 0.2px;

    text-align: center;

    cursor: pointer;

    transition:
        color 0.2s ease,
        opacity 0.2s ease;

    &:hover {
        color: #5cddf0;
    }

    &:active {
        opacity: 0.7;
    }

    &:focus-visible {
        outline: 2px solid #18c8e8;
        outline-offset: 4px;
        border-radius: 2px;
    }
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 64px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
        90deg,
        #3047e8 0%,
        #167ee9 50%,
        #08cde1 100%
    );

    border: none;
    border-radius: 10px;

    color: #ffffff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;

    letter-spacing: 1.5px;
    text-transform: uppercase;

    cursor: pointer;

    transition:
        filter 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.1s ease;

    /* Flecha */
    svg {
        position: absolute;

        right: 24px;

        width: 26px;
        height: 26px;

        stroke-width: 1.8;
    }

    &:hover {
        filter: brightness(1.08);

        box-shadow:
            0 0 18px rgba(24, 200, 232, 0.20);
    }

    &:hover svg {
        transform: translateX(3px);
    }

    svg {
        transition: transform 0.2s ease;
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid #18c8e8;
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;