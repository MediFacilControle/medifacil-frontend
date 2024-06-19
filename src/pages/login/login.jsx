import { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { ButtonsContainer, LoginContainer, LoginForm } from './login.style.ts';
import { Button } from '../../components/button/button.jsx';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export const Login = () => {
  const [formData, setFormData] = useState('');
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
    console.log(formData);
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
            <TextField required
              htmlFor={'cpf'}
              label={'CPF'}
              placeholder={'Digite seu CPF'}
              name={'cpf'}
              type={'text'}
              sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
              onChange={handlechange}
            />
          </div>
          <div>
            <TextField required
              htmlFor={'senha'}
              label={'Senha'}
              placeholder={'Digite sua senha'}
              name={'senha'}
              type={'password'}
              sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
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
              onClick={() => navigate('/cadastro-saude')} />
          </ButtonsContainer>

        </LoginForm>
      </LoginContainer>
    </SecondaryLayout>
  )
}

