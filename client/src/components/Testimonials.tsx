import { Star, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    name: 'Dr. Sarah Mensah',
    role: 'Clinic Owner',
    company: 'MedCore Family Clinic',
    avatar: 'SM',
    color: 'from-rose-400 to-pink-500',
    quote: 'Before AutoLeads, we were losing 60% of incoming inquiries because nobody could respond fast enough. Now our AI handles it instantly. We went from 12 new patients a month to over 31.',
    metric: '+158%',
    metricLabel: 'new patient bookings',
  },
  {
    name: 'Marcus Reid',
    role: 'Real Estate Agent',
    company: 'Prime Realty Group',
    avatar: 'MR',
    color: 'from-sky-400 to-blue-500',
    quote: "In real estate, speed is everything. If you don't respond in 5 minutes, you've lost the lead. The WhatsApp automation means every inquiry gets an instant, personalized response. My conversion rate jumped from 8% to 23%.",
    metric: '+187%',
    metricLabel: 'lead-to-meeting conversion',
  },
  {
    name: 'Priya Sharma',
    role: 'Business Coach',
    company: 'ScaleUp Coaching',
    avatar: 'PS',
    color: 'from-emerald-400 to-teal-500',
    quote: "I was manually following up with every lead which was eating 3 hours a day. Now it's 100% automated. My calendar is fully booked two weeks out and I didn't change anything except adding this system.",
    metric: '3hrs/day',
    metricLabel: 'saved on follow-ups',
  },
  {
    name: 'James Okonkwo',
    role: 'Recruiting Director',
    company: 'TalentBridge HR',
    avatar: 'JO',
    color: 'from-amber-400 to-orange-500',
    quote: 'We process hundreds of candidate inquiries weekly. The AI chatbot pre-qualifies them all and only sends us the best matches on WhatsApp. Our placement rate improved by 40% in just 6 weeks.',
    metric: '+40%',
    metricLabel: 'placement rate in 6 weeks',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="results" className="py-24 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Real Results From Real Businesses</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Businesses Just Like Yours Are{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Already Winning
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            These aren't vanity metrics. These are real business owners who stopped losing leads and started converting automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 hover:bg-white/[0.05] transition-all duration-300 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms`, transitionDuration: '600ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">"{t.quote}"</p>

              <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{t.metric}</div>
                <div className="text-sky-300/70 text-xs font-medium">{t.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
