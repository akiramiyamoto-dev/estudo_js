// import React, { useState, useEffect } from "react";
// import { AuthContext, AuthContextProps } from "./AuthContext";

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     // Recupera o estado de autenticação do localStorage quando a aplicação inicia
//     useEffect(() => {
//         const savedAuthState = localStorage.getItem("isAuthenticated");
//         if (savedAuthState === "true") {
//             setIsAuthenticated(true);
//         }
//     }, []);

//     const login = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem("isAuthenticated", "true");
//     };

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
import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Recupera o estado de autenticação ao iniciar
    useEffect(() => {
        const savedAuthState = localStorage.getItem("isAuthenticated");
        if (savedAuthState === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    // Funções para login e logout
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
