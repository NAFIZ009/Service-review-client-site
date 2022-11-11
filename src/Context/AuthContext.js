/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut,updateProfile,onAuthStateChanged} from 'firebase/auth';

const ContextAuth =createContext();

const AuthContext = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading] = useState(true);
    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const register=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    };

    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const updateProfileInfo=name=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name
        })
    }

    const google=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    };

    const logOut=()=>{
        setLoading(true)
        return signOut(auth).then()
    }

    useEffect(()=>{
        const clear=onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
                setLoading(false);
            }
            
        })
        return ()=>clear()
    },[]);

    const value={register,login,google,updateProfileInfo,loading,user,logOut};

    return (
        <ContextAuth.Provider value={value}>
        {children}
        </ContextAuth.Provider>
    );
};
export  {AuthContext,ContextAuth};