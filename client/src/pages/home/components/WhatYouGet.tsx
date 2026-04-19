import { Globe, Bot, MessageCircle, LayoutDashboard, ArrowRight, Check } from 'lucide-react';
import { useInView } from '../../../hooks/useIntersectionObserver';

const deliverables = [
  {
    icon: Globe,
    title: 'High-Converting Landing Page',
    description: 'A custom-built page designed to turn traffic into leads, optimized for your specific industry and offer.',
    perks: ['SEO optimized', 'Mobile-first design', 'A/B tested copy', 'Fast load times'],
    time: 'Saves 10+ hrs of design work',
  },
  {
    icon: Bot,
    title: 'AI Lead Capture Chatbot',
    description: 'Smart, conversational AI that qualifies leads, answers questions, and books appointments — even while you sleep.',
    perks: ['24/7 availability', 'Custom qualification flow', 'Branded to your business', 'Multi-language support'],
    time: 'Replaces a full-time receptionist',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation System',
    description: 'Instant follow-up sequences delivered via WhatsApp — the highest open-rate channel on the planet.',
    perks: ['< 60 second response time', 'Personalized messages', 'Automated follow-up sequences', 'Opt-out compliant'],
    time: 'Up to 98% open rate',
  },
  {
    icon: LayoutDashboard,
    title: 'Lead Tracking Dashboard',
    description: 'A real-time control panel showing every lead, their status, conversation history, and conversion data.',
    perks: ['Real-time updates', 'Lead scoring', 'Pipeline view', 'Export to CRM'],
    time: 'Full visibility at all times',
  },
];

export default function WhatYouGet() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#070e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sky-400 text-sm font-medium">What You Get</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Never Miss a Lead
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't just build tools — we build a complete lead conversion machine tailored to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 hover:bg-sky-500/[0.03] transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120 + 200}ms`, transitionDuration: '600ms' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{d.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {d.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2">
                      <Check size={13} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-400 text-xs">{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <span className="text-sky-400 text-xs font-semibold bg-sky-500/10 px-3 py-1 rounded-full">{d.time}</span>
                  <ArrowRight size={16} className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-slate-400 text-sm">All of this is custom-built for your business. No templates. No cookie-cutter solutions.</p>
        </div>
      </div>
    </section>
  );
}
