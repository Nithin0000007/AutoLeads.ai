import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:shadow-sky-500/50 transition-shadow">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">AutoLeads<span className="text-sky-400">.ai</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookDemo}
              className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-all duration-200"
            >
              Book Free Demo
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/98 backdrop-blur-md border-t border-white/5 px-4 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-slate-300 hover:text-white font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { onBookDemo(); setMenuOpen(false); }}
            className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full"
          >
            Book Free Demo
          </button>
        </div>
      )}
    </nav>
  );
}
