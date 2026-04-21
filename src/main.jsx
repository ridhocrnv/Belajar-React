import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './components/pages/HomePage'
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