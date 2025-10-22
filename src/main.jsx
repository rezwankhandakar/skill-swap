// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { RouterProvider } from "react-router/dom";
// import { router } from './Routes/Routes.jsx';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <RouterProvider router={router} />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AuthProvider দিয়ে পুরো অ্যাপ ঘিরে দেওয়া হলো */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
