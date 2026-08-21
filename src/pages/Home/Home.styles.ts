import styled from "styled-components";

export const Page = styled.main`
    min-height: 100vh;
    width: 100%;

    background:
        radial-gradient(
            circle at 70% 10%,
            rgba(40, 70, 80, 0.18),
            transparent 30%
        ),
        #080d12;

    color: #f3f4f6;

    padding: 24px 20px 100px;

    box-sizing: border-box;

    overflow-x: hidden;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
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
`;

export const HeaderLeft = styled.div`
    position: relative;
    z-index: 2;

    width: 58%;
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
`;

export const WelcomeTitle = styled.h1`
    margin: 0;

    font-size: clamp(32px, 8vw, 48px);
    line-height: 1.05;
    font-weight: 700;

    letter-spacing: -1.5px;
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
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;

    filter: saturate(0.9);
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

    svg {
        color: #69c9c8;
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
`;

export const UserRow = styled.div`
    min-height: 80px;

    display: flex;
    align-items: center;

    gap: 16px;

    border-bottom: 1px solid #222c33;

    &:last-child {
        border-bottom: none;
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
`;

export const UserValue = styled.span`
    display: block;

    color: #b9c0c5;

    font-size: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Arrow = styled.div`
    color: #ffffff;

    display: flex;
    align-items: center;
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
`;

/* =========================
   SCORE
========================= */

export const ScoreSection = styled.section`
    margin-top: 25px;

    position: relative;

    display: flex;
    justify-content: center;
`;

export const ScoreSide = styled.div`
    position: absolute;

    top: 28px;

    width: 105px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    color: #c8ced2;

    font-size: 12px;
    line-height: 1.5;
`;

export const ScoreSideLeft = styled(ScoreSide)`
    left: 0;
`;

export const ScoreSideRight = styled(ScoreSide)`
    right: 0;
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

    svg {
        width: 27px;
        height: 27px;
    }
`;

export const ScoreContent = styled.div`
    width: 270px;
    height: 270px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`;

export const ScoreArc = styled.div`
    position: absolute;

    width: 235px;
    height: 235px;

    border-radius: 50%;

    border: 7px solid transparent;

    border-top-color: #a9c9bf;
    border-left-color: #8cbca8;
    border-right-color: #91a7c5;

    transform: rotate(-25deg);
`;

export const ScoreCenter = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ScoreLabel = styled.span`
    color: #cfd5d9;

    font-size: 13px;
    font-weight: 500;

    letter-spacing: 0.5px;
`;

export const ScoreNumber = styled.span`
    margin-top: 8px;

    font-size: 82px;
    line-height: 0.95;

    font-weight: 700;

    color: #e9e5d8;

    letter-spacing: -4px;
`;

export const ScorePoints = styled.span`
    margin-top: 12px;

    color: #d4d9dd;

    font-size: 13px;

    letter-spacing: 6px;
`;

export const ScoreMessage = styled.div`
    margin: -10px auto 0;

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
`;

/* =========================
   SECTIONS
========================= */

export const Section = styled.section`
    margin-top: 26px;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 14px;
`;

export const SectionTitle = styled.h2`
    margin: 0;

    font-size: 20px;

    color: #f1f3f4;

    font-weight: 700;
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
`;

/* =========================
   AREAS
========================= */

export const AreasGrid = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
`;

export const AreaCard = styled.button<{ $variant: "physical" | "philosophy" }>`
    position: relative;

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
`;

export const AreaIcon = styled.div<{ $variant: "physical" | "philosophy" }>`
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

    svg {
        width: 23px;
    }
`;

export const AreaTitle = styled.h3<{ $variant: "physical" | "philosophy" }>`
    margin: 14px 0 6px;

    font-size: 15px;

    color: ${({ $variant }) =>
        $variant === "physical"
            ? "#9bc0ae"
            : "#91afd6"};
`;

export const AreaDescription = styled.p`
    margin: 0;

    max-width: 130px;

    color: #d0d5d8;

    font-size: 12px;
    line-height: 1.5;
`;

export const AreaImage = styled.img`
    position: absolute;

    right: -5px;
    bottom: -5px;

    width: 55%;

    max-height: 125px;

    object-fit: contain;
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
`;

/* =========================
   QUICK ACTIONS
========================= */

export const ActionsGrid = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
`;

export const ActionCard = styled.button<{ $color: "green" | "blue" }>`
    min-height: 92px;

    padding: 14px;

    display: flex;
    align-items: center;

    gap: 12px;

    text-align: left;

    border-radius: 17px;

    border: 1px solid #28333a;

    background: #11181e;

    color: #ffffff;

    cursor: pointer;
`;

export const ActionIcon = styled.div<{ $color: "green" | "blue" }>`
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
`;

export const ActionContent = styled.div`
    min-width: 0;

    flex: 1;
`;

export const ActionTitle = styled.span<{ $color: "green" | "blue" }>`
    display: block;

    color: ${({ $color }) =>
        $color === "green"
            ? "#9fc4b0"
            : "#91afd6"};

    font-size: 13px;
    font-weight: 700;

    margin-bottom: 5px;
`;

export const ActionDescription = styled.span`
    display: block;

    color: #b9c1c5;

    font-size: 11px;
    line-height: 1.4;
`;

export const ActionArrow = styled.div`
    color: #e8edef;
`;

/* =========================
   BOTTOM NAVIGATION
========================= */

export const BottomNav = styled.nav`
    position: fixed;

    left: 50%;

    bottom: 12px;

    transform: translateX(-50%);

    width: calc(100% - 28px);

    max-width: 680px;

    height: 72px;

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    align-items: center;

    border: 1px solid #27323a;

    border-radius: 30px;

    background: rgba(13, 19, 24, 0.96);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.35);

    backdrop-filter: blur(18px);

    z-index: 50;
`;

export const NavItem = styled.button<{ $active?: boolean }>`
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

    svg {
        width: 22px;
        height: 22px;
    }
`;