import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../ui/Button'

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-blue-500/30">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
                
                <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-10"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-600 rounded-full blur-[140px] opacity-10"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 inline-block">
                        Full-Stack Web Developer
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                        Crafting Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Experience with Code.
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Halo! Saya Ridho Ahmad Irawan, mahasiswa Ilmu Komputer yang berfokus pada pengembangan aplikasi web modern yang skalabel dan estetik.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link to="/projects">
                            <Button variant="blue" className="w-full sm:w-auto h-12 px-8">
                            View Projects
                        </Button>
                        </Link>
                        
                        <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-slate-800">
                            Download CV
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
