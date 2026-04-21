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
                {/* Background */}
                <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-20"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-600 rounded-full blur-[140px] opacity-20"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 inline-block animate-fade-in">
                        Tech Crew • Computer Science 2024
                    </span>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        Elevating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Digital Frontier.
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Ekosistem digital resmi mahasiswa Ilmu Komputer angkatan
                        2024 FMIPA Universitas Halu Oleo. Wadah kolaboratif
                        untuk bersinergi, berinovasi, dan mentransformasi ide
                        menjadi solusi teknologi yang berdampak.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link to="/login" className="w-full sm:w-auto">
                            <Button
                                variant="blue"
                                className="w-full h-12 px-8 text-lg"
                            >
                                Masuk ke Portal
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto h-12 px-8 text-lg border-slate-800"
                        >
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
