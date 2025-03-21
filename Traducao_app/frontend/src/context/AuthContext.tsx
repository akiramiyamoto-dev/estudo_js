import { createContext } from "react";

// Interface que define os valores compartilhados no contexto
export interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Criação do contexto
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
