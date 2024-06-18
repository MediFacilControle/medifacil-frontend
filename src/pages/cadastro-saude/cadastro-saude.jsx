import React, { useState } from 'react'
import { Input } from '../../components/Input/input'
import { Button } from '../../components/button/button'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout';
import { CadastroSaudeForm } from './cadastro-saude.style.ts';

export const CadastroSaude = () => {
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <SecondaryLayout>
            <CadastroSaudeForm onSubmit={handleSubmit}>
                <Input required
                    htmlFor={'nome'}
                    label={'Nome do profissional'}
                    placeholder={'Digite seu nome'}
                    name={'nome'}
                    type={'text'}
                    onChange={handleChange}
                />
                <Input required
                    htmlFor={'cpf'}
                    label={'CPF'}
                    placeholder={'Digite seu CPF'}
                    name={'cpf'}
                    type={'text'}
                    onChange={handleChange}
                />
                <Input required
                    htmlFor={'crm'}
                    label={'CRM'}
                    placeholder={'Digite seu CRM'}
                    name={'crm'}
                    type={'text'}
                    onChange={handleChange}
                />
                <Input required
                    htmlFor={'email'}
                    label={'Email'}
                    placeholder={'exemplo@exemplo.com'}
                    name={'email'}
                    type={'email'}
                    onChange={handleChange}
                />
                <Input
                    htmlFor={'senha'}
                    label={'Senha'}
                    placeholder={'Digite seu senha'}
                    name={'senha'}
                    type={'password'}
                    onClick={handleChange}
                />

                <Button text={'Cadastrar'} />
            </CadastroSaudeForm>
        </SecondaryLayout>
    )
}
