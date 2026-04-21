import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'

const RegisterForm = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
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
                        <Input 
                            label="Confirm Password"
                            type="password"
                            placeholder="Enter your passsword"
                        />

                        <Button variant="blue" type="submit" className="w-full mt-2">
                            Register
                        </Button>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
}

export default RegisterForm;