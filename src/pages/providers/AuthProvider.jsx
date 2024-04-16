import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config"
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, photo) => {
        setLoading(false)
        return updateProfile(auth.currentUser, 
            {
                displayName: name, 
                photoURL: photo
            })
    }


    // GOOGLE
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    // GITHUB
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = ()=>{
        return signInWithPopup(auth, githubProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User in the auth state changed');
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserInfo,
        googleSignIn,
        githubSignIn,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.array
}