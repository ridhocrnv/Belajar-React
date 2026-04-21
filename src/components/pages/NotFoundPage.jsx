import { Link, useRouteError } from "react-router-dom";
import Button from "../ui/Button";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-200 px-6 text-center">
            <h1 className="text-[12rem] font-extrabold text-slate-300/50 absolute select-none z-0">404</h1>

            <div className="max-w-md z-10">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Oops! Halaman Tidak Ditemukan
                </h2>

                <p className="text-slate-600 text-lg mb-6">
                    Maaf, sepertinya halaman yang kamu cari tidak ada atau terjadi kesalahan yang tidak terduga.
                </p>

                {/* Box Detail Error */}
                <div className="px-3 py-4 rounded-md border border-slate-200 shadow-sm mb-8">
                    <p className="text-sm font-mono text-slate-600 italic">
                        Error Detail: {error.statusText || error.message}
                    </p>
                </div>

                {/* Navigasi Kembali */}
                <Link
                    to="/"
                >
                    <Button variant="blue">
                        Kembali ke Beranda
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;