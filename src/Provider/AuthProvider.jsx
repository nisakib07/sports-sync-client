import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const authProviderGoogle = new GoogleAuthProvider();

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, authProviderGoogle);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  const userProfileUpdate = (userName, photoURL) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userLogout,
    userProfileUpdate,
    googleSignIn,
  };
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
