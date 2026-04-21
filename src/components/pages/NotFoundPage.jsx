import { Link, useRouteError } from "react-router-dom";
import Button from "../ui/Button";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 px-6 text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <h1 className="text-[12rem] md:text-[20rem] font-extrabold text-slate-800/30 absolute select-none z-0 tracking-tighter">
                404
            </h1>

            <div className="max-w-md z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Oops! Halaman Tidak Ditemukan
                </h2>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Maaf, sepertinya halaman yang kamu cari tidak ada atau terjadi kesalahan yang tidak terduga.
                </p>

                <div className="bg-slate-900/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-800 shadow-xl mb-10">
                    <p className="text-xs font-mono text-blue-400/80 uppercase tracking-widest mb-1">
                        Error Debug Info:
                    </p>
                    <p className="text-sm font-mono text-slate-300 italic">
                        {error.statusText || error.message}
                    </p>
                </div>

                {/* Navigasi Kembali */}
                <Link to="/">
                    <Button variant="blue" className="px-10 py-3 shadow-lg shadow-blue-500/20">
                        Kembali ke Beranda
                    </Button>
                </Link>
            </div>

            <div className="absolute bottom-8 text-slate-600 text-sm font-medium uppercase tracking-[0.2em]">
                Tech Crew • 2024
            </div>
        </div>
    );
}

export default ErrorPage;