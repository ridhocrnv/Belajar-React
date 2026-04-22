import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Projects = () => {
    const projectList = [
        {
            title: 'Ini adalah project card',
            desc: 'Ini adalah deskripsi project card',
            tech: ['React', 'Tailwind', 'Vite'],
            thumbnail: '/projects/Thumbnail.png',
            github: 'https://github.com/ridhocrnv/Belajar-React.git',
            link: 'https://pkm-witsar.vercel.app',
        },
        {
            title: 'Ini adalah project card',
            desc: 'Ini adalah deskripsi project card',
            tech: ['Vue.js', 'Express', 'Vite', 'Tailwind', 'Mysql'],
            thumbnail: '/projects/Thumbnail.png',
            github: 'https://github.com/ridhocrnv/Belajar-React.git',
            link: 'https://pkm-witsar.vercel.app',
        },
        {
            title: 'Ini adalah project card',
            desc: 'Ini adalah deskripsi project card',
            tech: ['React', 'Tailwind', 'Vite'],
            thumbnail: '/projects/Thumbnail.png',
            github: 'https://github.com/ridhocrnv/Belajar-React.git',
            link: 'https://pkm-witsar.vercel.app',
        },
    ]

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
                <header className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Eksplorasi teknis dan solusi digital yang saya
                        kembangkan. Setiap proyek adalah langkah pembelajaran
                        saya sebagai pengembang.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectList.map((project, index) => (
                        <Card
                            key={index}
                            className="flex flex-col h-full hover:border-slate-700 transition-all group overflow-hidden p-0 bg-slate-900/20 backdrop-blur-sm"
                        >
                            <div className="relative aspect-video overflow-hidden border-b border-slate-800">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-sm"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] font-sans uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Card.Title className="text-left text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </Card.Title>

                            <Card.Description className="text-left mb-8 text-slate-400 text-sm leading-relaxed">
                                {project.desc}
                            </Card.Description>

                            <div className="mt-auto flex flex-row gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full text-xs h-10 border-slate-800 gap-2"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            GitHub
                                        </svg>
                                    </Button>
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1"
                                >
                                    <Button
                                        variant="blue"
                                        className="w-full flex justify-center text-xs h-10 shadow-lg shadow-blue-500/10"
                                    >
                                        Live Demo
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Projects;
