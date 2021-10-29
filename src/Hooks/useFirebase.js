import React, { useState, useEffect } from "react";
import firebaseInit from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Calling firebase initialization function
firebaseInit();

const useFirebase = () => {
  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  // Get Auth
  const auth = getAuth();

  // Google Sign In
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    // signInWithPopup(auth, googleProvider).then((result) => {
    //   const user = result?.user;
    //   setUser(user);
    // });
  };

  // User State
  const [user, setUser] = useState({});

  // OnAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
