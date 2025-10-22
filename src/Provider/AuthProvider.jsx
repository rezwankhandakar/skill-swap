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
//   const createUser = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   // Email/Password Login
//   const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   // Google Login
//   const signInWithGoogle = () =>
//     signInWithPopup(auth, googleProvider).then((result) => {
//       setUser(result.user); // ✅ Navbar update
//       return result.user;
//     });

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

//   // ✅ Create User
//   const createUser = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   // ✅ Email/Password Login
//   const signIn = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   // ✅ Google Login
//   const signInWithGoogle = () =>
//     signInWithPopup(auth, googleProvider).then((result) => {
//       setUser(result.user); // navbar & profile update হবে
//       return result.user;
//     });

//   // ✅ Logout
//   const logOut = () => signOut(auth);

//   // ✅ Reset Password
//   const resetPassword = (email) => sendPasswordResetEmail(auth, email);

//   // ✅ Update Profile
//   const updateUserProfile = async (profile) => {
//   await updateProfile(auth.currentUser, profile);
//   // ✅ Firebase থেকে fresh user data এনে context আপডেট করো
//   setUser({ ...auth.currentUser });
// };


//   // ✅ Track Auth State
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // ✅ Export setUser সহ সব value
//   const authInfo = {
//     user,
//     setUser, // ⬅️ এটা যোগ করা হয়েছে
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     signInWithGoogle,
//     resetPassword,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;




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

//   // Create user
//   const createUser = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   // Sign in
//   const signIn = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   // Google sign in
//   const signInWithGoogle = () =>
//     signInWithPopup(auth, googleProvider).then((result) => {
//       setUser(result.user);
//       return result.user;
//     });

//   // Logout
//   const logOut = () => signOut(auth);

//   // Reset password
//   const resetPassword = (email) => sendPasswordResetEmail(auth, email);

//   // ✅ Update user profile
//   const updateUserProfile = async (profile) => {
//     if (!auth.currentUser) return;
//     await updateProfile(auth.currentUser, profile);

//     // 🔁 Force reload updated user info
//     setUser({ ...auth.currentUser });
//   };

//   // Auth state observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     setUser,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     signInWithGoogle,
//     resetPassword,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
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

  // ✅ Create User
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // ✅ Email/Password Login
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // ✅ Google Login
  const signInWithGoogle = () =>
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      return result.user;
    });

  // ✅ Logout
  const logOut = () => signOut(auth);

  // ✅ Reset Password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // ✅ Update Profile + context refresh
  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, profile);
    // fresh user data set করো
    setUser({ ...auth.currentUser });
  };

  // ✅ Track auth state (Navbar, MyProfile সব জায়গায় same user)
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
