import React, { createContext, useState } from 'react';

//Contexto criado
export const AuthContext = createContext({ 
    user: null,
    setUser: () => null,
});

//Ambiente criado
const AuthProvider = ({ children }) => {
    //Estrutura para armazenar o usuário  
    const [user, setUser] = useState(null);   
    return (
        <AuthContext.Provider value={{user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;

