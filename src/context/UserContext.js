import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout

    const logOut = () => {
        return signOut(auth)
    }
    //update user

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
                ;
        });

        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = { loading, user, createUser, signIn, logOut, updateUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default UserContext;