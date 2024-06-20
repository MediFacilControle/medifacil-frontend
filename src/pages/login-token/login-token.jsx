import React, { useState, useTransition } from "react";
import { SecondaryLayout } from "../../components/layout/secondary-layout/secondary-layout";
import { Input } from "../../components/Input/input";
import {
  ButtonsContainer,
  LoginContainer,
  LoginForm,
  LogoContainer,
} from "./login.style.ts";
import { Button } from "../../components/button/button.jsx";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { GenericService } from "../assets/api/services/GenericService";

export const Login = () => {
  const [formData, setFormData] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const response = await GenericService.create(
          "auth/login-token",
          formData
        );
        console.log("User logged successfully:", response);
        // todo:
        // store the token
      } catch (error) {
        setError("Error loging user. Please try again.");
        console.error("Error loging user:", error);
      }
    });
  };

//   this is the login using a token, but i dont know how will gonna work so i let like that and just chenaged the requisition
  return (
    <SecondaryLayout>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <div>
            <TextField
              required
              htmlFor={"cpf"}
              label={"CPF"}
              placeholder={"Digite seu CPF"}
              name={"cpf"}
              type={"text"}
              sx={
                "width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)"
              }
              onChange={handlechange}
            />
          </div>
          <div>
            <TextField
              required
              htmlFor={"senha"}
              label={"Senha"}
              placeholder={"Digite sua senha"}
              name={"senha"}
              type={"password"}
              sx={
                "width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)"
              }
              onChange={handlechange}
            />
          </div>
          <ButtonsContainer>
            <Button type="submit" text={"Entrar"} disabled={isPending} />

            <Button
              text={"Cadastro Profissional de Saúde"}
              onClick={() => navigate("/cadastro-saude")}
            />
          </ButtonsContainer>
        </LoginForm>
      </LoginContainer>
    </SecondaryLayout>
  );
};