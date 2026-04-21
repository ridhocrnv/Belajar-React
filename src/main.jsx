import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><App></App></div>
    },
    {
        path: "/login",
        element: <div><LoginForm></LoginForm></div>
    },
    {
        path: "/register",
        element: <div><RegisterForm></RegisterForm></div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)