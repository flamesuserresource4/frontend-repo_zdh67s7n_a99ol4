import { Code2, Cpu, Globe, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'Interactive coding helper with natural language prompts, built with FastAPI and React.',
    tags: ['AI', 'FastAPI', 'React', 'Tailwind'],
    icon: Code2,
    link: '#'
  },
  {
    title: 'Distributed Task Scheduler',
    description: 'Fault-tolerant job queue with worker nodes and monitoring dashboard.',
    tags: ['Python', 'Redis', 'Docker'],
    icon: Cpu,
    link: '#'
  },
  {
    title: 'Personal Portfolio v2',
    description: 'Playful 3D experience with Spline and smooth interactions.',
    tags: ['Spline', 'Vite', 'Framer Motion'],
    icon: Globe,
    link: '#'
  },
  {
    title: 'Open Source CLI Tools',
    description: 'A collection of productivity CLIs published for the dev community.',
    tags: ['Node', 'Open Source'],
    icon: FolderGit2,
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured projects</h2>
          <p className="mt-2 text-white/70">A selection of work highlighting my interests in web engineering, systems, and interactive design.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-cyan-400/20 text-cyan-300 border border-cyan-300/20">
                  <p.icon size={22} />
                </div>
                <span className="text-xs text-white/50">{new Date().getFullYear()}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-white/10 border border-white/10 text-white/80 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
