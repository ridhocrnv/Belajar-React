import React from 'react'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Input from './components/ui/Input'

function App() {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <Card>
                <Card.Title>Login</Card.Title>
                <Card.Description>Silahkan Login</Card.Description>

                <form action="">
                    <Card.Body>
                        <Input 
                            label="Email"
                            type="text"
                        />
                        <Input 
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <Button variant="blue" type="submit" className="w-full mt-2">
                            Login
                        </Button>
                    </Card.Body>
                </form>
            </Card>

            <Card>
                <Card.Title>
                    Register
                </Card.Title>
                <Card.Description>
                    Silahkan Register
                </Card.Description>

                <form action="">
                    <Card.Body>
                        <Input 
                            label="Username"
                            type="text"
                            placeholder="Enter your username"
                        />
                        <Input 
                            label="Email"
                            type="text"
                        />
                        <Input 
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                        />

                        <Button variant="blue" type="submit" className="w-full mt-2">
                            Register
                        </Button>
                    </Card.Body>
                </form>
            </Card>
        </div>
    )
}

export default App
