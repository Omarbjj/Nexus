import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import BackButton from "../../components/Button/BackButton";

function Disciplinas () {
    const navigate = useNavigate();

    return (
        <Card>
            <BackButton />
            <CardActionArea onClick={() => navigate("/dashboard/2")}>
                <CardContent>
                    <Typography variant="h5">
                        Jiu Jitsu
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActionArea onClick={() => navigate("/jiu-jitsu")}>
                <CardContent>
                    <Typography variant="h5">
                        Boxeo
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Disciplinas;