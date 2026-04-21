import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-slate-400'}`

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tighter text-white uppercase">
                        Tech <span className="text-blue-500">Crew</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={navLinkStyle}>
                        Home
                    </NavLink>
                    <NavLink to="/anggota" className={navLinkStyle}>
                        Anggota
                    </NavLink>
                    <NavLink to="/galeri" className={navLinkStyle}>
                        Galeri
                    </NavLink>
                    <NavLink to="/proyek" className={navLinkStyle}>
                        Proyek
                    </NavLink>
                </div>

                {/* Auth Button */}
                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <Button
                            variant="outline"
                            className="hidden sm:flex border-none hover:bg-transparent text-slate-400 hover:text-white"
                        >
                            Masuk
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button variant="blue" className="h-9 px-5 text-sm">
                            Join Us
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
