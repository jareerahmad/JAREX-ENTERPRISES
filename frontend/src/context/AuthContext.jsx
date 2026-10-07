import { createContext, useContext, useEffect, useState } from "react";

import {
    loginUser as loginApi,
    registerUser as registerApi,
} from "../services/api";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        localStorage.getItem("jarex_token")
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem("jarex_user");

        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                localStorage.removeItem("jarex_user");
            }
        }

        setLoading(false);
    }, []);

    const login = async ({ email, password }) => {
        try {
            const data = await loginApi({
                email,
                password,
            });

            localStorage.setItem("jarex_token", data.token);
            localStorage.setItem(
                "jarex_user",
                JSON.stringify(data.user)
            );

            setToken(data.token);
            setUser(data.user);

            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    };

    const register = async ({ name, email, password }) => {
        try {
            const data = await registerApi({
                name,
                email,
                password,
            });

            localStorage.setItem("jarex_token", data.token);
            localStorage.setItem(
                "jarex_user",
                JSON.stringify(data.user)
            );

            setToken(data.token);
            setUser(data.user);

            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    };

    const logout = () => {
        localStorage.removeItem("jarex_token");
        localStorage.removeItem("jarex_user");

        setToken(null);
        setUser(null);
    };

    const updateProfile = (updatedData) => {
        if (!user) return;

        const updatedUser = {
            ...user,
            ...updatedData,
        };

        localStorage.setItem(
            "jarex_user",
            JSON.stringify(updatedUser)
        );

        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                register,
                logout,
                updateProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;