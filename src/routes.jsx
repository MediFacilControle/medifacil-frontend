import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { BemVindo } from "./pages/bem-vindo/bem-vindo";
import { Cadastro } from "./pages/cadastro-paciente/cadastro-paciente";
import { PageNotFound } from "./pages/not-found/not-found";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BemVindo />} /> 
                <Route exact path="/login" element={<Login />} /> 
                <Route exact path="/cadastro-paciente" element={<Cadastro />} /> 

                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}
