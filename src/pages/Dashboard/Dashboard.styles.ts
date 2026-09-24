import styled from "styled-components";


/* =========================================
   HEADER
========================================= */

export const ClassesHeader = styled.div`
    margin-bottom: 22px;

    width: 100%;
`;


export const BackButton = styled.button`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 50%;

    border: 1px solid #203744;

    background: #09151b;

    color: #f4f2ed;

    cursor: pointer;

    flex-shrink: 0;
`;


export const PageTitle = styled.h1`
    margin: 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        34px,
        8vw,
        48px
    );

    line-height: 1;

    color: #f4f2ed;
`;


export const MonthTitle = styled.h2`
    margin: 10px 0 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        22px,
        5vw,
        30px
    );

    line-height: 1.1;

    color: #f4f2ed;

    font-weight: 600;

    strong {
        color: #8fa2b5;
    }
`;


/* =========================================
   FECHAS
========================================= */

export const DatesContainer = styled.div`
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: clamp(7px, 2vw, 14px);

    width: 100%;

    margin-bottom: 24px;
`;


export const DateCard = styled.button<{
    $selected?: boolean;
}>`
    min-width: 0;

    aspect-ratio: 0.82;

    padding: 10px 5px;

    border-radius: 20px;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#3ca9ff"
                : "#1d3441"};

    background:
        ${({ $selected }) =>
            $selected
                ? "rgba(31, 83, 128, .38)"
                : "#09171e"};

    color: #f4f2ed;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    box-sizing: border-box;

    transition: .2s ease;

    &:active {
        transform: scale(.98);
    }

    @media (max-width: 390px) {
        border-radius: 15px;
    }
`;


export const DateDay = styled.span`
    font-size: clamp(
        11px,
        2.7vw,
        15px
    );

    font-weight: 600;

    color: #9eabb8;
`;


export const DateNumber = styled.span`
    margin: 4px 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        27px,
        7vw,
        38px
    );

    line-height: 1;
`;


export const DateMonth = styled.span`
    font-size: clamp(
        10px,
        2.5vw,
        13px
    );

    color: #9eabb8;
`;


/* =========================================
   TRAINING CARD
========================================= */

export const TrainingCard = styled.section`
    width: 100%;

    padding: clamp(
        20px,
        5vw,
        28px
    );

    border-radius: 26px;

    border: 1px solid #1d3b4a;

    background:
        linear-gradient(
            135deg,
            #0a1c25,
            #09151c
        );

    box-sizing: border-box;

    margin-bottom: 22px;
`;


export const TrainingHeader = styled.div`
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;

    margin-bottom: 20px;

    @media (max-width: 480px) {
        align-items: flex-start;
    }
`;


export const TrainingTitle = styled.h2`
    margin: 0;

    font-size: clamp(
        15px,
        3.5vw,
        20px
    );

    color: #55b7ff;

    letter-spacing: .5px;
`;


export const TrainingStatus = styled.div`
    flex-shrink: 0;

    display: flex;

    align-items: center;

    gap: 7px;

    padding: 9px 13px;

    border-radius: 20px;

    background: #102b3a;

    color: #83caff;

    font-size: clamp(
        11px,
        2.8vw,
        14px
    );

    white-space: nowrap;

    span {
        width: 9px;
        height: 9px;

        border-radius: 50%;

        background: #58b6ff;
    }

    @media (max-width: 400px) {
        padding: 7px 9px;
    }
`;


export const TrainingInfo = styled.div`
    display: flex;

    flex-direction: column;

    gap: 15px;

    width: 100%;
`;


export const InfoRow = styled.div`
    display: flex;

    align-items: center;

    gap: 14px;

    min-width: 0;
`;


export const InfoIcon = styled.div`
    width: 28px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #aebdce;
`;


export const InfoText = styled.span`
    min-width: 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        17px,
        4.2vw,
        22px
    );

    line-height: 1.2;

    color: #cbd4df;

    overflow-wrap: anywhere;
`;


/* =========================================
   CONFIRMAR ASISTENCIA
========================================= */

