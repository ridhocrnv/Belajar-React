import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(prev => !prev)
    const closeMenu = () => setIsOpen(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    // Close menu on desktop resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) closeMenu()
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navLinkStyle = ({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-blue-400 ${
            isActive ? 'text-blue-400' : 'text-slate-400'
        }`

    const mobileNavLink = ({ isActive }) =>
        `text-3xl font-bold tracking-tight transition-all duration-300 ${
            isActive ? 'text-blue-500 translate-x-2' : 'text-white hover:text-blue-400'
        }`

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-slate-800 font-sans">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="relative z-[200]">
                        <span className="text-xl font-bold tracking-tighter text-white uppercase">
                            Ridho <span className="text-blue-500">Crnv</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
                        <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
                        <NavLink to="/certificates" className={navLinkStyle}>Certificates</NavLink>

                        <div className="ml-4">
                            <a href="mailto:contact@ridhoahmad.me">
                                <Button variant="blue" className="h-9 px-5 text-sm">
                                    Contact Me
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Hamburger Button — z-index tinggi agar selalu di atas overlay */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                        className="relative z-[200] md:hidden flex flex-col justify-center items-center w-10 h-10 text-white outline-none"
                    >
                        {/* Gunakan gap tetap + transform saja, tanpa mb/mt agar tidak jitter */}
                        <span className="flex flex-col gap-1.5">
                            <span
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                                    isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                                }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                                    isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay — dipisah dari <nav> agar tidak ada z-index conflict */}
            <div
                className={`fixed inset-0 bg-slate-950 flex flex-col items-start justify-start px-10 md:hidden z-[150]
                    transition-all duration-500 ease-in-out ${
                        isOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Spacer setinggi navbar + tombol close di kanan */}
                <div className="h-20 w-full shrink-0 flex items-center justify-end">
                    <button
                        onClick={closeMenu}
                        aria-label="Close Menu"
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
                    >
                        {/* Icon X */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-8 w-full mt-8">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About' },
                        { to: '/projects', label: 'Projects' },
                        { to: '/certificates', label: 'Certificates' },
                    ].map(({ to, label }, i) => (
                        <div
                            key={to}
                            className="transition-all duration-500"
                            style={{
                                transitionDelay: isOpen ? `${i * 60 + 100}ms` : '0ms',
                                transform: isOpen ? 'translateX(0)' : 'translateX(-24px)',
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <NavLink to={to} onClick={closeMenu} className={mobileNavLink}>
                                {label}
                            </NavLink>
                        </div>
                    ))}
                </div>

                <div className="mt-auto mb-20 w-full pt-8 border-t border-slate-800">
                    <a href="mailto:contact@ridhoahmad.me" className="block w-full">
                        <Button variant="blue" className="w-full h-14 text-lg shadow-2xl shadow-blue-500/20">
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;