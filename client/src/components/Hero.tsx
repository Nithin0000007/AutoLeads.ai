import { ArrowRight, Play, CheckCircle, Clock } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1a] pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sky-300 text-sm font-medium">AI-Powered Lead Automation — Limited Spots Available</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Turn Missed Leads Into{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
            Booked Clients
          </span>
          <br />
          — Automatically
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We build AI-powered lead capture and WhatsApp follow-up systems that respond in under 60 seconds — so you close more deals while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={onBookDemo}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-200"
          >
            Book Free Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#how-it-works"
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <div className="w-8 h-8 bg-sky-500/20 rounded-full flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
              <Play size={14} className="text-sky-400 ml-0.5" fill="currentColor" />
            </div>
            See How It Works
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {['No technical knowledge needed', 'Live in 7 days', 'Results in 30 days'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl px-6 py-3">
            <Clock size={16} className="text-amber-400 flex-shrink-0" />
            <p className="text-amber-300 text-sm font-medium">
              <span className="font-bold">Scarcity Alert:</span> We only onboard <span className="text-amber-200 font-bold">5 new businesses</span> per month. <span className="text-white">3 spots left for May.</span>
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '2x', label: 'More Leads' },
            { value: '< 60s', label: 'Response Time' },
            { value: '180%', label: 'Avg Lead Increase' },
            { value: '7 Days', label: 'To Go Live' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
