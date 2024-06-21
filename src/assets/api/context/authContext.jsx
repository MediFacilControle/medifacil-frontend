import { createContext, useState } from 'react';
import { GenericService } from '../service/GenericService';
// import { authApi } from '../AxiosHttpClient';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const UserLogin = async ({ cpf, password }) => {
        try {
            const response = await GenericService.create('auth/login-cpf', { cpf, password });
            console.log('Response:', response);
            if ((response.status === 200 || response.status === 204) && response.data) {
                setUser(response.data); // Armazena os dados do usuário no estado local
                localStorage.setItem('@auth:token', response.data.token); 
                setIsLogged(true); 
                return response;
            } else {
                throw new Error('Falha em logar o user');
            }
        } catch (error) {
            console.error('Erro ao logar:', error);
        }
    };

    const Logout = () => {
        setUser(null); // Limpa os dados do usuário do estado local
        localStorage.removeItem('@auth:user'); // Remove os dados do usuário do localStorage
        setIsLogged(false); // Define que o usuário não está autenticado
        alert('Logged out successfully!'); // Exibe um alerta informando que o logout foi feito com sucesso
    };


    return (
        <AuthContext.Provider value={{ user, UserLogin, Logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
