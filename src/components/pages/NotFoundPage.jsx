import { Link, useRouteError } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../ui/Button";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
            
            {/* Navbar */}
            <Navbar />

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

            <main className="relative flex-1 flex flex-col items-center justify-center px-6 text-center z-10 pt-32 md:pt-40 pb-20">
                
                {/* 404 Watermark */}
                <h1 className="text-8xl sm:text-[15rem] md:text-[20rem] font-extrabold text-slate-900 absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 tracking-tighter opacity-40 pointer-events-none">
                    404
                </h1>

                {/* Content Wrapper */}
                <div className="max-w-md z-10 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        Oops! Halaman <br className="md:hidden" /> Tidak Ditemukan
                    </h2>

                    <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                        Maaf, sepertinya halaman yang kamu cari tidak ada atau terjadi kesalahan yang tidak terduga.
                    </p>

                    <div className="bg-slate-900/40 backdrop-blur-md px-4 md:px-6 py-4 rounded-xl border border-slate-800 shadow-2xl mb-10 md:mb-12">
                        <p className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em] mb-2 opacity-80">
                            Error Debug Info
                        </p>
                        <p className="text-xs md:text-sm font-mono text-slate-300 italic break-words">
                            {error.statusText || error.message || "Route Error"}
                        </p>
                    </div>

                    {/* Navigasi Kembali */}
                    <div className="flex justify-center">
                        <Link to="/" className="w-full sm:w-auto">
                            <Button variant="blue" className="sm:px-12 py-4 h-auto text-base shadow-xl shadow-blue-500/10">
                                Kembali ke Beranda
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ErrorPage;