import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


import app from '../config';
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser] = useState('')
    const [loading , setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const UpdateUserData = (user, name, photo) => {
        return updateProfile(user, name, photo);
    }
    const LogOutUser = () => {
        return signOut(auth);
    }
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const GithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
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
        LogOutUser,GoogleSignIn,GithubSignIn
        
        
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;