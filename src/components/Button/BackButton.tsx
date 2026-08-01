import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

function BackButton() {

    const navigate = useNavigate();

    return (

        <IconButton
            onClick={() => navigate(-1)}
            color="primary"
            aria-label="volver"
        >
            <ArrowBackIcon />
        </IconButton>

    );

}

export default BackButton;