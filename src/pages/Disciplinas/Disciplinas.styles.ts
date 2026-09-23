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

    font-family: "Times New Roman", serif;

    font-size: 40px;

    line-height: 1.05;

    color: #f4f2ed;
`;

export const DisciplineSubtitle = styled.p`
    margin: 12px 0 0;

    font-family: "Times New Roman", serif;

    font-size: 20px;

    line-height: 1.4;

    color: #aeb9be;
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
    height: 325px;

    margin: 0 0 18px;
    padding: 28px 32px;

    display: block;

    overflow: hidden;

    box-sizing: border-box;

    border-radius: 28px;
    border: 1px solid #263740;

    cursor: pointer;

    text-align: left;

    color: #ffffff;

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "#0d211e"
            : "#0d1928"};

    /*
     * Capa oscura para mezclar la fotografía
     * con el fondo de la tarjeta.
     */
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
                rgba(7, 20, 18, 0.90) 25%,
                rgba(7, 20, 18, 0.55) 48%,
                rgba(7, 20, 18, 0.08) 78%,
                rgba(7, 20, 18, 0) 100%
            );
    }

    &[data-discipline="boxing"]::after {
        background:
            linear-gradient(
                90deg,
                rgba(8, 18, 31, 0.98) 0%,
                rgba(8, 18, 31, 0.90) 25%,
                rgba(8, 18, 31, 0.55) 48%,
                rgba(8, 18, 31, 0.08) 78%,
                rgba(8, 18, 31, 0) 100%
            );
    }

    @media (max-width: 480px) {
        height: 325px;

        padding: 28px 30px;

        border-radius: 27px;
    }

    @media (max-width: 400px) {
        height: 290px;

        padding: 22px 24px;

        border-radius: 24px;
    }
`;


/* =========================================
   IMAGEN
========================================= */

export const DisciplineAreaImage = styled.img`
    position: absolute;

    top: 0;
    right: 0;

    width: 67%;
    height: 100%;

    object-fit: cover;

    object-position: center;

    z-index: 0;

    pointer-events: none;

    display: block;

    /*
     * Hace que la fotografía desaparezca
     * progresivamente hacia el lado izquierdo.
     */
    mask-image:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 10%,
            black 32%,
            black 100%
        );

    -webkit-mask-image:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 10%,
            black 32%,
            black 100%
        );

    @media (max-width: 480px) {
        width: 68%;
    }

    @media (max-width: 400px) {
        width: 70%;
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

    width: 112px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 22px;

    border-radius: 24px;

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "rgba(55, 112, 94, 0.48)"
            : "rgba(46, 71, 108, 0.55)"};

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#86d8b6"
            : "#9b9aff"};

    svg {
        width: 58px;
        height: 58px;
    }

    @media (max-width: 480px) {
        width: 108px;
        height: 96px;

        svg {
            width: 56px;
            height: 56px;
        }
    }

    @media (max-width: 400px) {
        width: 90px;
        height: 82px;

        border-radius: 20px;

        svg {
            width: 48px;
            height: 48px;
        }
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

    margin: 0 0 10px;

    font-family: "Times New Roman", serif;

    font-size: 40px;
    line-height: 1;

    font-weight: 700;

    color: #f4f2ed;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.45);

    @media (max-width: 480px) {
        font-size: 39px;
    }

    @media (max-width: 400px) {
        font-size: 34px;
    }
`;


/* =========================================
   DESCRIPCIÓN
========================================= */

export const DisciplineAreaDescription = styled.p`
    position: relative;

    z-index: 3;

    margin: 0;

    max-width: 290px;

    font-family: "Times New Roman", serif;

    font-size: 27px;
    line-height: 1.35;

    color: #b9c8c9;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 480px) {
        font-size: 25px;
    }

    @media (max-width: 400px) {
        font-size: 21px;
    }
`;

export const DisciplineAreaArrow = styled(AreaArrow)`
    z-index: 4;

    width: 74px;
    height: 74px;

    right: 28px;
    bottom: 25px;

    border-radius: 50%;

    background: #f5f5f3;

    color: #17252e;

    box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.25);

    svg {
        width: 34px;
        height: 34px;
    }

    @media (max-width: 480px) {
        width: 70px;
        height: 70px;

        right: 25px;
        bottom: 23px;
    }

    @media (max-width: 400px) {
        width: 58px;
        height: 58px;

        right: 18px;
        bottom: 18px;

        svg {
            width: 28px;
            height: 28px;
        }
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