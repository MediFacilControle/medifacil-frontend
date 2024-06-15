import React, { useEffect, useState, useTransition } from 'react'

export const Cadastro = () => {
    const [isPeding, startTransition] = useTransition();
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // const [year, month, day] = value.split('-');
        setFormData({ ...formData, [name]: value });

    }
    // useEffect(() => {
    //     if (date) {
    //       console.log('Data formatada:', date);
    //     }
    //   }, [date]);

    const handleSubmit = (e) => {
        const dataNascTimestamp = new Date(formData.date).getTime();
        const hojeTimestamp = new Date().now();
        console.log(dataNascTimestamp, hojeTimestamp)

        if (dataNascTimestamp > hojeTimestamp) {
            console.log('A data de nascimento não pode ser maior que a data de hoje.');
            return;
        }

        e.preventDefault();
        console.log('Enviando dados...');
        startTransition(async () => {
            setTimeout(() => {
                console.log(formData)
            }, 2000);
        })
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
        </div>
    )
}
