import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300/90 bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-4">
            Computer Science • Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm Hardik Rohit
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            CSE graduate crafting modern web apps, scalable backends, and delightful user experiences. I love blending clean design with robust engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={handleContact} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-black px-5 py-2.5 font-medium hover:bg-cyan-300 transition">
              Get in touch <ArrowRight size={18} />
            </button>
            <a href="#projects" className="rounded-full border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
