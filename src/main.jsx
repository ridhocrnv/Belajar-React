import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Fonts
import "@fontsource/geist-sans";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-mono";

// Pages
import Home from './components/pages/HomePage'
import About from './components/pages/AboutPage';
import Projects from './components/pages/ProjectPage';
import Certificates from './components/pages/CertificatePage';
import ErrorPage from './components/pages/NotFoundPage'

// Forms
import LoginForm from './components/forms/LoginForm'
import RegisterForm from './components/forms/RegisterForm'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <Home />
            </div>
        ),
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: (
            <div>
                <About />
            </div>
        )
    },
    {
        path: '/projects',
        element: (
            <div>
                <Projects />
            </div>
        )
    },
    {
        path: '/certificates',
        element: (
            <div>
                <Certificates />
            </div>
        )
    },
    {
        path: '/login',
        element: (
            <div>
                <LoginForm />
            </div>
        ),
    },
    {
        path: '/register',
        element: (
            <div>
                <RegisterForm />
            </div>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)