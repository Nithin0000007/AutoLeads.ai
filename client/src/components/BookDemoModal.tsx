import { useEffect, useState } from 'react';
import { X, Calendar, Clock, Shield } from 'lucide-react';
import LeadForm from './LeadForm';

interface BookDemoModalProps {
  onClose: () => void;
}

export default function BookDemoModal({ onClose }: BookDemoModalProps) {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 30);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = '';
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={handleClose} />

      <div
        className={`relative bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh] transition-all duration-300 ${
          visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-6'
        }`}
      >
        <div className="sticky top-0 bg-[#0a1628] border-b border-white/5 px-6 py-5 flex items-start justify-between z-10">
          <div>
            <h2 className="text-white font-extrabold text-xl">Book Your Free Strategy Call</h2>
            <p className="text-slate-400 text-sm mt-0.5">30 minutes · No pressure · Actionable insights</p>
          </div>
          <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors mt-1 flex-shrink-0">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Calendar, label: '30 min call' },
              { icon: Clock, label: 'In < 2 hours' },
              { icon: Shield, label: 'No obligation' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2">
                  <Icon size={15} className="text-sky-400" />
                  <span className="text-slate-400 text-xs text-center">{item.label}</span>
                </div>
              );
            })}
          </div>

          {!submitted ? (
            <LeadForm source="book-demo-modal" onSuccess={() => setSubmitted(true)} />
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={26} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">You're booked!</h3>
              <p className="text-slate-400 text-sm">We'll send a calendar invite to your email within the next 2 hours.</p>
              <button onClick={handleClose} className="mt-6 px-6 py-2.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm hover:bg-white/10 transition-colors">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
