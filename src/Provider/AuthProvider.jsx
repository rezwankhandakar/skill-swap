

import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = () =>
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      return result.user;
    });

  const logOut = () => signOut(auth);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, profile);
    setUser({ ...auth.currentUser });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
