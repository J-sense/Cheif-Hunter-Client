import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


import app from '../config';
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState('')
    const [loading , setLoading] = useState(true)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const UpdateUserData = (user, name, photo) => {
        return updateProfile(user, name, photo);
    }
    const LogOutUser = () => {
        return signOut(auth);
    }
    const googlepopup =()=>{
        return signInWithPopup(auth,provider);
    }
   
    useEffect(() => {
        const Unsubcribe = onAuthStateChanged(auth, (LoggedUser) => {
       
            setUser(LoggedUser);
            setLoading(false)
        })
        return () => {
            Unsubcribe();
        }
    }, []);
   
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        UpdateUserData,
        LogOutUser,googlepopup
        
        
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;