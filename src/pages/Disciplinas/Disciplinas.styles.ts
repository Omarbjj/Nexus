import styled from "styled-components";
import { AreaArrow } from "../Home/Home.styles";

export const DisciplineHeader = styled.div`
    margin-bottom: 30px;
`;

export const BackButton = styled.button`
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 25px;

    border-radius: 50%;

    border: 1px solid #263740;

    background: #0b151a;

    color: #f4f2ed;

    cursor: pointer;
`;

export const DisciplineTitle = styled.h1`
    margin: 0;

    max-width: 100%;

    font-family: "Times New Roman", serif;

    font-size: clamp(34px, 8vw, 48px);

    line-height: 1.02;

    color: #f4f2ed;

    overflow-wrap: break-word;
`;

export const DisciplineSubtitle = styled.p`
    margin: 14px 0 0;

    max-width: 100%;

    font-family: "Times New Roman", serif;

    font-size: clamp(18px, 4.8vw, 24px);

    line-height: 1.35;

    color: #aeb9be;

    overflow-wrap: break-word;
`;

/* =========================================
   CONTENEDOR DE DISCIPLINAS
========================================= */

export const DisciplineContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;

    box-sizing: border-box;
`;


/* =========================================
   TARJETA DE DISCIPLINA
========================================= */

export const DisciplineAreaCard = styled.button<{
    $variant: "physical" | "philosophy";
}>`
    position: relative;

    width: 100%;

    /*
     * La altura se adapta al ancho de pantalla.
     * Nunca será menor de 260px ni mayor de 325px.
     */
    height: clamp(260px, 70vw, 325px);

    margin: 0 0 18px;
    padding: clamp(20px, 5vw, 32px);

    display: block;

    overflow: hidden;

    box-sizing: border-box;

    border-radius: clamp(22px, 5vw, 28px);
    border: 1px solid #263740;

    cursor: pointer;

    text-align: left;

    color: #ffffff;

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "#0d211e"
            : "#0d1928"};

    &::after {
        content: "";

        position: absolute;

        inset: 0;

        z-index: 1;

        pointer-events: none;

        background:
            linear-gradient(
                90deg,
                rgba(7, 20, 18, 0.98) 0%,
                rgba(7, 20, 18, 0.90) 27%,
                rgba(7, 20, 18, 0.58) 48%,
                rgba(7, 20, 18, 0.15) 72%,
                rgba(7, 20, 18, 0) 100%
            );
    }

    &[data-discipline="boxing"]::after {
        background:
            linear-gradient(
                90deg,
                rgba(8, 18, 31, 0.98) 0%,
                rgba(8, 18, 31, 0.90) 27%,
                rgba(8, 18, 31, 0.58) 48%,
                rgba(8, 18, 31, 0.15) 72%,
                rgba(8, 18, 31, 0) 100%
            );
    }

    @media (max-width: 400px) {
        height: 270px;

        padding: 20px;
    }

    @media (max-width: 360px) {
        height: 250px;

        padding: 18px;

        border-radius: 20px;
    }
`;


/* =========================================
   IMAGEN
========================================= */

export const DisciplineAreaImage = styled.img`
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;

    width: 67%;
    height: 100%;

    object-fit: cover;

    object-position: center;

    display: block;

    z-index: 0;

    pointer-events: none;

    mask-image:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 12%,
            black 32%,
            black 100%
        );

    -webkit-mask-image:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 12%,
            black 32%,
            black 100%
        );

    @media (max-width: 400px) {
        width: 65%;
    }

    @media (max-width: 360px) {
        width: 62%;
    }
`;


/* =========================================
   ICONO
========================================= */

export const DisciplineAreaIcon = styled.div<{
    $variant: "physical" | "philosophy";
}>`
    position: relative;

    z-index: 3;

    width: clamp(76px, 22vw, 112px);
    height: clamp(72px, 20vw, 100px);

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: clamp(12px, 3vw, 22px);

    border-radius: clamp(18px, 4vw, 24px);

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "rgba(55, 112, 94, 0.48)"
            : "rgba(46, 71, 108, 0.55)"};

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#86d8b6"
            : "#9b9aff"};

    svg {
        width: clamp(42px, 12vw, 58px);
        height: clamp(42px, 12vw, 58px);
    }
`;

/* =========================================
   TÍTULO
========================================= */

export const DisciplineAreaTitle = styled.h2<{
    $variant: "physical" | "philosophy";
}>`
    position: relative;

    z-index: 3;

    margin: 0 0 8px;

    max-width: 55%;

    font-family: "Times New Roman", serif;

    font-size: clamp(28px, 8vw, 40px);

    line-height: 1;

    font-weight: 700;

    color: #f4f2ed;

    overflow-wrap: break-word;

    word-break: normal;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.45);

    @media (max-width: 400px) {
        max-width: 60%;

        font-size: 30px;
    }

    @media (max-width: 360px) {
        max-width: 62%;

        font-size: 27px;
    }
`;

/* =========================================
   DESCRIPCIÓN
========================================= */

export const DisciplineAreaDescription = styled.p`
    position: relative;

    z-index: 3;

    margin: 0;

    max-width: 52%;

    font-family: "Times New Roman", serif;

    font-size: clamp(18px, 5vw, 27px);

    line-height: 1.25;

    color: #b9c8c9;

    overflow-wrap: break-word;

    word-break: normal;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 400px) {
        max-width: 58%;

        font-size: 19px;

        line-height: 1.3;
    }

    @media (max-width: 360px) {
        max-width: 60%;

        font-size: 17px;
    }
