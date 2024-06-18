import React, { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { Input } from '../../components/Input/input';
import { LoginContainer, LogoContainer } from './login.style.ts';
import LogoCompleta from '../../assets/logo-completa.png';
import { Button } from '../../components/button/button.jsx';

export const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [isPending, startTransition] = useTransition();

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
        <LogoContainer>
            <img src={LogoCompleta} alt="" />
            <p>Gerenciamento de receitas médicas</p>
        </LogoContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              htmlFor={'cpf'}
              label={'CPF'}
              placeholder={'Digite seu CPF'}
              name={'cpf'}
              type={'text'}
              onChange={handlechange}
            />
          </div>
          <div>
            <Input
              htmlFor={'senha'}
              label={'Senha'}
              placeholder={'Digite sua senha'}
              name={'senha'}
              type={'password'}
              onChange={handlechange}
            />
          </div>

          <Button
            type="submit"
            text={'Entrar'}
            color="var(--red)"
            disabled={isPending} />

        </form>
      </LoginContainer>
    </SecondaryLayout>
  )
}

