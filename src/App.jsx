import React from 'react'
import Button from './components/ui/Button'

function App() {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <h1>Hello React!</h1>
            <Button variant="red">Laravel</Button>
            <Button variant="green">Vue</Button>
            <Button variant="blue">React</Button>
            <Button>Framer Motion</Button>
            <div className="w-full min-h-xs">
                <h1 className="text-3xl text-blue-600 font-bold">Login</h1>
                <p className="font-medium text-slate-600">Silahkan login</p>
                <form action="">
                    <div className="mb-5">
                        <label
                            htmlFor=""
                            className="block text-slate-700 text-sm font-bold"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className="text-sm border rounded w-half py-2 px-3 text-slate-700 placeholder:opacity-50"
                            placeholder='example@email.ac.id'
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor=""
                            className="block text-slate-700 text-sm font-bold"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="text-sm border rounded w-half py-2 px-3 text-slate-700 placeholder:opacity-50"
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='mb-5'>
                        <Button variant="blue">Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App
