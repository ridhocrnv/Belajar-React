import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../ui/Card";
import Button from "../ui/Button";

const Certificates = () => {

    const certs = [
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation",
            thumbnail: "/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg",
            verifyUrl: ""
        },
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation",
            thumbnail: "/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg",
            verifyUrl: ""
        },
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "2026",
            credential: "Coding Camp 2026 by DBS Foundation",
            thumbnail: "/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg",
            verifyUrl: ""
        }
    ];


    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-blue-500/30">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
                <header className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Official <span className="text-blue-500">Certifications</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Pengakuan formal atas kompetensi teknis yang saya raih melalui program intensif dan ujian standarisasi industri.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {certs.map((cert, index) => (
                        <Card key={index} className="flex flex-col md:flex-row h-full  hover:border-slate-700 transition-all group overflow-hidden p-0 bg-slate-900/10 backdrop-blur-sm">
                            
                            <div className="relative w-full md:w-48 lg:w-64 aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-800 shrink-0 border-b md:border-b-0 md:border-r border-slate-800">
                                <img src={cert.thumbnail} alt={cert.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-30 group-hover:opacity-100"/>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-slate-600 text-xs font-sans">
                                        {cert.date}
                                    </span>
                                </div>

                                <Card.Title className="text-left text-lg md:text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </Card.Title>

                                <Card.Description className="text-left mb-6 text-slate-500 text-sm">
                                    {cert.credential}
                                </Card.Description>

                                <div className="mt-auto">
                                    <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                                        <Button variant="outline" className="w-full md:w-auto px-6 text-xs h-9 border-slate-800 hover:border-blue-500 gap-2">
                                            Verify Credential
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </Button>
                                    </a>
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