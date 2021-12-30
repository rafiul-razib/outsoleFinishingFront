import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../login/firebase_init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        signOut(auth)
        .then(()=>{})
        .finally(setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
            return unsubscribe
        })
        
    },[])

    return {
        googleSignIn,
        createUser,
        emailSignIn,
        logOut,
        isLoading,
        setIsLoading,
        user
    }
};

export default useFirebase;