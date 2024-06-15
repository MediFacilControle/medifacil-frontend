import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { BemVindo } from "./pages/bem-vindo/bem-vindo";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BemVindo />} /> 
                <Route exact path="/login" element={<Login />} /> 
            </Routes>
        </BrowserRouter>
    )
}
