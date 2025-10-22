// import React, { createContext, useEffect, useState } from "react";
// import app from "../firebase/Firebase.config";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   updateProfile,
// } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Signup
//   const createUser = (email, password, name, photoURL) => {
//     return createUserWithEmailAndPassword(auth, email, password).then(
//       (result) => {
//         // update display name & photo
//         return updateProfile(result.user, {
//           displayName: name,
//           photoURL: photoURL,
//         });
//       }
//     );
//   };

//   // Login
//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Logout
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // Check if user is logged in
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unSubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;



// AuthProvider.jsx

// import React, { createContext, useEffect, useState } from "react";
// import app from "../firebase/Firebase.config";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   sendPasswordResetEmail,
//   updateProfile,
// } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Create User
//   const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

//   // Email/Password Login
//   const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   // Google Login
//   const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

//   // Logout
//   const logOut = () => signOut(auth);

//   // Reset Password
//   const resetPassword = (email) => sendPasswordResetEmail(auth, email);

//   // Update Profile
//   const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

//   // Track Auth State
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     signInWithGoogle,
//     resetPassword,
//     updateUserProfile,
//   };

//   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

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

  // Create User
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Email/Password Login
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Google Login
  const signInWithGoogle = () =>
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user); // ✅ Navbar update
      return result.user;
    });

  // Logout
  const logOut = () => signOut(auth);

  // Reset Password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // Update Profile
  const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

  // Track Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    resetPassword,
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
