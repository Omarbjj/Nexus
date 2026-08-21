import styled from "styled-components";

export const Page = styled.main`
    min-height: 100dvh;
    width: 100%;

    background:
        radial-gradient(
            circle at 70% 10%,
            rgba(40, 70, 80, 0.18),
            transparent 30%
        ),
        #080d12;

    color: #f3f4f6;

    padding: 24px 20px 120px;

    box-sizing: border-box;

    overflow-x: hidden;

    @media (max-width: 480px) {
        padding: 20px 16px 120px;
    }

    @media (max-width: 360px) {
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    box-sizing: border-box;
`;

/* =========================
   HEADER
========================= */

export const Header = styled.header`
    position: relative;

    min-height: 280px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding-top: 10px;

    box-sizing: border-box;

    @media (max-width: 480px) {
        min-height: 300px;
    }

    @media (max-width: 400px) {
        min-height: 285px;
    }

    @media (max-width: 360px) {
        min-height: 270px;
    }
`;

export const HeaderLeft = styled.div`
    position: relative;
    z-index: 2;

    width: 58%;

    min-width: 0;

    @media (max-width: 480px) {
        width: 62%;
    }

    @media (max-width: 400px) {
        width: 64%;
    }
`;

export const MenuButton = styled.button`
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;

    color: #ffffff;

    cursor: pointer;

    margin-bottom: 38px;

    padding: 0;

    @media (max-width: 480px) {
        margin-bottom: 32px;
    }

    @media (max-width: 360px) {
        margin-bottom: 26px;
    }
`;

export const WelcomeTitle = styled.h1`
    margin: 0;

    font-size: clamp(32px, 8vw, 48px);
    line-height: 1.05;
    font-weight: 700;

    letter-spacing: -1.5px;

    max-width: 100%;

    overflow-wrap: break-word;

    @media (max-width: 400px) {
        font-size: clamp(29px, 8vw, 36px);
    }
`;

export const UserName = styled.span`
    display: block;

    color: #a8c4d8;

    margin-top: 4px;
`;

