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
  // User State
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  // Get Auth
  const auth = getAuth();

  // Google Sign In
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // OnAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
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
    isLoading,
  };
};

export default useFirebase;
