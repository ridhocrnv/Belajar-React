import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

            <main className="relative z-10 text-center px-6">
                <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 inline-block">
                    Tech Crew • Computer Science 2024
                </span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Build the Future <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        with Innovation.
                    </span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Selamat datang di portal resmi Tech Crew Universitas Halu Oleo. 
                    Tempat kami berkolaborasi, belajar, dan menciptakan solusi teknologi masa depan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/login" className="w-full sm:w-auto">
                        <Button variant="blue">
                            Masuk ke Portal
                        </Button>
                    </Link>
                    
                    <Button variant="outline">
                        Pelajari Lebih Lanjut
                    </Button>
                </div>
            </main>

            <footer className="absolute bottom-8 text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Tech Crew UHO.
            </footer>
        </div>
    );
}

export default Home;