`;

export const DisciplineAreaArrow = styled(AreaArrow)`
    z-index: 4;

    width: clamp(54px, 15vw, 74px);
    height: clamp(54px, 15vw, 74px);

    right: clamp(16px, 4vw, 28px);
    bottom: clamp(16px, 4vw, 25px);

    border-radius: 50%;

    background: #f5f5f3;

    color: #17252e;

    box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.25);

    display: flex;

    align-items: center;
    justify-content: center;

    svg {
        width: clamp(26px, 7vw, 34px);
        height: clamp(26px, 7vw, 34px);
    }
`;

/* =========================================
   ASISTENCIA
========================================= */

export const AttendanceCard = styled.div`
    margin-top: 28px;

    padding: 24px 20px;

    border-radius: 28px;

    border: 1px solid #23343c;

    background: #0c151a;

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.22);
`;

export const AttendanceHeader = styled.div`
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;
`;

export const AttendanceTitle = styled.h2`
    margin: 0;

    font-family: "Times New Roman", serif;

    font-size: 30px;

    color: #f4f2ed;
`;

export const AttendancePeriod = styled.button`
    padding: 9px 13px;

    border-radius: 20px;

    border: 1px solid #29434d;

    background: #0d2028;

    color: #cbd4d7;

    font-size: 12px;
`;

/* =========================================
   DONUT + ESTADÍSTICAS
========================================= */

export const AttendanceContent = styled.div`
    display: flex;

    align-items: center;

    gap: 18px;

    margin-top: 22px;
`;

export const DonutWrapper = styled.div`
    flex: 1;

    display: flex;

    justify-content: center;
`;

export const Donut = styled.div<{
    $attendance: number;
}>`
    width: 155px;
    height: 155px;

    border-radius: 50%;

    display: flex;

    align-items: center;
    justify-content: center;

    background: ${({ $attendance }) =>
        `conic-gradient(
            #68cda8 0% ${$attendance}%,
            #ff5963 ${$attendance}% 100%
        )`};

    position: relative;

    &::before {
        content: "";

        position: absolute;

        width: 116px;
        height: 116px;

        border-radius: 50%;

        background: #0b1419;
    }
`;

export const DonutCenter = styled.div`
    position: relative;

    z-index: 1;

    text-align: center;
`;

export const DonutNumber = styled.div`
    font-family: "Times New Roman", serif;

    font-size: 42px;

    line-height: 1;

    color: #f4f1e8;
`;

export const DonutLabel = styled.div`
    margin-top: 6px;

    font-size: 13px;

    line-height: 1.15;

    color: #adb8bc;
`;


/* =========================================
   ESTADÍSTICAS
========================================= */

export const Statistics = styled.div`
    flex: 1;

    display: flex;

    flex-direction: column;

    gap: 12px;
`;

export const Statistic = styled.div`
    display: grid;

    grid-template-columns:
        12px
        minmax(0, 1fr)
        auto;

    align-items: center;

    column-gap: 8px;

    padding: 14px;

    border-radius: 16px;

    background: #111f26;

    border: 1px solid #1d3038;

    font-size: 12px;

    color: #aeb8bc;
`;

export const StatisticIndicator = styled.span<{
    $type: "attendance" | "absence";
}>`
    width: 11px;
    height: 11px;

    border-radius: 50%;

    background: ${({ $type }) =>
        $type === "attendance"
            ? "#68cda8"
            : "#ff5963"};
`;

export const StatisticLabel = styled.span`
    font-size: 13px;

    color: #d4dbdd;
`;

export const StatisticValue = styled.strong<{
    $type?: "absence";
}>`
    font-family: "Times New Roman", serif;

    font-size: 25px;

    color: ${({ $type }) =>
        $type === "absence"
            ? "#ff6870"
            : "#68cda8"};
`;


/* =========================================
   GRÁFICA
========================================= */

export const ChartSection = styled.div`
    margin-top: 25px;

    padding-top: 20px;

    border-top: 1px solid #1c2d34;
`;

export const ChartTitle = styled.h3`
    margin: 0 0 20px;

    font-family: "Times New Roman", serif;

    font-size: 21px;

    color: #eeeae3;
`;

export const Chart = styled.div`
    height: 145px;

    display: flex;

    align-items: flex-end;

    justify-content: space-around;

    gap: 8px;
`;

export const ChartColumn = styled.div`
    flex: 1;

    height: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-end;

    gap: 6px;
`;

export const ChartBar = styled.div<{
    $value: number;
    $type: string;
}>`
    width: 26px;

    height: ${({ $value }) =>
        `${Math.max($value * 25, 25)}px`};

    border-radius: 6px 6px 3px 3px;

    background: ${({ $type }) =>
        $type === "asistencia"
            ? "#68cda8"
            : "#ff5963"};
`;

export const ChartValue = styled.span`
    font-size: 12px;

    color: #c2cbce;
`;

export const ChartLabel = styled.span`
    font-size: 12px;

    color: #8f9da2;
`;