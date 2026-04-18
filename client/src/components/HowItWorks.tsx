import { Globe, MessageSquare, Smartphone, BarChart3, ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useIntersectionObserver';

const steps = [
  {
    step: '01',
    icon: Globe,
    title: 'Visitor Lands on Your Site',
    description: 'A potential client finds you through Google, social media, or a referral. Your AI chatbot greets them instantly — 24/7, no delays.',
    detail: 'Customized to match your brand voice',
    color: 'sky',
  },
  {
    step: '02',
    icon: MessageSquare,
    title: 'AI Chatbot Captures the Lead',
    description: 'The chatbot asks smart qualifying questions, collects name, phone, and business need — turning a visitor into a qualified lead in under 2 minutes.',
    detail: 'Avg. 73% lead capture rate',
    color: 'cyan',
  },
  {
    step: '03',
    icon: Smartphone,
    title: 'Instant WhatsApp Follow-Up',
    description: 'Within 60 seconds, the lead receives a personalized WhatsApp message. You also get notified immediately so you can jump in when they\'re hot.',
    detail: 'WhatsApp has 98% open rate',
    color: 'emerald',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Lead Tracked in Your Dashboard',
    description: 'Every lead is stored, tagged, and visible in your real-time dashboard. Full conversation history, follow-up status, and conversion tracking all in one place.',
    detail: 'Never lose a lead again',
    color: 'amber',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-400', badge: 'bg-sky-500/20 text-sky-300' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
};

export default function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="py-24 bg-[#050d1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sky-400 text-sm font-medium">The System</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            How It Works in{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">4 Simple Steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the moment a visitor lands on your site to the moment they're in your calendar — fully automated.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-sky-500/40 via-cyan-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              const Icon = step.icon;
              const isRight = i % 2 === 1;
              return (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-[#050d1a] border-2 border-white/10 rounded-full items-center justify-center">
                    <span className="text-xs font-bold text-slate-400">{step.step}</span>
                  </div>

                  <div className={`w-full md:w-[calc(50%-40px)] ${isRight ? 'md:ml-auto' : ''}`}>
                    <div className={`${c.bg} border ${c.border} rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-200`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon size={18} className={c.text} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="md:hidden text-xs font-bold text-slate-500 border border-white/10 rounded-full px-2 py-0.5">{step.step}</span>
                            <h3 className="text-white font-bold text-base md:text-lg">{step.title}</h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mb-3">{step.description}</p>
                          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>{step.detail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-10 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-sm">The result? More leads converted with zero extra effort from you</span>
          </div>
        </div>
      </div>
    </section>
  );
}
