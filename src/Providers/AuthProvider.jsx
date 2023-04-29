import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';




export const AuthContext =createContext(null);
const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    

    const createUser =(email,password )=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // observe onState change
    useEffect(()=>{
       
        const unsubsCribe =onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return() =>{
            unsubsCribe();
        }
    },[]);
    const logOut=()=>{
     return signOut(auth)
    }
    const authInfo={
        loading,
        user,
        createUser,
        signIn,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;