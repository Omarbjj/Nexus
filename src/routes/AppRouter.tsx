import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Login = lazy(() => import("../pages/Login/Login.tsx"));
const Register = lazy(() => import("../pages/Register/Register.tsx"));
const Home = lazy(() => import("../pages/Home/Home.tsx"));
const Disciplinas = lazy (() => import("../pages/Disciplinas/Disciplinas.tsx"))
const Clases = lazy (() => import("../pages/Clases/Clases.tsx"))
const Dashboard = lazy (() => import("../pages/Dashboard/Dashboard.tsx"))
const Asistencia = lazy (() => import("../pages/Asistencia/Asistencia.tsx"))
const CrearDisciplina = lazy (() => import("../pages/CrearDisciplina/CrearDisciplina.tsx"))

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/disciplinas" element={<Disciplinas />}/>
                <Route path="/clases" element={<Clases />}/>
                <Route path="/dashboard/:claseId" element={<Dashboard />}/>
                <Route path="/asistencia/:claseId" element={<Asistencia />}/>
                <Route path="disciplina" element={<CrearDisciplina />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;