import { Calendar, Clock, Shield, Zap } from 'lucide-react';
import { useInView } from '../../../hooks/useIntersectionObserver';

const CAL_USERNAME = import.meta.env.VITE_CAL_USERNAME;
const CAL_EVENT = import.meta.env.VITE_CAL_EVENT;

export default function BookingSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="booking" className="py-24 bg-[#070e1c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
            <Zap size={13} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium">Schedule Your Demo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Book Your Free AI Automation Demo
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose a time that works for you. We'll show you exactly how this can increase your leads.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-3 mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
          {[
            { icon: Calendar, label: '30-minute call', desc: 'No filler, just value' },
            { icon: Clock, label: 'Book in 30 seconds', desc: 'Instant confirmation' },
            { icon: Shield, label: 'No obligation', desc: 'Just actionable insights' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <div className="bg-gradient-to-r from-sky-500/5 to-cyan-500/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Calendar size={14} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Free AI Lead Generation Demo</div>
                <div className="text-slate-500 text-xs">Select a time below</div>
              </div>
            </div>
            <div className="text-amber-400 text-xs font-medium bg-amber-500/10 px-3 py-1 rounded-full">
              Only 2 spots left
            </div>
          </div>

          <div className="bg-[#0d1a2d]" style={{ height: '580px' }}>
            <iframe
              src={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT}?embed=true&hideEventTypeDetails=1&hideLandingPageDetails=1`}
              className="w-full h-full border-0"
              title="Book your free AI demo"
              loading="lazy"
            />
          </div>
        </div>

        <div className={`mt-6 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '450ms' }}>
          <p className="text-slate-500 text-sm">
            <span className="text-amber-400 font-medium">Limited availability:</span> We only onboard 5 new businesses per month. No pressure — just actionable insights you can use immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
