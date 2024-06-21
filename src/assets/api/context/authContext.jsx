// // import React, { createContext, useState, useEffect } from "react";
// // import { GenericService } from "../service/GenericService";
// // import { authApi } from '../AxiosHttpClient';

// // const defaultAuthContext = {
// //     user: null,
// //     Login: async () => { throw new Error("Login function not implemented"); },
// //     Logout: () => { throw new Error("Logout function not implemented"); },
// //     isLogged: false
// // };

// // export const AuthContext = createContext(defaultAuthContext);

// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //     const [timeout, setTimeoutState] = useState(null);
// //     const isLogged = user !== null && timeout !== null;

// //     useEffect(() => {
// //         const storedUser = localStorage.getItem("@auth:user");
// //         const storedTimeout = localStorage.getItem("@auth:timeout");

// //         if (storedUser && storedTimeout) {
// //             setUser(JSON.parse(storedUser));
// //             setTimeoutState(new Date(storedTimeout));
// //         }
// //     }, [isLogged]);

// //     const Login = async ({ cpf, password }) => {
// //         const client = new authApi();

// //         // const response = await GenericService.create('auth/login-cpf', formData);

// //         const response = await GenericService.create('auth/login-cpf', { cpf, password }, client);

// //         if (response.statusCode === 200 && response.body) {
// //             setUser(response.body);
// //             const timeoutDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
// //             setTimeoutState(timeoutDate);

// //             localStorage.setItem("@auth:user", JSON.stringify(response.body));
// //             localStorage.setItem("@auth:timeout", JSON.stringify(timeoutDate));

// //             return response;
// //         } else {
// //             return response;
// //         }
// //     };

// //     const Logout = () => {
// //         setUser(null);
// //         setTimeoutState(null);
// //         localStorage.removeItem("@auth:user");
// //         localStorage.removeItem("@auth:timeout");
// //         alert("Deslogado com sucesso!");
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, Login, Logout, isLogged }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };
// // authContext.jsx
// // import React, { createContext, useState } from 'react';
// // import { GenericService } from '../service/GenericService';
// // import { authApi } from '../AxiosHttpClient';

// // const defaultAuthContext = {
// //     user: null,
// //     Login: async () => { throw new Error("Login function not implemented"); },
// //     Logout: () => { throw new Error("Logout function not implemented"); },
// //     isLogged: false
// // };

// // export const AuthContext = createContext(defaultAuthContext);

// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //     const [timeout, setTimeoutState] = useState(null);
// //     const isLogged = user !== null && timeout !== null;

// //     // Função de login
// //     const Login = async ({ cpf, password }) => {
// //         const client = new authApi();

// //         try {
// //             const response = await GenericService.create('auth/login-cpf', { cpf, password }, client);

// //             if (response.statusCode === 200 && response.body) {
// //                 setUser(response.body);
// //                 const timeoutDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
// //                 setTimeoutState(timeoutDate);

// //                 localStorage.setItem("@auth:user", JSON.stringify(response.body));
// //                 localStorage.setItem("@auth:timeout", JSON.stringify(timeoutDate));

// //                 return response;
// //             } else {
// //                 return response;
// //             }
// //         } catch (error) {
// //             throw new Error("Error logging in user. Please try again.");
// //         }
// //     };

// //     // Função de logout
// //     const Logout = () => {
// //         setUser(null);
// //         setTimeoutState(null);
// //         localStorage.removeItem("@auth:user");
// //         localStorage.removeItem("@auth:timeout");
// //         alert("Deslogado com sucesso!");
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, Login, Logout, isLogged }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };
// // import axios from "axios";
// // import React, { createContext, useEffect, useState } from "react";
// import { GenericService } from '../service/GenericService.jsx';
// import { authApi } from '../AxiosHttpClient.js';

// // // const API_URL = 'http://api.example.com'; // Substitua pela sua URL de API

// // export const AuthContext = createContext(undefined);

// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //     const [isLogged, setIsLogged] = useState(false);

// //     useEffect(() => {
// //         const storedUser = localStorage.getItem("@auth:user");
// //         const storedTimeout = localStorage.getItem("@auth:timeout");

// //         if (storedUser && storedTimeout) {
// //             setUser(JSON.parse(storedUser));
// //             setIsLogged(true);
// //         } else {
// //             setIsLogged(false);
// //         }
// //     }, []);

// //     const Login = async ({ cpf, password }) => {
// //         try {
// //             const client = new authApi();
// //             const response = await GenericService.create('auth/login-cpf', { cpf, password }, client);

// //             if (response.statusCode === 200 && response.body) {
// //                 setUser(response.body);
// //                 const timeoutDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
// //                 localStorage.setItem("@auth:user", JSON.stringify(response.body));
// //                 localStorage.setItem("@auth:timeout", timeoutDate.toISOString());
// //                 setIsLogged(true);
// //                 return response;
// //             } else {
// //                 throw new Error("Failed to login user");
// //             }
// //         } catch (error) {
// //             throw new Error("Error logging in user. Please try again.");
// //         }
// //     };

// //     const Logout = () => {
// //         setUser(null);
// //         setIsLogged(false);
// //         localStorage.removeItem("@auth:user");
// //         localStorage.removeItem("@auth:timeout");
// //         alert("Logged out successfully!");
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, Login, Logout, isLogged }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// import React, { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [isLogged, setIsLogged] = useState(false);

//     useEffect(() => {
//         const storedUser = localStorage.getItem("@auth:user");
//         const storedTimeout = localStorage.getItem("@auth:timeout");

//         if (storedUser && storedTimeout) {
//             setUser(JSON.parse(storedUser));
//             setIsLogged(true);
//         }
//     }, []);

//     const Login = async ({ cpf, password }) => {
//         try {
//             // const client = new authApi();
//             const response = await GenericService.create('auth/login-cpf', { cpf, password });
//             if (response.statusCode === 200 && response.body) {
//                 setUser(response.body);
//                 const timeoutDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
//                 localStorage.setItem("@auth:user", JSON.stringify(response.body));
//                 localStorage.setItem("@auth:timeout", timeoutDate.toISOString());
//                 setIsLogged(true);
//                 return response;
//             } else {
//                 throw new Error("Failed to login user");
//             }
//         } catch (error) {
//             throw new Error("Error logging in user. Please try again.");
//         }
//     };

//     const Logout = async () => {
//         setUser(null);
//         setIsLogged(false);
//         localStorage.removeItem("@auth:user");
//         localStorage.removeItem("@auth:timeout");
//         alert("Logged out successfully!");
//     };

//     return (
//         <AuthContext.Provider value={{ Login, Logout, isLogged }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import { createContext, useState } from 'react';
import { GenericService } from '../service/GenericService';
import { authApi } from '../AxiosHttpClient';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const UserLogin = async ({ cpf, password }) => {
        try {
            const client = new authApi(); // Configure seu cliente Axios aqui
            const response = await GenericService.create('auth/login-cpf', { cpf, password }, client);

            if (response.statusCode === 200 && response.body) {
                setUser(response.body); // Armazena os dados do usuário no estado local
                localStorage.setItem('@auth:user', JSON.stringify(response.body)); // Armazena os dados do usuário no localStorage
                setIsLogged(true); // Define que o usuário está autenticado
                return response; // Retorna a resposta da autenticação (opcional)
            } else {
                throw new Error('Failed to login user');
            }
        } catch (error) {
            throw new Error('Error logging in user. Please try again.');
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
