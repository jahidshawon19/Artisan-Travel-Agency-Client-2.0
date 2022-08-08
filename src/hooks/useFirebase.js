import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init'; 


initializeAuthentication();
const useFirebase = () =>{

    const [loginUser, setLoginUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
           return signInWithPopup(auth, googleProvider)
            
    }

    const googleSignOut = () =>{

        signOut(auth)
            .then(() => {
                setLoginUser({})
          })
            .catch((error) => {
            
          })
            .finally(()=>
                setIsLoading(false)
          );
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) { 
                setLoginUser(user)
            }else{
                setLoginUser({})
            } 

            setIsLoading(false)

          })
    }, [])


    return {
        loginUser,
        googleSignIn,
        googleSignOut,
        error,
        isLoading,
    }

}

export default useFirebase;