import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../ui/Card";

const About = () => {
    const skills = ["React", "TailwindCSS", "Node.js", "Vue.js", "PostgreSQL"];

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">About Me</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Saya adalah mahasiswa semester 4 Program Studi Ilmu Komputer di Universitas Halu Oleo.
                            Memiliki minat besar dalam pengembangan web dan sistem operasi Linux (Ubuntu user).
                        </p>
                        <p>
                            Saat ini saya sedang mendalami Full-Stack Web Development melalui program Coding Camp 2026 by DBS Foundation.
                        </p>

                        <div className="pt-6">
                            <h3 className="font-bold text-blue-400 mb-4 uppercase tracking-widest text-sm">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-6">
                        <Card className="max-w-none">
                            <Card.Title className="text-left text-xl text-blue-400">Education</Card.Title>
                            <Card.Body className="mt-4 space-y-4">
                                <div>
                                    <h4 className="text-white font-bold">S1 Ilmu Komputer</h4>
                                    <p className="text-slate-500 text-sm">Universitas Halu Oleo • 2024 - Sekarang</p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="max-w-none">
                            <Card.Title className="text-left text-xl text-blue-400">Current Program</Card.Title>
                            <Card.Body className="mt-4 space-y-4">
                                <h4 className="text-white font-bold">Full-Stack Web Developer Cohort</h4>
                                <p className="text-slate-500 text-sm">Coding Camp 2026 by DBS Foundation</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;