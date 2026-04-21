import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../ui/Button'

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-blue-500/30">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
                {/* Background Glows - Diperkecil untuk mobile agar tidak lag */}
                <div className="absolute top-0 -left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full blur-[100px] md:blur-[140px] opacity-10 md:opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-10 -right-10 w-64 md:w-96 h-64 md:h-96 bg-indigo-600 rounded-full blur-[100px] md:blur-[140px] opacity-10 md:opacity-20 pointer-events-none"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-6 inline-block">
                        Tech Crew • Computer Science 2024
                    </span>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
                        Elevating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Digital Frontier.
                        </span>
                    </h1>

                    <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
                        Ekosistem digital resmi mahasiswa Ilmu Komputer angkatan 2024 FMIPA Universitas Halu Oleo. 
                        Wadah kolaboratif untuk membangun masa depan teknologi.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
                        <Link to="/login" className="w-full sm:w-auto">
                            <Button variant="blue" className="w-full h-12 px-8 text-base md:text-lg">
                                Masuk ke Portal
                            </Button>
                        </Link>
                        <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-base md:text-lg border-slate-800">
                            Eksplorasi Proyek
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
