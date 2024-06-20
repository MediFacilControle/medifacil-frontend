import React, { useState, useTransition } from 'react'
import { Input } from '../../components/Input/input'
import { Button } from '../../components/button/button'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { CadastroSaudeForm } from './cadastro-saude.style.ts';
import { ButtonGroup, Fab, TextField } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { GenericService } from '../../assets/api/service/GenericService.jsx';

export const CadastroPre = () => {
    const [formData, setFormData] = useState('');
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
                const newUser = await GenericService.create('auth/pre-register', formData);
                console.log('User created successfully:', newUser);
                setFormData({
                    cpf: '',
                    birthDate: '',
                });
            } catch (error) {
                setError('Error creating user. Please try again.');
                console.error('Error creating user:', error);
            }
        })
    }
    return (
        console.log('Enviando dados...')
    )
}
