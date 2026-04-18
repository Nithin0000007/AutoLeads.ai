import { TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useIntersectionObserver';

const cases = [
  {
    industry: 'Healthcare',
    tag: 'Dental Clinic',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/20',
    tagColor: 'bg-rose-500/20 text-rose-300',
    title: 'How a 3-Chair Dental Practice Added 22 New Patients Per Month',
    challenge: 'Dr. Kim\'s dental office was getting inquiries through their website but had no system to follow up. Front desk staff were overwhelmed. Leads went cold within hours.',
    solution: 'We deployed an AI chatbot that captured patient details and a WhatsApp sequence that confirmed appointments, sent reminders, and answered FAQs automatically.',
    results: [
      { icon: TrendingUp, label: 'New monthly patients', value: '+22' },
      { icon: Clock, label: 'Reduction in no-shows', value: '-65%' },
      { icon: Users, label: 'Lead-to-book rate', value: '34%' },
    ],
    timeframe: 'Results within 3 weeks',
  },
  {
    industry: 'Real Estate',
    tag: 'Property Agency',
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/20',
    tagColor: 'bg-sky-500/20 text-sky-300',
    title: 'How a Real Estate Agency Tripled Their Viewing Bookings in 45 Days',
    challenge: 'Lucas Property Group received 80+ property inquiries per week but their agents couldn\'t respond fast enough. Competitors were following up before they could.',
    solution: 'We built an instant-response AI system that qualified buyers, sent property details via WhatsApp, and automatically booked viewings into the agent\'s calendar.',
    results: [
      { icon: TrendingUp, label: 'Viewing bookings', value: '+210%' },
      { icon: Clock, label: 'Response time', value: '< 45s' },
      { icon: Users, label: 'Lead retention rate', value: '89%' },
    ],
    timeframe: 'Results within 6 weeks',
  },
];

export default function CaseStudies() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-medium">Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Real Businesses.{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Real Numbers.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See exactly how automation transformed lead flow for businesses in your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.01] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tagColor}`}>{c.industry}</span>
                  <span className="text-slate-500 text-xs">{c.tag}</span>
                </div>

                <h3 className="text-white font-bold text-lg md:text-xl mb-4 leading-snug">{c.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-1.5">The Challenge</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">Our Solution</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {c.results.map((r) => {
                    const Icon = r.icon;
                    return (
                      <div key={r.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-extrabold text-white mb-1">{r.value}</div>
                        <div className="text-slate-400 text-[10px] leading-tight">{r.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-semibold">{c.timeframe}</span>
                  <div className="flex items-center gap-1 text-sky-400 text-sm font-medium hover:gap-2 transition-all cursor-pointer">
                    Read full story <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