export const ConfirmButton = styled.button<{
    $confirmed?: boolean;
}>`
    width: 100%;

    min-height: 56px;

    margin-top: 22px;

    border: none;

    border-radius: 16px;

    background:
        ${({ $confirmed }) =>
            $confirmed
                ? "#45bd91"
                : "#3da7ff"};

    color: #061017;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    font-size: clamp(
        13px,
        3.2vw,
        16px
    );

    font-weight: 800;

    cursor: pointer;

    transition: .2s ease;

    &:active {
        transform: scale(.98);
    }
`;


/* =========================================
   RECOMENDACIONES
========================================= */

export const RecommendationsCard = styled.section`
    width: 100%;

    padding: clamp(
        20px,
        5vw,
        28px
    );

    border-radius: 26px;

    border: 1px solid #1b3440;

    background: #09161c;

    box-sizing: border-box;

    margin-bottom: 22px;
`;


export const SectionTitle = styled.h2`
    margin: 0 0 18px;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        25px,
        6vw,
        34px
    );

    line-height: 1.05;

    color: #f4f2ed;
`;


export const RecommendationList = styled.div`
    display: flex;

    flex-direction: column;

    gap: 0;
`;


export const RecommendationItem = styled.div`
    min-height: 55px;

    display: flex;

    align-items: center;

    gap: 12px;

    border-bottom: 1px solid #18303b;

    &:last-child {
        border-bottom: none;
    }
`;


export const RecommendationIcon = styled.div`
    width: 38px;
    height: 38px;

    flex-shrink: 0;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #142b3b;

    color: #b8c9dc;
`;


export const RecommendationText = styled.span`
    min-width: 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        15px,
        3.7vw,
        19px
    );

    color: #cbd3dd;

    line-height: 1.25;

    overflow-wrap: anywhere;
`;

/* =========================================
   PROGRESO
========================================= */

export const ProgressCard = styled.section`
    width: 100%;
    box-sizing: border-box;

    padding: 22px;

    border-radius: 26px;

    border: 1px solid #1b3440;

    background: #09161c;

    margin-bottom: 25px;

    overflow: hidden;

    @media (max-width: 600px) {
        padding: 16px;
        border-radius: 22px;
    }
`;


/* =========================================
   HEADER
========================================= */

export const ProgressHeader = styled.div`
    width: 100%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;

    margin-bottom: 18px;

    box-sizing: border-box;

    min-width: 0;
`;


export const ProgressTitle = styled.h2`
    margin: 0;

    font-family: "Times New Roman", serif;

    font-size: clamp(
        28px,
        6vw,
        36px
    );

    line-height: 1;

    color: #f4f2ed;

    white-space: nowrap;
`;


export const PeriodButton = styled.button`
    flex-shrink: 0;

    height: 38px;

    padding: 0 14px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 6px;

    border-radius: 20px;

    border: 1px solid #21404e;

    background: #0c222b;

    color: #c4ced7;

    font-size: 13px;

    white-space: nowrap;

    cursor: pointer;

    box-sizing: border-box;

    @media (max-width: 420px) {
        padding: 0 10px;

        font-size: 11px;

        height: 36px;
    }
`;


/* =========================================
   GRID
========================================= */

export const ProgressGrid = styled.div`
    width: 100%;

    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 12px;

    box-sizing: border-box;

    @media (max-width: 360px) {
        gap: 8px;
    }
`;


/* =========================================
   CARD DE EJERCICIO
========================================= */

export const ProgressItem = styled.div`
    position: relative;

    width: 100%;
    min-width: 0;

    height: 148px;

    padding: 14px 16px;

    box-sizing: border-box;

    border-radius: 20px;

    border: 1px solid #1c3947;

    background: #0b1c24;

    overflow: hidden;

    display: grid;

    grid-template-columns:
        52px minmax(0, 1fr) 28px;

    grid-template-rows:
        40px
        1fr
        34px;

    column-gap: 8px;

    align-items: center;

    @media (max-width: 600px) {
        grid-template-columns:
            48px minmax(0, 1fr) 26px;

        height: 145px;

        padding: 12px;
    }
`;

