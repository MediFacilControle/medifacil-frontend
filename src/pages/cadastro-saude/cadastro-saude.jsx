import React, { useState, useTransition } from 'react'
import { Input } from '../../components/Input/input'
import { Button } from '../../components/button/button'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { CadastroSaudeForm } from './cadastro-saude.style.ts';
import { ButtonGroup, Fab, TextField } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { GenericService } from '../assets/api/services/GenericService';

export const CadastroSaude = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        crm: '',
        email: '',
        senha: ''
    });    
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();

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
                console.log('User created successfully:', newUser);
                setFormData({
                    nome: '',
                    cpf: '',
                    crm: '',
                    email: '',
                    senha: ''
                });
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
                    htmlFor='crm'
                    label='CRM'
                    placeholder='Digite seu CRM'
                    name='crm'
                    type='text'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />
                <TextField required
                    htmlFor='email'
                    label='Email'
                    placeholder='exemplo@exemplo.com'
                    name='email'
                    type='email'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange}
                />
                <TextField
                    htmlFor={'senha'}
                    label={'Senha'}
                    placeholder={'Digite seu senha'}
                    name={'senha'}
                    type={'password'}
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onClick={handleChange}
                />

                <Button
                    disable={isPending}
                    text={'Cadastrar'} />
            </CadastroSaudeForm>
        </SecondaryLayout>
    )
}
