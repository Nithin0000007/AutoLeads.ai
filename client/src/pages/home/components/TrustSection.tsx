import { Shield, Zap, Globe, Lock, Award, HeartHandshake } from 'lucide-react';
import { useInView } from '../../../hooks/useIntersectionObserver';

const trustBadges = [
  { icon: Shield, label: 'GDPR Compliant', desc: 'Enterprise-grade data security' },
  { icon: Zap, label: 'Built on Modern AI', desc: 'GPT-4 & WhatsApp Business API' },
  { icon: Globe, label: 'Works Globally', desc: 'Any country, any language' },
  { icon: Lock, label: 'End-to-End Encrypted', desc: 'Your data stays private' },
  { icon: Award, label: '30-Day Guarantee', desc: 'See results or we fix it free' },
  { icon: HeartHandshake, label: 'Dedicated Support', desc: 'Real humans, not bots' },
];

export default function TrustSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#070e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sky-400 text-sm font-medium">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Built by Experts Who Understand Your Business Problems — Not Just Technology
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              We're a specialized AI automation team with backgrounds in sales, marketing, and business operations. We don't just build software — we build systems that solve real revenue problems.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Every system we deploy is tested, refined, and proven. We've worked across healthcare, real estate, coaching, and recruiting — and we understand the nuances of each.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/25">
                AK
              </div>
              <div>
                <div className="text-white font-bold">Alex Kumar</div>
                <div className="text-slate-400 text-sm">Founder & Lead Architect, AutoLeads.ai</div>
                <div className="text-sky-400 text-xs mt-0.5">8+ years in sales automation & AI systems</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className={`bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-sky-500/30 hover:bg-white/[0.05] transition-all duration-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${i * 80 + 300}ms`, transitionDuration: '500ms' }}
                  >
                    <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center mb-3">
                      <Icon size={16} className="text-sky-400" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{badge.label}</div>
                    <div className="text-slate-500 text-xs">{badge.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
