import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useIntersectionObserver';

const problems = [
  { icon: '😴', text: 'Leads arrive at night — no one responds until morning. Deal is gone.' },
  { icon: '⏳', text: 'Manual follow-up takes 2–3 hours per day. Most leads go cold.' },
  { icon: '📉', text: 'Potential clients don\'t hear back for 24+ hours. They call a competitor.' },
  { icon: '🗂️', text: 'Leads tracked in spreadsheets, WhatsApp chats, sticky notes. Total chaos.' },
];

const solutions = [
  { icon: '⚡', text: 'AI chatbot responds to every lead in under 60 seconds — even at 2am.' },
  { icon: '📲', text: 'Automatic WhatsApp follow-ups sent the moment a lead comes in.' },
  { icon: '🔄', text: 'Smart nurture sequences keep your leads warm until they\'re ready to buy.' },
  { icon: '📊', text: 'Every lead organized in a real-time dashboard with full history.' },
];

export default function ProblemSolution() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#070e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Here's What's{' '}
            <span className="text-rose-400">Costing You Clients</span>
            {' '}Right Now
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most businesses lose 40–70% of their leads simply because of slow follow-up. You work hard to get traffic — don't let it go to waste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className={`space-y-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                <XCircle size={18} className="text-rose-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Without Automation</h3>
            </div>
            {problems.map((p, i) => (
              <div key={i} className="bg-rose-500/5 border border-rose-500/15 rounded-xl p-4 flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-slate-300 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className={`space-y-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '350ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-xl">With AutoLeads.ai</h3>
            </div>
            {solutions.map((s, i) => (
              <div key={i} className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4 flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <p className="text-slate-300 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-14 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 rounded-2xl p-6 md:p-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <p className="text-white text-xl md:text-2xl font-bold mb-2">The average business that implements our system sees results within <span className="text-sky-400">14 days.</span></p>
          <p className="text-slate-400 mb-6">Stop leaving money on the table. Every day you wait is another batch of leads going cold.</p>
          <a href="#book-call" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 transition-all duration-200 text-base">
            Fix This For My Business
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
