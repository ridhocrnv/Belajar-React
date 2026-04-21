import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'

const LoginForm = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <Card>
            <Card.Title>Login</Card.Title>
            <Card.Description>Silahkan Login</Card.Description>

            <form action="">
                <Card.Body>
                    <Input label="Email" type="text" />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Button
                        variant="blue"
                        type="submit"
                        className="w-full mt-2"
                    >
                        Login
                    </Button>
                </Card.Body>
            </form>
        </Card>
        </div>
    )
}

export default LoginForm;