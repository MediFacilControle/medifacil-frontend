import { createContext, useState, useEffect } from 'react';
import { GenericService } from '../service/GenericService';
// import { authApi } from '../AxiosHttpClient';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('@auth:token'));
    const [idUser, setIdUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('@auth:token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setIdUser(decodedToken.userId); // Supondo que o ID do usuário esteja no campo `userId` do token decodificado
        }
    }, []);

    const UserLogin = async ({ cpf, password }) => {
        try {
            const response = await GenericService.create('auth/login-cpf', { cpf, password });
            if ((response.status === 200 || response.status === 204) && response.data) {
                setUser(response.data); 
                localStorage.setItem('@auth:token', response.data.token); 
                const decodedToken = jwtDecode(response.data.token);
                setIdUser(decodedToken.userId); 
                setTimeout( () => Logout(), 3600000); // Desloga o usuário após 1 hora
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
        localStorage.removeItem('@auth:token'); // Remove os dados do usuário do localStorage
        setIsLogged(false); // Define que o usuário não está autenticado
        setIdUser(null); 
    };


    return (
        <AuthContext.Provider value={{ user, UserLogin, Logout, isLogged, idUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
