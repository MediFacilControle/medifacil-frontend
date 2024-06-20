import { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { GenericService } from '../../assets/api/service/GenericService';
import { TextField } from '@mui/material';
import { Button } from '../../components/button/button';
import { CadastroPacienteContainer } from './cadastro-paciente.style';
import { ErrorAlert } from '../../components/error-alert/error-alert';
import { BackArrow } from '../../components/back-arrow/back-arrow';

export const CadastroPaciente = () => {
    const [isPeding, startTransition] = useTransition();
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataNascTimestamp = formData['data-nasc'] ? new Date(formData['data-nasc']) : null;
        const hojeTimestamp = new Date();

        if (dataNascTimestamp > hojeTimestamp) {
            setError('Data de nascimento inválida');
            return;
        } else {
            setError(null);
            console.log('Enviando dados...');
            startTransition(async () => {
                try {
                    const newUser = await GenericService.create('auth/register', formData);
                    console.log('User created successfully:', newUser);
                    setFormData({
                        nome: '',
                        cpf: '',
                        birthDate: '',
                        email: '',
                        senha: ''
                    });
                } catch (error) {
                    setError('Error creating user. Please try again.');
                    console.error('Error creating user:', error);
                }
            })
        }
    }

    return (
        <SecondaryLayout>
            <BackArrow />
            <CadastroPacienteContainer onSubmit={handleSubmit}>
                <TextField required
                    label="Nome do Paciente"
                    type='text'
                    name='nome'
                    placeholder='Escreva o nome Completo'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange} />

                <TextField required
                    label="CPF"
                    type='text'
                    name='cpf'
                    placeholder='Escreva o CPF completo'
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange} />

                <TextField
                    label="Data de Nascimento"
                    type='date'
                    name='birthDate'
                    InputLabelProps={{ shrink: true }}
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange} />

                <TextField
                    label="Senha"
                    type='text'
                    name='senha'
                    placeholder='Escreva sua senha '
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    onChange={handleChange} />

                <Button
                    text='Cadastrar'
                    type='submit'
                    disabled={isPeding} />

            </CadastroPacienteContainer>

            <ErrorAlert error={error} />

        </SecondaryLayout>
    )
}
