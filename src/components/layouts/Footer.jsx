import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-52">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">
                            TC
                        </div>
                        <span className="text-lg font-bold text-white tracking-tighter uppercase">
                            Tech <span className="text-blue-500">Crew</span>
                        </span>
                    </div>
                    <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                        Wadah kolaborasi dan kreativitas mahasiswa Ilmu Komputer
                        angkatan 2024 Universitas Halu Oleo. Kita membangun masa
                        depan melalui teknologi.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                        Navigasi
                    </h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/anggota"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Daftar Anggota
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/kegiatan"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Agenda Kegiatan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                        Media Sosial
                    </h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-400 transition-colors"
                            >
                                GitHub Community
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 text-xs">&copy; {new Date().getFullYear()} Tech Crew UHO. All rights reserved.</p>
                <p className="text-slate-600 text-xs">Build with ❤️ in Kendari, Indonesia</p>
            </div>
        </footer>
    )
}

export default Footer;