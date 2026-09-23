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
     * IMPORTANTE:
     * Las imágenes son panorámicas ~2:1.
     * El card conserva esa proporción.
     */
    aspect-ratio: 2 / 1;
    min-height: 0;
    height: auto;

    margin: 0 0 18px;

    padding: clamp(16px, 4vw, 28px);

    display: block;

    box-sizing: border-box;
    overflow: hidden;

    border-radius: clamp(20px, 4vw, 28px);
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

        background: linear-gradient(
            90deg,
            rgba(7, 20, 18, 0.88) 0%,
            rgba(7, 20, 18, 0.65) 30%,
            rgba(7, 20, 18, 0.20) 55%,
            rgba(7, 20, 18, 0) 75%
        );
    }

    &[data-discipline="boxing"]::after {
        background: linear-gradient(
            90deg,
            rgba(8, 18, 31, 0.88) 0%,
            rgba(8, 18, 31, 0.65) 30%,
            rgba(8, 18, 31, 0.20) 55%,
            rgba(8, 18, 31, 0) 75%
        );
    }
`;

/* =========================================
   IMAGEN
========================================= */

export const DisciplineAreaImage = styled.img`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    z-index: 0;

    pointer-events: none;
`;

/* =========================================
   ICONO
========================================= */

export const DisciplineAreaIcon = styled.div<{
    $variant: "physical" | "philosophy";
}>`
    position: relative;
    z-index: 3;

    width: clamp(48px, 12vw, 72px);
    height: clamp(48px, 12vw, 72px);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: clamp(8px, 2vw, 14px);

    border-radius: clamp(14px, 3vw, 20px);

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "rgba(55, 112, 94, 0.58)"
            : "rgba(46, 71, 108, 0.65)"};

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#86d8b6"
            : "#9b9aff"};

    svg {
        width: clamp(27px, 7vw, 40px);
        height: clamp(27px, 7vw, 40px);
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

    width: 50%;
    max-width: 250px;

    margin: 0 0 5px;

    font-family: "Times New Roman", serif;

    font-size: clamp(22px, 5vw, 34px);
    line-height: 1;

    font-weight: 700;

    color: #f4f2ed;

    white-space: nowrap;

    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

/* =========================================
   DESCRIPCIÓN
========================================= */

export const DisciplineAreaDescription = styled.p`
    position: relative;
    z-index: 3;

    width: 48%;
    max-width: 240px;

    margin: 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(14px, 3.5vw, 21px);
    line-height: 1.25;

    color: #b9c8c9;

    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

export const DisciplineAreaArrow = styled(AreaArrow)`
    position: absolute;

    z-index: 4;

    width: clamp(42px, 11vw, 62px);
    height: clamp(42px, 11vw, 62px);

    right: clamp(10px, 3vw, 22px);
    bottom: clamp(10px, 3vw, 20px);

    border-radius: 50%;

    background: #f5f5f3;
    color: #17252e;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: clamp(21px, 5vw, 30px);
        height: clamp(21px, 5vw, 30px);
    }
`;

/* =========================================
   ASISTENCIA
========================================= */

export const AttendanceCard = styled.div`
    width: 100%;

    margin-top: 10px;

    padding: clamp(20px, 4vw, 28px);

    box-sizing: border-box;

    border-radius: clamp(22px, 5vw, 28px);

    border: 1px solid #23343c;

    background: #0c151a;

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.22);

    overflow: hidden;
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
    display: grid;

    grid-template-columns:
        minmax(145px, 1fr)
        minmax(180px, 1fr);

    align-items: center;

    gap: 18px;

    margin-top: 22px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        gap: 20px;
    }
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
    width: 100%;

    display: grid;

    grid-template-columns:
        12px
        minmax(0, 1fr)
        auto
        auto;

    align-items: center;

    column-gap: 10px;

    padding: 12px 14px;

    box-sizing: border-box;

    min-width: 0;

    border-radius: 16px;

    background: #111f26;

    border: 1px solid #1d3038;

    color: #aeb8bc;

    @media (max-width: 400px) {
        grid-template-columns:
            10px
            minmax(0, 1fr)
            auto
            auto;

        column-gap: 7px;

        padding: 11px 10px;
    }
`;

export const StatisticIndicator = styled.span<{
    $type: "attendance" | "absence";
}>`
    width: 11px;
    height: 11px;

    flex-shrink: 0;

    border-radius: 50%;

    background: ${({ $type }) =>
        $type === "attendance"
            ? "#68cda8"
            : "#ff5963"};

    @media (max-width: 400px) {
        width: 10px;
        height: 10px;
    }
`;

export const StatisticLabel = styled.span`
    min-width: 0;

    overflow: hidden;

    white-space: nowrap;

    text-overflow: ellipsis;

    font-size: clamp(12px, 3.2vw, 14px);

    color: #d4dbdd;
`;

export const StatisticValue = styled.strong<{
    $type?: "absence";
}>`
    min-width: 28px;

    text-align: right;

    font-family: "Times New Roman", serif;

    font-size: clamp(20px, 5vw, 25px);

    line-height: 1;

    color: ${({ $type }) =>
        $type === "absence"
            ? "#ff6870"
            : "#68cda8"};
`;

export const StatisticPercentage = styled.span`
    min-width: 38px;

    text-align: right;

    font-size: clamp(12px, 3.5vw, 15px);

    line-height: 1;

    color: #c5ced1;
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