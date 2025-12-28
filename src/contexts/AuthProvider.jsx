import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        registerUser,
        signInUser,
        LogOut,
        user,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;