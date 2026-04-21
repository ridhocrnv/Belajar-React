import { Link, useRouteError } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../ui/Button";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
            
            <Navbar />

            <div className="h-20 w-full flex-none"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <main className="relative flex-1 flex flex-col items-center justify-center px-6 text-center z-10 py-12 md:py-24">
                
                {/* 404 Watermark */}
                <h1 className="text-[10rem] md:text-[20rem] font-extrabold text-slate-800/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 tracking-tighter pointer-events-none">
                    404
                </h1>

                {/* Konten Pesan */}
                <div className="max-w-md z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Oops! Halaman Tidak Ditemukan
                    </h2>

                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Maaf, sepertinya halaman yang kamu cari tidak ada atau terjadi kesalahan yang tidak terduga.
                    </p>

                    {/* Box Detail Error */}
                    <div className="bg-slate-900/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-800 shadow-xl mb-12">
                        <p className="text-[10px] font-mono text-blue-400/80 uppercase tracking-widest mb-1">
                            Error Debug Info:
                        </p>
                        <p className="text-sm font-mono text-slate-300 italic">
                            {error.statusText || error.message || "Unknown Error"}
                        </p>
                    </div>

                    <Link to="/">
                        <Button variant="blue" className="px-12 py-3.5 h-auto text-base shadow-lg shadow-blue-500/20">
                            Kembali ke Beranda
                        </Button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ErrorPage;