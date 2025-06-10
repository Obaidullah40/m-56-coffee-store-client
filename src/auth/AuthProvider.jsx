import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const signInUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const googleSignIn = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);
    // }

    // const signOutUser = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // }
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('inside useEffect on auth state change', currentUser);
    //         setUser(currentUser);
    //         setLoading(false);
    //     })
    //     return (() => {
    //         unSubscribe();
    //     })
    // }, [])

    const userInfo = {
        user,
        setUser,
        // loading,
        // setLoading,
        createUser,
        forgetPassword,
        signInUser,
        // googleSignIn,
        // signOutUser,
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;