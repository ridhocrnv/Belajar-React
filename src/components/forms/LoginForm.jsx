import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const LoginForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Mencoba Login...");
    };

    return (
        <div className="flex justify-center min-h-screen items-center bg-slate-950 px-4">
            <Card>
                <Card.Title>Login</Card.Title>
                <Card.Description>Silahkan Login</Card.Description>

                <form onSubmit={handleLogin}>
                    <Card.Body>
                        <div className="space-y-4">
                            <Input 
                                label="Email" 
                                type="email" 
                                placeholder="nama@email.com"
                                required 
                            />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Masukkan password"
                                required
                            />
                            
                            <Button
                                variant="blue"
                                type="submit"
                                className="w-full mt-2"
                            >
                                Login
                            </Button>
                        </div>

                        {/* Link Registrasi */}
                        <p className="text-center text-sm text-slate-500 mt-6">
                            Belum punya akun?{' '}
                            <Link to="/register" className="text-blue-600 hover:underline">
                                Daftar
                            </Link>
                        </p>
                    </Card.Body>
                </form>
            </Card>
        </div>
    )
}

export default LoginForm;