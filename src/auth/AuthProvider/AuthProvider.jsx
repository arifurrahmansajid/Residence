import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(auth)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const provider1 = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    // create a new user 
    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createUserGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, provider1)
    }

    const createUserGitHub = () => {
        setLoader(true)
        return signInWithPopup(auth, provider2)
    }

    // user sign in 
    const signUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // user logout 
    const userLogOut = () => {
        setLoader(true)
        return signOut(auth)
    }



    // observer on the Auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observer on the Auth', currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createNewUser,
        createUserGoogle,
        createUserGitHub,
        signUser,
        userLogOut,
        user,
        loader
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