/* =========================================
   HEADER DEL EJERCICIO
========================================= */

/*
   IMPORTANTE:
   El header deja de comportarse como una fila.
   El ícono, nombre y lápiz se distribuyen
   directamente dentro del grid del card.
*/

export const ProgressItemHeader = styled.div`
    display: contents;
`;


/* =========================================
   ÍCONO
========================================= */

export const ExerciseIcon = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

/* =========================================
   NOMBRE
========================================= */

export const ExerciseName = styled.span`
    grid-column: 2;

    grid-row: 1;

    min-width: 0;

    width: 100%;

    align-self: center;

    font-family: "Times New Roman", serif;

    font-size: 17px;

    line-height: 1.1;

    color: #d9e0e6;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    text-align: left;

    @media (max-width: 600px) {
        font-size: 15px;
    }

    @media (max-width: 380px) {
        font-size: 14px;
    }
`;


/* =========================================
   EDITAR
========================================= */

export const EditButton = styled.button`
    grid-column: 3;

    grid-row: 1;

    width: 28px;

    height: 28px;

    padding: 0;

    margin: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    justify-self: end;

    align-self: center;

    border: none;

    background: transparent;

    color: #48a9ff;

    cursor: pointer;

    box-sizing: border-box;

    svg {
        width: 19px;
        height: 19px;
    }

    @media (max-width: 600px) {
        width: 25px;
        height: 25px;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    @media (max-width: 380px) {
        width: 23px;
        height: 23px;

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;


/* =========================================
   CONTROLES DEL VALOR
========================================= */

export const ProgressValueContainer = styled.div`
    grid-column: 1 / -1;

    grid-row: 2;

    width: 100%;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    box-sizing: border-box;

    margin: 0;
`;

const valueButton = `
    width: 34px;
    height: 34px;

    flex: 0 0 34px;

    padding: 0;

    border-radius: 50%;

    border: 1px solid #294657;

    background: #142d3d;

    color: #dbe7ef;

    display: flex;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    box-sizing: border-box;

    transition: .15s ease;

    &:active {
        transform: scale(.94);
    }

    @media (max-width: 600px) {
        width: 30px;
        height: 30px;

        flex-basis: 30px;
    }

    @media (max-width: 380px) {
        width: 28px;
        height: 28px;

        flex-basis: 28px;
    }
`;

export const DecreaseButton = styled.button`
    ${valueButton}
`;


export const IncreaseButton = styled.button`
    ${valueButton}
`;

export const ProgressValue = styled.span`
    width: 74px;

    height: 38px;

    flex: 0 0 74px;

    display: flex;

    align-items: center;

    justify-content: center;

    box-sizing: border-box;

    border: 1px solid #294657;

    border-radius: 10px;

    background: #091820;

    color: #f4f2ed;

    font-family: "Times New Roman", serif;

    font-size: 28px;

    font-weight: 600;

    line-height: 1;

    @media (max-width: 600px) {
        width: 68px;

        flex-basis: 68px;

        height: 36px;

        font-size: 25px;
    }

    @media (max-width: 380px) {
        width: 62px;

        flex-basis: 62px;

        height: 34px;

        font-size: 23px;
    }
`;

/* =========================================
   MEJORA
========================================= */

export const Improvement = styled.div`
    grid-column: 1 / -1;

    grid-row: 3;

    width: 100%;

    height: 24px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 4px;

    margin: 0;

    color: #45aaff;

    font-size: 12px;

    line-height: 1;

    white-space: nowrap;

    box-sizing: border-box;

    svg {
        width: 14px;
        height: 14px;

        flex-shrink: 0;
    }

    @media (max-width: 600px) {
        font-size: 11px;

        svg {
            width: 13px;
            height: 13px;
        }
    }

    @media (max-width: 380px) {
        font-size: 10px;

        svg {
            width: 12px;
            height: 12px;
        }
    }
`;