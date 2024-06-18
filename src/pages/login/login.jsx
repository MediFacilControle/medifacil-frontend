import React, { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { Input } from '../../components/Input/input';
import { ButtonsContainer, LoginContainer, LoginForm, LogoContainer } from './login.style.ts';
import { Button } from '../../components/button/button.jsx';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === 'cpf') {
      setCpf(value);
    } else {
      setSenha(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {

    })
  }

  return (
    <SecondaryLayout>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <div>
            <Input required
              htmlFor={'cpf'}
              label={'CPF'}
              placeholder={'Digite seu CPF'}
              name={'cpf'}
              type={'text'}
              onChange={handlechange}
            />
          </div>
          <div>
            <Input required
              htmlFor={'senha'}
              label={'Senha'}
              placeholder={'Digite sua senha'}
              name={'senha'}
              type={'password'}
              onChange={handlechange}
            />
          </div>
          <ButtonsContainer>
            <Button
              type="submit"
              text={'Entrar'}
              disabled={isPending} />

            <Button
              text={'Cadastro Profissional de Saúde'}
              onClick={navigate('/cadastro-saude')} />
          </ButtonsContainer>

        </LoginForm>
      </LoginContainer>
    </SecondaryLayout>
  )
}

