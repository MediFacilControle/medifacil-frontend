import React, { useState, useTransition } from 'react'


export const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [isPending, startTransition] = useTransition();

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === 'cpf') {
      setCpf(value);
    } else {
      setSenha(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {

    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input required
            name='cpf'
            type="text"
            placeholder="Insira seu CPF"
            onChange={handlechange} />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input required
            name='senha'
            type="password"
            placeholder="Senha"
            onChange={handlechange} />
        </div>

        <button type="submit" disabled={isPending}>Entrar</button>
        
      </form>
    </div>
  )
}

