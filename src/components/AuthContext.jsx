import React, { createContext, useState } from 'react';

// Créer le contexte
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Utilisateur non connecté par défaut

    const login = () => {
        setIsAuthenticated(true); // L'utilisateur se connecte
    };

    const logout = () => {
        setIsAuthenticated(false); // L'utilisateur se déconnecte
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
