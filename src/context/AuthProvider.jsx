/* eslint-disable no-undef */
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
  
  export const AuthContext = createContext();
  const auth = getAuth(app);
  // eslint-disable-next-line react/prop-types
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [clint, setClint] = useState([])
    const [loading, setLoading] = useState(true);
     
    // Sign in
    const logIn = ( email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
 

    const changePassword = (user, newPassword) => {
      return updatePassword(user, newPassword);
    }
  
    //Sign out
    const SignOUt = () => {
      signOut(auth);
    };
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        return unsubscribe();
      };
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => {
          setClint(data)
        });
    }, []);
  
    const authInfo = {
      user,
      clint,   
      logIn, 
      SignOUt,
      loading,
      changePassword
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;