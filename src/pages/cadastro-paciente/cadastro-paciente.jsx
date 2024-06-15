import React, { useState, useTransition } from 'react'

export const Cadastro = () => {
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
                setTimeout(() => {
                    console.log(formData)
                }, 2000);
            })
        }

    }

    return (
        <div>
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
        </div>
    )
}
