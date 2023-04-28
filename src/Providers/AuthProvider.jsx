import React from 'react';
import { createContext } from 'react';

const AuthContext =createContext(null);


const AuthProvider = ({children}) => {
    const user ={displayName:'sagor nodi'}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;