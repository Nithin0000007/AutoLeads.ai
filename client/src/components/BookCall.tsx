import { Calendar, Search, Lightbulb, Shield, ArrowRight, Clock } from 'lucide-react';
import LeadForm from './LeadForm';
import { useInView } from '../hooks/useIntersectionObserver';

const callPoints = [
  { icon: Search, title: 'Audit Your Current System', desc: 'We review exactly where leads are entering and leaking from your business.' },
  { icon: Lightbulb, title: 'Identify Missed Opportunities', desc: 'We show you precisely how many leads you\'re losing — and the revenue that represents.' },
  { icon: Calendar, title: 'Build Your Custom Game Plan', desc: 'You\'ll walk away with a clear automation roadmap tailored to your business, regardless of whether you work with us.' },
];

interface BookCallProps {
  onBookDemo: () => void;
}

export default function BookCall({ onBookDemo }: BookCallProps) {
  const { ref, isInView } = useInView();

  return (
    <section id="book-call" className="py-24 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
              <Calendar size={13} className="text-sky-400" />
              <span className="text-sky-400 text-sm font-medium">Free Strategy Call</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Book a Free{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">30-Minute Strategy Call</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Not a sales pitch. Not a generic demo. A real conversation about <span className="text-white font-medium">your specific business</span> and how automation can work for you.
            </p>

            <div className="space-y-5 mb-8">
              {callPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className={`flex items-start gap-4 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                    <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{point.title}</h4>
                      <p className="text-slate-400 text-sm">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <Shield size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-emerald-300 font-semibold text-sm">No pressure. No obligations.</p>
                <p className="text-slate-400 text-sm mt-1">You'll leave with actionable insights you can implement yourself — even if you never work with us. That's our promise.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <Clock size={14} className="text-amber-400" />
              <p className="text-amber-300 text-sm font-medium">
                <span className="text-white font-bold">Only 5 spots available this month</span> — 3 already claimed.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-bold text-xl mb-2">Reserve Your Free Call</h3>
              <p className="text-slate-400 text-sm mb-6">Fill in your details and we'll reach out within 2 hours to schedule your slot.</p>
              <LeadForm source="book-call" onSuccess={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
