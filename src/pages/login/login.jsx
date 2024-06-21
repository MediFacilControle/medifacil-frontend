// import { useState, useTransition } from 'react'
// import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
// import { ButtonsContainer, LoginContainer, LoginForm } from './login.style.ts';
// import { Button } from '../../components/button/button.jsx';
// import { useNavigate } from 'react-router-dom';
// import { Alert, TextField } from '@mui/material';
// import { GenericService } from '../../assets/api/service/GenericService.jsx';
// import { AuthProvider } from '../../assets/api/context/authContext.jsx';

// export const Login = () => {
//   const [formData, setFormData] = useState('');
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setFormData({...formData, [name]: value})
//     console.log(formData);
//   }

//   const { Login: login } = useContext(AuthProvider);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     startTransition(async () => {
//       const user = { cpf, password };
//       const response = await login(user);
//       console.log("signed: " + signed);
//       console.log("response: " + response);
//       try {
//         const response = await GenericService.create('auth/login-cpf', formData);
//         if (response.status >= 200 && response.status < 300) {
//           if (response.data && response.data.token) {
//             console.log('User logged successfully:', response.data);
//             localStorage.setItem('authToken', response.data.token);
//             // console.log('Token:', response.data.token);
//             navigate('/home');
//           } else {
//             console.error('Unexpected response format:', response);
//           }
//         }
//       } catch (error) {
//           setError('Error loging user. Please try again.');
//           console.error('Error loging user:', error);
//       } 
//     })
//   }

//   return (
//     <SecondaryLayout>
//       <LoginContainer>
//         <LoginForm onSubmit={handleSubmit}>
//           <div>
//             <TextField required
//               htmlFor={'cpf'}
//               label={'CPF'}
//               placeholder={'Digite seu CPF'}
//               name={'cpf'}
//               type={'text'}
//               sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
//               onChange={handlechange}
//             />
//           </div>
//           <div>
//             <TextField required
//               htmlFor={'senha'}
//               label={'Senha'}
//               placeholder={'Digite sua senha'}
//               name={'password'}
//               type={'password'}
//               sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
//               onChange={handlechange}
//             />
//           </div>
//           <ButtonsContainer>
//             <Button
//               type="submit"
//               text={'Entrar'}
//               disabled={isPending} 
//               />

//             <Button
//               text={'Cadastro Profissional de Saúde'}
//               onClick={() => navigate('/cadastro-saude')} />
//           </ButtonsContainer>

//           {error ? <Alert severity='error'>
//             {error}
//           </Alert> : null}

//         </LoginForm>
//       </LoginContainer>
//     </SecondaryLayout>
//   )
// }

import { useState, useTransition, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, TextField } from '@mui/material';
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { ButtonsContainer, LoginContainer, LoginForm } from './login.style.ts';
import { Button } from '../../components/button/button.jsx';
import { AuthContext } from '../../assets/api/context/authContext.jsx'; // Verifique o caminho do seu contexto

export const Login = () => {
  const [formData, setFormData] = useState({ cpf: '', password: '' });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // const { Login } = useContext(AuthContext); // Use corretamente o useContext com AuthContext
  // const { Login } = useContext(AuthContext);
  // const { login } = useContext(AuthContext);
  //   const [formData., setLoginData] = useState<UserLogin>({
  //     cpf: '',
  //     password: ''
  // });
  const { UserLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        // const user = { cpf: formData.cpf, password: formData.password };
        const response = await UserLogin({
          cpf: formData.cpf,
          password: formData.password
        });
        // const response = await Login(formData); // Chame a função Login do contexto com os dados do formulário
        console.log('signed:', response);
        if (response.statusCode === 200 && response.body && response.body.token) {
          console.log('User logged successfully:', response.body);
          localStorage.setItem('authToken', response.body.token);
          navigate('/home');
        } else {
          console.error('Unexpected response format:', response);
          setError('Error logging in user. Please try again.');
        }
      } catch (error) {
        console.error('Error logging in user:', error);
        setError('Error logging in user. Please try again.');
      }
    });
  };

  return (
    <SecondaryLayout>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <div>
            <TextField
              required
              htmlFor={'cpf'}
              label={'CPF'}
              placeholder={'Digite seu CPF'}
              name={'cpf'}
              type={'text'}
              sx={{ width: '100%', backgroundColor: 'var(--blueish-gray)', borderRadius: 'var(--border-radius)' }}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              required
              htmlFor={'senha'}
              label={'Senha'}
              placeholder={'Digite sua senha'}
              name={'password'}
              type={'password'}
              sx={{ width: '100%', backgroundColor: 'var(--blueish-gray)', borderRadius: 'var(--border-radius)' }}
              onChange={handleChange}
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
              onClick={() => navigate('/cadastro-saude')}
            />
          </ButtonsContainer>

          {error && <Alert severity='error'>{error}</Alert>}
        </LoginForm>
      </LoginContainer>
    </SecondaryLayout>
  );
};
