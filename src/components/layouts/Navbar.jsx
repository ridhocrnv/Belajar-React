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
                        Ridho <span className="text-blue-500">Crnv</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={navLinkStyle}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={navLinkStyle}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className={navLinkStyle}>
                        Projects
                    </NavLink>
                    <NavLink to="/certificates" className={navLinkStyle}>
                        Certificates
                    </NavLink>
                </div>

                {/* Auth Button */}
                <div className="flex items-center gap-4">
                    <a href="mailto:email@kamu.com">
                        <Button variant="blue" className="h-9 px-5 text-sm">
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
