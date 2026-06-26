import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useInView } from '../../../hooks/useIntersectionObserver';

const faqs = [
  {
    q: 'Will this actually work for my type of business?',
    a: "Yes. Our system is industry-agnostic and has been successfully deployed for clinics, real estate agencies, coaching practices, recruiters, restaurants, and e-commerce businesses. During your free strategy call, we'll specifically map out how it applies to your business model, your customers, and your sales process.",
  },
  {
    q: 'Do I need any technical knowledge to use this?',
    a: "None at all. We handle 100% of the setup, configuration, and integration. You log in to a simple dashboard that shows your leads and their status. If you can use a smartphone, you can use our system. We also provide onboarding and ongoing support.",
  },
  {
    q: 'How fast can I expect to see results?',
    a: "Most clients see measurable improvements within the first 2 weeks of going live. The system is designed to start capturing and following up on leads from day one. Typically, within 30 days, you'll have enough data to see the full impact on your conversion rates.",
  },
  {
    q: 'Is the automation customized for my specific business?',
    a: "Absolutely. We don't use templates. Every chatbot conversation, WhatsApp message, and follow-up sequence is custom-written for your business, your tone, and your ideal customer. We study your industry and your offer before writing a single line of automation.",
  },
  {
    q: 'What happens to leads that don\'t convert immediately?',
    a: "They stay in a nurture sequence. Our system continues to send strategic, non-spammy follow-up messages over days and weeks. Many of our clients report that 20–30% of their revenue comes from leads who didn't convert on first contact but were nurtured over time.",
  },
  {
    q: 'How is this different from just hiring someone to follow up?',
    a: "A person can handle 10–20 leads per day. Our system handles hundreds simultaneously, responds in under 60 seconds, never has a bad day, never forgets to follow up, and works 24/7. It also costs a fraction of a full-time hire and scales infinitely as your business grows.",
  },
  {
    q: 'Is my data and my customers\' data secure?',
    a: "Yes. We use enterprise-grade security infrastructure. All data is encrypted in transit and at rest. We are fully GDPR compliant. Your leads' information never leaves our secure systems and is never shared with third parties.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="py-24 bg-[#050d1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle size={13} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Questions & Answers
          </h2>
          <p className="text-slate-400 text-lg">Everything you need to know before booking your call.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white/[0.03] border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${open === i ? 'border-sky-500/30 bg-sky-500/[0.03]' : 'border-white/10 hover:border-white/20'} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 70 + 200}ms`, transitionDuration: '500ms' }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5 gap-4">
                <h3 className="text-white font-semibold text-sm md:text-base flex-1">{faq.q}</h3>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180 text-sky-400' : ''}`}
                />
              </div>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
