import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import ForgotPassword from '../Pages/ForgotPassword ';
import MyProfile from '../Pages/MyProfile ';
import Signup from '../Pages/Signup ';
import Login from '../Pages/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component:Home
        },
        {
            path: "/details/:id",
            Component: Details
        },
        {
             path: "/login",
             Component: Login
        },
        {
           path: "/signup",
           Component: Signup
        },
        {
            path: "/myProfile",
            Component: MyProfile
        },
        {
            path: "/forgatePassword",
            Component: ForgotPassword
        }
    ]
  },
]);