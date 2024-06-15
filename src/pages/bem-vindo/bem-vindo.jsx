import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BemVindo = () => {
    const navigate = useNavigate();

    const handleClick = (rota) => {
        return () => navigate(rota)
    }

    return (
        <div>
            <button
                onClick={handleClick('/login')}>
                Entrar
            </button>
            <button
                onClick={handleClick('/cadastro-paciente')}>
                Cadastrar Paciente
            </button>
            <button
                onClick={handleClick('/cadastro-saude')}>
                Cadastrar Profissional de Saúde
            </button>
            
        </div>
    )
}
