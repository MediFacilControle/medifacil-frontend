import React, { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { GenericService } from '../assets/api/services/GenericService';

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
                        // todo
                        // change to birthDate
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome do paciente:</label>
                    <input
                        name="nome"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cpf">CPF do paciente:</label>
                    <input
                        name="cpf"
                        type="text"
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="data-nasc">Data de Nascimento:</label>
                    <input
                        name="data-nasc"
                        type="date"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        name="senha"
                        type="password"
                        onChange={handleChange}
                    />
                </div>

                <button
                    disabled={isPeding}>Cadastrar</button>
            </form>
            {error && <p>{error}</p>}
        </SecondaryLayout>
    )
}
