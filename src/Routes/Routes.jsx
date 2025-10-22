import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup ';

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
             element: <Login />,
        },
        {
           path: "/signup",
           element: <Signup />,
        },
    ]
  },
]);