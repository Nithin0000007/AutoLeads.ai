import { XCircle, CheckCircle2 } from 'lucide-react';
import { useInView } from '../../../hooks/useIntersectionObserver';

const rows = [
  { feature: 'Response time to new leads', manual: '2–24 hours', automated: 'Under 60 seconds' },
  { feature: 'Follow-up consistency', manual: 'Depends on staff availability', automated: '100% consistent, every time' },
  { feature: 'Lead tracking', manual: 'Spreadsheets & sticky notes', automated: 'Real-time dashboard' },
  { feature: 'After-hours coverage', manual: 'Zero', automated: '24/7, including weekends' },
  { feature: 'WhatsApp communication', manual: 'Manual, one at a time', automated: 'Automated, personalized at scale' },
  { feature: 'Lead qualification', manual: 'Ad hoc conversations', automated: 'Smart AI-driven flow' },
  { feature: 'Cost to operate', manual: 'Full-time staff + time', automated: 'Fraction of the cost' },
  { feature: 'Missed lead rate', manual: '40–70% of inquiries', automated: 'Near zero' },
];

export default function Comparison() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#070e1c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Manual vs.{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Automated</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">The difference is not small. It's the difference between growing and stalling.</p>
        </div>

        <div className={`rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="p-4 text-slate-400 text-sm font-semibold">Capability</div>
            <div className="p-4 text-center border-x border-white/10">
              <div className="flex items-center justify-center gap-1.5">
                <XCircle size={15} className="text-rose-400" />
                <span className="text-rose-400 text-sm font-semibold">Manual Process</span>
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold">With AutoLeads.ai</span>
              </div>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 60 + 300}ms`, transitionDuration: '400ms' }}
            >
              <div className="p-4 text-slate-300 text-sm font-medium">{row.feature}</div>
              <div className="p-4 text-center border-x border-white/5">
                <span className="text-rose-400/80 text-sm">{row.manual}</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-emerald-400 text-sm font-medium">{row.automated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
