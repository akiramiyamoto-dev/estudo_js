// import React, { createContext, useContext, useState, useEffect } from "react";

// // Interface que define o que será compartilhado no contexto
// interface AuthContextProps {
//     isAuthenticated: boolean;
//     login: () => void;
//     logout: () => void;
// }

// // Criação do contexto
// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// // Provider do contexto de autenticação
// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     // Verifica o estado de autenticação ao carregar a aplicação
//     useEffect(() => {
//         const savedAuthState = localStorage.getItem("isAuthenticated");
//         if (savedAuthState === "true") {
//             setIsAuthenticated(true);
//         }
//     }, []);

//     // Função para realizar login
//     const login = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem("isAuthenticated", "true");
//     };

//     // Função para realizar logout
//     const logout = () => {
//         setIsAuthenticated(false);
//         localStorage.removeItem("isAuthenticated");
//     };

//     // Retorna o contexto
//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Hook para acessar o contexto de autenticação
// export const useAuth = (): AuthContextProps => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
//     }
//     return context;
// };




// import React, { createContext, useState, useEffect } from "react";

// // Interface que define o que será compartilhado no contexto
// interface AuthContextProps {
//     isAuthenticated: boolean;
//     login: () => void;
//     logout: () => void;
// }

// // Criação do contexto
// export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// // Provider do contexto de autenticação
// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     // Verifica o estado de autenticação ao carregar a aplicação
//     useEffect(() => {
//         const savedAuthState = localStorage.getItem("isAuthenticated");
//         if (savedAuthState === "true") {
//             setIsAuthenticated(true);
//         }
//     }, []);

//     // Função para realizar login
//     const login = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem("isAuthenticated", "true");
//     };

//     // Função para realizar logout
//     const logout = () => {
//         setIsAuthenticated(false);
//         localStorage.removeItem("isAuthenticated");
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };



// import { createContext } from "react";

// // Interface que define os valores compartilhados no contexto
// export interface AuthContextProps {
//     isAuthenticated: boolean;
//     login: () => void;
//     logout: () => void;
// }

// // Criação do contexto com o tipo de valores (AuthContextProps)
// export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

import { createContext } from "react";

// Interface que define os valores compartilhados no contexto
export interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Criação do contexto
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
