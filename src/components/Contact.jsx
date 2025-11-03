import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-black py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something great</h2>
          <p className="mt-2 text-white/70">Open to full-time roles, internships, and freelance projects. I enjoy working across the stack with a focus on DX and UX.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="mailto:hardik.rohit@example.com" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-black px-5 py-2.5 font-medium hover:bg-cyan-300 transition">
            <Mail size={18} /> Email me
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Hardik Rohit. Built with React, Tailwind, and Spline.</p>
      </div>
    </section>
  );
}
