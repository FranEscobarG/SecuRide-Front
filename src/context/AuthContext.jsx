import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

// hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [isUser, setIsUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // su sigup es un setUser con la response.data
    const sigin = (data) => {
        try {
            setIsUser(data);
            setIsAuthenticated(true);
            console.log("actualice los estados");
        } catch (error) {
            console.log(error);
        } 
    };   

    const logout = () => {
        try {
            setIsUser(null);
            setIsAuthenticated(false);
            console.log("Estados actualizados a FALSE y NULL");
        } catch (error) {
            console.log(error);
        } 
    };  
    
    useEffect(() => {
        const cookies = Cookies.get();

        if (cookies.token) {
            console.log("Token encontrado:", cookies.token);
        }
    }, []);

    return(
        <AuthContext.Provider value={{
            sigin,
            logout,
            isUser,
            isAuthenticated,
        }} >
            {children}
        </AuthContext.Provider>
    )
}