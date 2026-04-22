import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../ui/Button'

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-blue-500/30">
            <Navbar />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-20">

                <div className="absolute top-0 -left-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[100px] md:blur-[140px] opacity-10 pointer-events-none" />
                <div className="absolute bottom-20 -right-10 w-64 h-64 md:w-96 md:h-96 bg-indigo-600 rounded-full blur-[100px] md:blur-[140px] opacity-10 pointer-events-none" />

                <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center">

                    <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-5 md:mb-6 inline-flex items-center gap-1.5">
                        Full-Stack Web Developer
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-5 md:mb-8 leading-[1.1]">
                        Crafting Digital{' '}
                        <br className="" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Experience with Code.
                        </span>
                    </h1>

                    <p className="text-slate-400 text-base md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                        Halo! Saya <span className="text-slate-200 font-medium">Ridho Ahmad Irawan</span>, mahasiswa Ilmu Komputer yang berfokus pada pengembangan aplikasi web modern yang skalabel dan estetik.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-xs sm:max-w-none sm:w-auto mx-auto">
                        <Link to="/projects" className="w-full sm:w-auto">
                            <Button
                                variant="blue"
                                className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-sm"
                            >
                                View Projects
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-sm border-slate-700 hover:border-slate-500 transition-colors"
                        >
                            Download CV
                        </Button>
                    </div>

                    {/* <div className="mt-14 md:hidden flex flex-col items-center gap-1.5 text-slate-600">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
                    </div> */}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home