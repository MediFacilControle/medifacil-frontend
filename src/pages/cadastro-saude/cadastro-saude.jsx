import { useState, useTransition } from 'react'
import { Button } from '../../components/button/button'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { CadastroSaudeForm } from './cadastro-saude.style.ts';
import { Fab, TextField } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { GenericService } from '../../assets/api/service/GenericService.jsx';
import { ErrorAlert } from '../../components/error-alert/error-alert.jsx';
import { useNavigate } from 'react-router-dom';

export const CadastroSaude = () => {
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const handleSubmit = (e) => {
        // to do
        e.preventDefault();
        startTransition(async () => {
            try {
                const newUser = await GenericService.create('auth/register', formData);
                setFormData({
                    nome: '',
                    cpf: '',
                    birthDate: '10/09/2000',
                    // crm: '',
                    email: '',
                    senha: ''
                });
                console.log('User created successfully:', newUser);
                navigate('/');
            } catch (error) {
                setError('Error creating user. Please try again.');
                console.error('Error creating user:', error);
            }
        })
    }
    return (
        <SecondaryLayout>
            <Fab sx={'transform: translate(57px, -239px);'}
                onClick={() => window.history.back()}>
                <ArrowBack />
            </Fab>
            <CadastroSaudeForm onSubmit={handleSubmit}>
                <TextField required
                    label='Nome do profissional de saúde'
                    name='nome'
                    placeholder='Digite seu nome completo'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange} />

                <TextField required
                    label='CPF'
                    placeholder='Digite seu CPF'
                    name='cpf'
                    type='text'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />
                <TextField required
                    label='CRM'
                    placeholder='Digite seu CRM'
                    name='crm'
                    type='text'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />
                <TextField required
                    label='Email'
                    placeholder='exemplo@exemplo.com'
                    name='email'
                    type='email'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />
                <TextField
                    label={'Senha'}
                    placeholder={'Digite seu senha'}
                    name={'senha'}
                    type={'password'}
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />

                <Button
                    disabled={isPending}
                    text={'Cadastrar'} 
                    />
            </CadastroSaudeForm>

            <ErrorAlert error={error} />

        </SecondaryLayout>
    )
}
