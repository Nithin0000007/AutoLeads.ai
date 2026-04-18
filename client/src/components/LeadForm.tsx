import { useState } from 'react';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/supabase';

const businessTypes = [
  'Clinic / Healthcare',
  'Real Estate',
  'Coaching / Consulting',
  'Recruiting / HR',
  'E-commerce',
  'Restaurant / Food',
  'Fitness / Wellness',
  'Other',
];

interface LeadFormProps {
  source: string;
  onSuccess: () => void;
  compact?: boolean;
}

export default function LeadForm({ source, onSuccess, compact = false }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business_type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    const result = await submitLead({ ...form, source });
    if (result.success) {
      setStatus('success');
      onSuccess();
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-white font-bold text-xl mb-2">You're on the list!</h3>
        <p className="text-slate-400 text-sm">We'll reach out within 2 hours to schedule your free strategy call.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className={compact ? '' : 'grid sm:grid-cols-2 gap-4'}>
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Your full name *"
            required
            className={inputClass}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Email address *"
            required
            className={inputClass}
          />
        </div>
      </div>

      {!compact && (
        <>
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="WhatsApp / Phone number"
            className={inputClass}
          />
          <select
            name="business_type"
            value={form.business_type}
            onChange={handle}
            className={`${inputClass} ${!form.business_type ? 'text-slate-500' : 'text-white'}`}
          >
            <option value="" disabled>Type of business</option>
            {businessTypes.map((t) => <option key={t} value={t} className="bg-[#0a1628] text-white">{t}</option>)}
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="What's your biggest challenge with leads right now? (optional)"
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </>
      )}

      {status === 'error' && (
        <p className="text-rose-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Book My Free Strategy Call
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-center text-slate-500 text-xs">No spam. No pressure. Just a 30-min conversation.</p>
    </form>
  );
}
