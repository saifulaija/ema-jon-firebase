import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading] = useState(true)

    //  For Sign Up

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // For Sign In


    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    // For sign Out

    const logOut = ()=>{
        return signOut(auth)
    }


    // For Objerver 


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
            // stop observing unmounting
        return ()=>{
            return unsubscribe();
        }
    },[])



    const authInfo = {user, createUser, signIn, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;