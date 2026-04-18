import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useIntersectionObserver';

interface FinalCTAProps {
  onBookDemo: () => void;
}

const guarantees = [
  'Zero technical setup required from you',
  'Live within 7 business days',
  'Dedicated onboarding specialist',
  '30-day results guarantee',
];

export default function FinalCTA({ onBookDemo }: FinalCTAProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#050d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
            <Clock size={13} className="text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Only 2 spots remaining this month</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Stop Losing Leads to{' '}
            <span className="text-rose-400">Slow Follow-Ups.</span>
            <br />
            Start Converting{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Automatically.</span>
          </h2>

          <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is another batch of hot leads going cold. Your competitors are already automating. Don't let them win your customers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
            {guarantees.map((g, i) => (
              <div
                key={g}
                className={`flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs text-center leading-snug">{g}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookDemo}
              className="group flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-200"
            >
              Book Your Free Demo Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="mt-6 text-slate-600 text-sm">Free 30-minute call · Instant confirmation</p>
        </div>
      </div>
    </section>
  );
}
