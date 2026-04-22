import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Certificates = () => {
    const certs = [
        {
            title: 'Belajar Dasar Pemrograman Web',
            issuer: 'Dicoding Indonesia',
            date: 'Februari 2026',
            credential: 'Coding Camp 2026 by DBS Foundation',
            thumbnail:
                './src/assets/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg',
            verifyUrl: '',
        },
        {
            title: 'Belajar Dasar Pemrograman Web',
            issuer: 'Dicoding Indonesia',
            date: '2026',
            credential: 'Coding Camp 2026 by DBS Foundation',
            thumbnail:
                './src/assets/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg',
            verifyUrl: '',
        },
        {
            title: 'Belajar Dasar Pemrograman Web',
            issuer: 'Dicoding Indonesia',
            date: '2026',
            credential: 'Coding Camp 2026 by DBS Foundation',
            thumbnail:
                './src/assets/certificates/sertifikat_belajar_fundamental_aplikasi_web_dengan_react.jpg',
            verifyUrl: '',
        },
    ]

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-blue-500/30">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
                <header className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                        Official{' '}
                        <span className="text-blue-500">Certifications</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Pengakuan formal atas kompetensi teknis yang saya raih
                        melalui program intensif dan ujian standarisasi
                        industri.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {certs.map((cert, index) => (
                        <Card
                            key={index}
                            className="group flex flex-col overflow-hidden p-0 
    bg-slate-900/40 backdrop-blur-md border border-slate-800
    hover:border-blue-500/40 transition-all duration-300"
                        >
                            {/* Gambar */}
                            <div className="relative w-full aspect-ratio overflow-hidden bg-slate-800">
                                <img
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Issuer + Date */}
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[11px] font-semibold uppercase tracking-widest">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-slate-500 text-xs">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <Card.Title className="text-left text-lg md:text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </Card.Title>

                                {/* Credential */}
                                <Card.Description className="text-left mb-6 text-slate-400 text-sm leading-relaxed">
                                    {cert.credential}
                                </Card.Description>

                                {/* Button */}
                                <div className="mt-auto">
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full text-xs h-9 border-slate-700 hover:border-blue-500 gap-2"
                                        >
                                            Verify Credential
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
    )
}

export default Certificates
