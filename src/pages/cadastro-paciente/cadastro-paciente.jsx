import { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { GenericService } from '../../assets/api/service/GenericService.jsx';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '../../components/button/button';
import { CadastroPacienteContainer } from './cadastro-paciente.style';
import { ErrorAlert } from '../../components/error-alert/error-alert';
import { BackArrow } from '../../components/back-arrow/back-arrow';

export const CadastroPaciente = () => {
    const [isPeding, startTransition] = useTransition();
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

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
                    const newUser = await GenericService.create('auth/pre-register', formData);
                    if (newUser.status >= 200 && newUser.status < 300) {
                        if (newUser && newUser.data) {
                            console.log('User created successfully:', newUser.data);
                            navigate('/home');
                        } else {
                            console.error('Failed to create user. Unexpected response:', newUser);
                        }
                    }

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

                <Button
                    text='Cadastrar'
                    type='submit'
                    disabled={isPeding} />

            </CadastroPacienteContainer>

            <ErrorAlert error={error} />
        </SecondaryLayout>
    )
}
