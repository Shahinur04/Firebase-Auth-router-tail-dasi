import React, { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';




export const AuthContext =createContext(null);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    

    const createUser =(email,password )=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,provider);

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
        signInWithGoogle,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;