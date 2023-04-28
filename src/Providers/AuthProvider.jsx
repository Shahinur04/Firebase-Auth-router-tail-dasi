import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth} from "firebase/auth";
import app from '../Firebase/firebase.config';




export const AuthContext =createContext(null);
const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;