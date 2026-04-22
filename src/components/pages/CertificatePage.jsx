import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../ui/Card";

const Certificates = () => {

    const certs = [
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation"
        },
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation"
        },
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation"
        }
    ];


    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
                <header className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-slate-400">Bukti dedikasi saya dalam mempelajari teknologi dan metodologi pengembangan perangkat lunak.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {certs.map((cert, index) => (
                        <Card key={index} className="max-w-none border-slate-800/50 hover:bg-slate-900/40 transition-all">
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <span className="text-blue-500 text-10[px] font-bold uppercase tracking-[0.2em]">
                                        {cert.issuer}
                                    </span>
                                    <Card.Title className="text-left text-lg md:text-xl mt-1">
                                        {cert.title}
                                    </Card.Title>
                                    <p className="text-slate-500 text-sm mt-2 font-sans">
                                        {cert.credential}
                                    </p>
                                </div>
                                <div className="text-slate-600 text-sm font-bold">
                                    {cert.date}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Certificates;