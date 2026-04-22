import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-lg font-bold text-white tracking-tighter uppercase">
                            Ridho <span className="text-blue-500">Crnv</span>
                        </span>
                    </div>
                    <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                        Mahasiswa Ilmu Komputer Universitas Halu Oleo yang
                        berfokus pada pembangunan solusi digital yang inovatif
                        dan efisien. Terus belajar, terus berkarya.
                    </p>
                    <div className="flex gap-4">
                        {/* Kamu bisa menambahkan icon-icon kecil di sini nanti */}
                        <span className="text-xs text-blue-400 font-mono">AVAILABLE FOR PROJECTS</span>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                        Navigasi
                    </h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-400 transition-colors">About Me</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                        </li>
                        <li>
                            <Link to="/certificates" className="hover:text-blue-400 transition-colors">Certificates</Link>
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
                            <a href="https://github.com/ridhoahmad" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/ridhoahmad" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://instagram.com/ridhoahmad" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
                        </li>
                        <li>
                            <a href="mailto:ridhoahmadirawan281@gmail.com" className="hover:text-blue-400 transition-colors">Email Me</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div className="space-y-1">
                    <p className="text-slate-600 text-xs font-medium">
                        &copy; {new Date().getFullYear()} Ridho Ahmad Irawan. All rights reserved.
                    </p>
                    <p className="text-slate-700 text-[10px] font-mono uppercase tracking-tighter">
                        Built with React • Tailwind • Vite
                    </p>
                </div>
                
                <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span>Kendari, South East Sulawesi</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
