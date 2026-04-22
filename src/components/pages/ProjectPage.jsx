import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../ui/Card";
import Button from "../ui/Button";

const Projects = () => {

    const projectList = [
        {
            title: "Ini adalah project card",
            desc: "Ini adalah deskripsi project card",
            tech: ["React", "Tailwind", "Vite"],
            link: "#"
        },
        {
            title: "Ini adalah project card",
            desc: "Ini adalah deskripsi project card",
            tech: ["React", "Tailwind", "Vite"],
            link: "#"
        },
        {
            title: "Ini adalah project card",
            desc: "Ini adalah deskripsi project card",
            tech: ["React", "Tailwind", "Vite"],
            link: "#"
        },
    ]

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 w-full">
                <header className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl">Kumpulan Proyek</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <Card key={index} className="flex flex-col h-full hover:border-blue-500/50 transition-all group">
                            <Card.Title className="text-left text-xl group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </Card.Title>
                            <Card.Description className="text-left mt-2">
                                {project.desc}
                            </Card.Description>
                            <Card.Body className="mt-auto pt-6">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key="t" className="text-[10px] uppercase tracking-widest px-2 py-1 bg-slate-800 text-slate-300 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full text-sm h-10 border-slate-800 hover:border-blue-500">
                                    View Project
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Projects;