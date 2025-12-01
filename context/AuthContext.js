"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initAuth = () => {
            const currentUser = authService.getUser();
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        };
        initAuth();
    }, []);

    const login = async (email, password) => {

        try {
            const { user } = await authService.login(email, password);
            setUser(user);
            router.push('/');
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (name, email, password) => {
        try {
            const { user } = await authService.register(name, email, password);
            setUser(user);
            router.push('/');
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
