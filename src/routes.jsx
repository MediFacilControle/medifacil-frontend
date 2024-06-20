import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { CadastroPaciente } from "./pages/cadastro-paciente/cadastro-paciente";
import { CadastroReceita } from "./pages/cadastro-receita/cadastro-receita";
import { CadastroSaude } from "./pages/cadastro-saude/cadastro-saude";
import { PageNotFound } from "./pages/not-found/not-found";
import { Home } from "./pages/home/home";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} /> 
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/cadastro-saude" element={<CadastroSaude />} />
                <Route exact path="/cadastro-paciente" element={<CadastroPaciente />} /> 
                <Route exact path="/cadastro-receita" element={<CadastroReceita />} />

                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}