export const WelcomeDescription = styled.p`
    margin: 20px 0 0;

    color: #aeb6be;

    font-size: 16px;
    line-height: 1.55;

    max-width: 230px;

    @media (max-width: 400px) {
        font-size: 15px;
        margin-top: 16px;
        max-width: 210px;
    }

    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

export const ProfileImageWrapper = styled.div`
    position: absolute;

    right: -20px;
    bottom: 0;

    width: 58%;
    max-width: 360px;

    height: 280px;

    overflow: hidden;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    pointer-events: none;

    z-index: 1;

    mask-image: linear-gradient(
        to bottom,
        black 70%,
        transparent 100%
    );

    -webkit-mask-image: linear-gradient(
        to bottom,
        black 70%,
        transparent 100%
    );

    @media (max-width: 480px) {
        right: -12px;
        width: 56%;
        height: 250px;
    }

    @media (max-width: 400px) {
        right: -8px;
        width: 54%;
        height: 225px;
    }

    @media (max-width: 360px) {
        width: 52%;
        height: 210px;
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    filter: saturate(0.9);

    display: block;
`;

export const LogoutButton = styled.button`
    position: absolute;

    top: 10px;
    right: 0;

    z-index: 4;

    height: 48px;

    padding: 0 16px;

    display: flex;
    align-items: center;
    gap: 9px;

    border: 1px solid #26323b;
    border-radius: 14px;

    background: rgba(12, 18, 23, 0.82);

    color: #e8edf0;

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    white-space: nowrap;

    svg {
        color: #69c9c8;
        flex-shrink: 0;
    }

    @media (max-width: 480px) {
        height: 44px;
        padding: 0 13px;
        font-size: 12px;
    }

    @media (max-width: 400px) {
        padding: 0 11px;
        gap: 7px;
    }

    @media (max-width: 360px) {
        height: 42px;
        font-size: 11px;
    }
`;

/* =========================
   USER INFO
========================= */

export const UserCard = styled.section`
    position: relative;
    z-index: 5;

    margin-top: -5px;

    padding: 6px 20px;

    border: 1px solid #25313a;
    border-radius: 24px;

    background: rgba(15, 22, 28, 0.94);

    box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.25);

    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);

    box-sizing: border-box;

    @media (max-width: 480px) {
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 22px;
    }

    @media (max-width: 360px) {
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export const UserRow = styled.div`
    min-height: 80px;

    display: flex;
    align-items: center;

    gap: 16px;

    border-bottom: 1px solid #222c33;

    min-width: 0;

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 480px) {
        min-height: 72px;
        gap: 12px;
    }

    @media (max-width: 360px) {
        min-height: 68px;
        gap: 10px;
    }
`;

export const UserIcon = styled.div<{ $color: string }>`
    flex-shrink: 0;

    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: ${({ $color }) => $color};

    background: ${({ $color }) => `${$color}18`};

    svg {
        width: 25px;
        height: 25px;
    }

    @media (max-width: 480px) {
        width: 48px;
        height: 48px;

        svg {
            width: 23px;
            height: 23px;
        }
    }

    @media (max-width: 360px) {
        width: 44px;
        height: 44px;

        svg {
            width: 21px;
            height: 21px;
        }
    }
`;

export const UserData = styled.div`
    flex: 1;

    min-width: 0;
`;

export const UserLabel = styled.span`
    display: block;

    color: #ffffff;

    font-size: 15px;
    font-weight: 700;

    margin-bottom: 5px;

    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

export const UserValue = styled.span`
    display: block;

    color: #b9c0c5;

    font-size: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    min-width: 0;

    @media (max-width: 360px) {
        font-size: 13px;
    }
`;

export const Arrow = styled.div`
    color: #ffffff;

    display: flex;
    align-items: center;

    flex-shrink: 0;
`;

export const RoleBadge = styled.span`
    display: inline-flex;

    align-items: center;

    padding: 5px 12px;

    border-radius: 20px;

    background: rgba(126, 91, 42, 0.25);

    color: #d9b47c;

    font-size: 13px;
    font-weight: 700;

    white-space: nowrap;

    @media (max-width: 360px) {
        padding: 4px 10px;
        font-size: 12px;
    }
`;

/* =========================
   SCORE
========================= */

export const ScoreSection = styled.section`
    margin-top: 25px;

    width: 100%;

    display: grid;

    grid-template-columns:
        minmax(58px, 1fr)
        minmax(210px, 270px)
        minmax(58px, 1fr);

    align-items: center;

    gap: 4px;

    box-sizing: border-box;

    @media (max-width: 430px) {
        grid-template-columns:
            minmax(52px, 1fr)
            minmax(205px, 245px)
            minmax(52px, 1fr);

        gap: 2px;
    }

    @media (max-width: 380px) {
        grid-template-columns:
            50px
            minmax(195px, 1fr)
            50px;
    }

    @media (max-width: 350px) {
        grid-template-columns:
            46px
            minmax(180px, 1fr)
            46px;

        gap: 1px;
    }
`;

export const ScoreSide = styled.div`
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    color: #c8ced2;

    font-size: 12px;
    line-height: 1.5;

    box-sizing: border-box;

    overflow-wrap: break-word;

    @media (max-width: 430px) {
        font-size: 11px;
        line-height: 1.4;
    }

    @media (max-width: 380px) {
        font-size: 10px;
    }

    @media (max-width: 350px) {
        font-size: 9px;
    }
`;

export const ScoreSideLeft = styled(ScoreSide)`
    justify-self: stretch;
`;

export const ScoreSideRight = styled(ScoreSide)`
    justify-self: stretch;
`;

export const ScoreIcon = styled.div<{ $color: string }>`
    width: 54px;
    height: 54px;

    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    border: 1px solid ${({ $color }) => `${$color}35`};

    background: ${({ $color }) => `${$color}10`};

    color: ${({ $color }) => $color};

    flex-shrink: 0;

    svg {
        width: 27px;
        height: 27px;
    }

    @media (max-width: 430px) {
        width: 48px;
        height: 48px;

        margin-bottom: 8px;

        svg {
            width: 24px;
            height: 24px;
        }
    }

    @media (max-width: 380px) {
        width: 44px;
        height: 44px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`;

export const ScoreContent = styled.div`
    width: 100%;
    height: clamp(215px, 68vw, 270px);

    min-width: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    box-sizing: border-box;

    overflow: visible;
`;

export const ScoreArc = styled.div`
    position: absolute;

    width: calc(100% - 28px);
    height: calc(100% - 28px);

    max-width: 235px;
    max-height: 235px;

    min-width: 185px;
    min-height: 185px;

    border-radius: 50%;

    border: 7px solid transparent;

    border-top-color: #a9c9bf;
    border-left-color: #8cbca8;
    border-right-color: #91a7c5;

    transform: rotate(-25deg);

    box-sizing: border-box;

    @media (max-width: 380px) {
        border-width: 6px;
        min-width: 175px;
        min-height: 175px;
    }

    @media (max-width: 350px) {
        min-width: 165px;
        min-height: 165px;
    }
`;

export const ScoreCenter = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 0;
`;

export const ScoreLabel = styled.span`
    color: #cfd5d9;

    font-size: 13px;
    font-weight: 500;

    letter-spacing: 0.5px;

    white-space: nowrap;

    @media (max-width: 380px) {
        font-size: 11px;
    }
`;

export const ScoreNumber = styled.span`
    margin-top: 8px;

    font-size: clamp(68px, 18vw, 82px);

    line-height: 0.95;

    font-weight: 700;

    color: #e9e5d8;

    letter-spacing: -4px;

    white-space: nowrap;

    @media (max-width: 380px) {
        font-size: 66px;
        letter-spacing: -3px;
    }

    @media (max-width: 350px) {
        font-size: 60px;
    }
`;

export const ScorePoints = styled.span`
    margin-top: 12px;

    color: #d4d9dd;

    font-size: 13px;

    letter-spacing: 6px;

    white-space: nowrap;

    @media (max-width: 380px) {
        font-size: 11px;
        letter-spacing: 4px;
    }
`;

export const ScoreMessage = styled.div`
    margin: 18px auto 0;

    width: 100%;
    max-width: 430px;

    min-height: 58px;

    display: flex;
    align-items: center;

    gap: 12px;

    padding: 10px 18px;

    box-sizing: border-box;

    border: 1px solid #253139;
    border-radius: 30px;

    background: rgba(15, 22, 27, 0.85);

    color: #c8ced1;

    font-size: 12px;
    line-height: 1.4;

    text-align: left;

    @media (max-width: 480px) {
        padding: 10px 14px;
        font-size: 11px;
    }

    @media (max-width: 360px) {
        font-size: 10px;
        gap: 8px;
    }
`;

export const Star = styled.div`
    flex-shrink: 0;

    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(119, 160, 139, 0.15);

    color: #9cc4b3;

    @media (max-width: 360px) {
        width: 32px;
        height: 32px;
    }
`;

/* =========================
   SECTIONS
========================= */

export const Section = styled.section`
    margin-top: 26px;

    width: 100%;

    min-width: 0;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 14px;

    min-width: 0;
`;

export const SectionTitle = styled.h2`
    margin: 0;

    font-size: 20px;

    color: #f1f3f4;

    font-weight: 700;

    min-width: 0;

    @media (max-width: 360px) {
        font-size: 18px;
    }
`;

export const SeeAll = styled.button`
    border: none;
    background: transparent;

    color: #8fbcb3;

    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 13px;

    cursor: pointer;

    flex-shrink: 0;

    padding: 4px 0;

    @media (max-width: 360px) {
        font-size: 12px;
    }
`;

/* =========================
   AREAS
========================= */

export const AreasGrid = styled.div`
    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 12px;

    box-sizing: border-box;

    @media (max-width: 400px) {
        gap: 10px;
    }

    @media (max-width: 340px) {
        grid-template-columns: 1fr;
    }
`;

export const AreaCard = styled.button<{
    $variant: "physical" | "philosophy";
}>`
    position: relative;

    min-width: 0;
    min-height: 180px;

    overflow: hidden;

    padding: 16px;

    border-radius: 18px;

    border: 1px solid #29343a;

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "linear-gradient(135deg, #111c1a, #18231f)"
            : "linear-gradient(135deg, #111923, #172231)"};

    color: #ffffff;

    text-align: left;

    cursor: pointer;

    box-sizing: border-box;

    @media (max-width: 480px) {
        min-height: 175px;
        padding: 14px;
    }

    @media (max-width: 400px) {
        min-height: 165px;
        padding: 12px;
        border-radius: 16px;
    }
`;

export const AreaIcon = styled.div<{
    $variant: "physical" | "philosophy";
}>`
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 14px;

    background: ${({ $variant }) =>
        $variant === "physical"
            ? "rgba(111, 155, 135, 0.18)"
            : "rgba(101, 132, 175, 0.18)"};

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#9bc0ae"
            : "#91afd6"};

    flex-shrink: 0;

    svg {
        width: 23px;
    }

    @media (max-width: 400px) {
        width: 40px;
        height: 40px;

        border-radius: 12px;

        svg {
            width: 21px;
        }
    }
`;

export const AreaTitle = styled.h3<{
    $variant: "physical" | "philosophy";
}>`
    margin: 14px 0 6px;

    font-size: 15px;

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#9bc0ae"
            : "#91afd6"};

    line-height: 1.2;

    max-width: 70%;

    @media (max-width: 400px) {
        font-size: 14px;
        margin-top: 11px;
    }
`;

export const AreaDescription = styled.p`
    margin: 0;

    max-width: 130px;

    color: #d0d5d8;

    font-size: 12px;
    line-height: 1.5;

    position: relative;
    z-index: 2;

    @media (max-width: 400px) {
        font-size: 11px;
        max-width: 125px;
    }
`;

export const AreaImage = styled.img`
    position: absolute;

    right: -5px;
    bottom: -5px;

    width: 55%;

    max-height: 125px;

    object-fit: contain;

    pointer-events: none;

    @media (max-width: 400px) {
        width: 53%;
        max-height: 110px;
    }
`;

export const AreaArrow = styled.div`
    position: absolute;

    right: 10px;
    bottom: 10px;

    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #f3f4f4;

    color: #243139;

    z-index: 3;

    flex-shrink: 0;

    @media (max-width: 400px) {
        width: 34px;
        height: 34px;

        right: 8px;
        bottom: 8px;
    }
`;

/* =========================
   QUICK ACTIONS
========================= */

export const ActionsGrid = styled.div`
    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 12px;

    box-sizing: border-box;

    @media (max-width: 400px) {
        gap: 10px;
    }

    @media (max-width: 340px) {
        grid-template-columns: 1fr;
    }
`;

export const ActionCard = styled.button<{
    $color: "green" | "blue";
}>`
    width: 100%;

    min-width: 0;
    min-height: 92px;

    padding: 14px;

    display: flex;
    align-items: center;

    gap: 10px;

    text-align: left;

    border-radius: 17px;

    border: 1px solid #28333a;

    background: #11181e;

    color: #ffffff;

    cursor: pointer;

    box-sizing: border-box;

    overflow: hidden;

    @media (max-width: 480px) {
        padding: 12px;
        gap: 8px;
        min-height: 100px;
    }

    @media (max-width: 400px) {
        min-height: 96px;
        border-radius: 16px;
        padding: 10px;
    }
`;

export const ActionIcon = styled.div<{
    $color: "green" | "blue";
}>`
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: ${({ $color }) =>
        $color === "green"
            ? "rgba(106, 148, 128, 0.18)"
            : "rgba(88, 119, 160, 0.18)"};

    color: ${({ $color }) =>
        $color === "green"
            ? "#a0c5b2"
            : "#9bb7db"};

    @media (max-width: 400px) {
        width: 42px;
        height: 42px;

        border-radius: 10px;
    }
`;

export const ActionContent = styled.div`
    min-width: 0;

    flex: 1;

    overflow: hidden;
`;

export const ActionTitle = styled.span<{
    $color: "green" | "blue";
}>`
    display: block;

    color: ${({ $color }) =>
        $color === "green"
            ? "#9fc4b0"
            : "#91afd6"};

    font-size: 13px;
    font-weight: 700;

    margin-bottom: 5px;

    line-height: 1.25;

    overflow-wrap: break-word;

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;

export const ActionDescription = styled.span`
    display: block;

    color: #b9c1c5;

    font-size: 11px;
    line-height: 1.4;

    overflow-wrap: break-word;

    @media (max-width: 400px) {
        font-size: 10px;
    }
`;

export const ActionArrow = styled.div`
    color: #e8edef;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

/* =========================
   BOTTOM NAVIGATION
========================= */

export const BottomNav = styled.nav`
    position: fixed;

    left: 50%;

    bottom: max(12px, env(safe-area-inset-bottom));

    transform: translateX(-50%);

    width: calc(100% - 28px);

    max-width: 680px;

    min-height: 72px;
    height: auto;

    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    align-items: center;

    border: 1px solid #27323a;

    border-radius: 30px;

    background: rgba(13, 19, 24, 0.96);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.35);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    z-index: 50;

    box-sizing: border-box;

    padding: 4px 6px;

    @media (max-width: 480px) {
        width: calc(100% - 24px);
        min-height: 70px;
        border-radius: 28px;
    }

    @media (max-width: 380px) {
        width: calc(100% - 18px);
        min-height: 66px;
        border-radius: 26px;
        padding: 3px 4px;
    }
`;

export const NavItem = styled.button<{
    $active?: boolean;
}>`
    width: 100%;
    min-width: 0;

    height: 100%;

    border: none;

    background: transparent;

    color: ${({ $active }) =>
        $active ? "#9ec7b5" : "#d1d6da"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

    font-size: 11px;

    cursor: pointer;

    padding: 5px 2px;

    box-sizing: border-box;

    white-space: nowrap;

    svg {
        width: 22px;
        height: 22px;

        flex-shrink: 0;
    }

    @media (max-width: 380px) {
        font-size: 10px;

        gap: 3px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;