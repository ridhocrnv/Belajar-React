import React from 'react'
import Button from './components/ui/Button'

function App() {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-sm border border-slate-200">
                <h1 className="text-3xl text-blue-600 font-bold text-center">Login</h1>
                <p className="font-medium text-slate-600 text-center mb-6">Silahkan login</p>

                <form action="" className="flex flex-col">
                    <div className="mb-4">
                        <label
                            htmlFor=""
                            className="block text-slate-700 text-sm font-bold mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className="w-full text-sm border rounded py-2.5 px-3 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:opacity-50"
                            placeholder='example@email.ac.id'
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor=""
                            className="block text-slate-700 text-sm font-bold mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full text-sm border rounded py-2.5 px-3 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:opacity-50"
                            placeholder='Enter your password'
                        />
                    </div>
                    
                    <Button variant="blue" type="submit" className="w-full shadow-sm shadow-blue-200">
                        Login
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default App
