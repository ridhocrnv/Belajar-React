import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const RegisterForm = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Mencoba mendaftarkan user baru...");
    };

    return (
        <div className="flex justify-center min-h-screen items-center bg-slate-950 px-4 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full blur-[160px] opacity-10"></div>
            
            <Card className="relative z-10">
                <Card.Title>Register</Card.Title>
                <Card.Description>Silakan buat akun Tech Crew kamu</Card.Description>

                <form onSubmit={handleRegister}>
                    <Card.Body>
                        <div className="space-y-4">
                            <Input 
                                label="Username"
                                type="text"
                                placeholder="Pilih username unik"
                                required
                            />
                            <Input 
                                label="Email"
                                type="email"
                                placeholder="nama@email.com"
                                required
                            />
                            <Input 
                                label="Password"
                                type="password"
                                placeholder="Min. 8 karakter"
                                required
                            />
                            <Input 
                                label="Confirm Password"
                                type="password"
                                placeholder="Ulangi password anda"
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <Button 
                                variant="blue" 
                                type="submit"
                                className="w-full"
                            >
                                Daftar Sekarang
                            </Button>
                        </div>

                        <p className="text-center text-sm text-slate-500 mt-6">
                            Sudah punya akun?{' '}
                            <Link to="/login" className="text-blue-400 hover:underline">
                                Login di sini
                            </Link>
                        </p>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
}

export default RegisterForm;