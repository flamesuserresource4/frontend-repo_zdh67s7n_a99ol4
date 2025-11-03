import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <button onClick={() => scrollTo('home')} className="text-lg font-semibold tracking-tight text-white">
          Hardik Rohit<span className="text-cyan-300">.</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('projects')} className="text-sm text-white/80 hover:text-white transition">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-sm text-white/80 hover:text-white transition">Contact</button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hardik.rohit@example.com" className="text-white/80 hover:text-white transition" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <button onClick={() => scrollTo('projects')} className="block w-full text-left text-white/90 py-2">Projects</button>
          <button onClick={() => scrollTo('contact')} className="block w-full text-left text-white/90 py-2">Contact</button>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hardik.rohit@example.com" className="text-white/80 hover:text-white transition" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
