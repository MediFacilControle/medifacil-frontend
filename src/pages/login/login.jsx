import { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { ButtonsContainer, LoginContainer, LoginForm } from './login.style.ts';
import { Button } from '../../components/button/button.jsx';
import { useNavigate } from 'react-router-dom';
import { Alert, TextField } from '@mui/material';
import { GenericService } from '../../assets/api/service/GenericService.jsx';

export const Login = () => {
  const [formData, setFormData] = useState('');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const response = await GenericService.create('auth/login-cpf', formData);
        console.log('User logged successfully:', response);
        // Store the token in localStorage
        localStorage.setItem('authToken', response.data.token);

        // Redirect to the home page or another page
        navigate('/home');
        // todo:
        // store the token
    } catch (error) {
        setError('Error loging user. Please try again.');
        console.error('Error loging user:', error);
    }
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
              disabled={isPending} 
              />

            <Button
              text={'Cadastro Profissional de Saúde'}
              onClick={() => navigate('/cadastro-saude')} />
          </ButtonsContainer>

          {error ? <Alert severity='error'>
            {error}
          </Alert> : null}

        </LoginForm>
      </LoginContainer>
    </SecondaryLayout>
  )
}

