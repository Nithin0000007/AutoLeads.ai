import { useEffect, useState } from 'react';
import { X, Calendar, Clock, Shield, Zap } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

const CAL_USERNAME = import.meta.env.VITE_CAL_USERNAME;
const CAL_EVENT = import.meta.env.VITE_CAL_EVENT;


export default function BookingModal({ onClose }: BookingModalProps) {
  const [visible, setVisible] = useState(false);

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      <div
        className={`relative bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transition-all duration-300 ${
          visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-6'
        }`}
      >
        <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border-b border-white/5 px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <div>
              <h2 className="text-white font-extrabold text-lg">Book Your Free AI Demo</h2>
              <p className="text-slate-400 text-sm">30 minutes</p>
            </div>
          </div>
          <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors mt-1 flex-shrink-0 p-1">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4 bg-white/[0.02] border-b border-white/5">
          {[
            { icon: Calendar, label: '30 min call' },
            { icon: Clock, label: 'Takes 30 seconds' },
            { icon: Shield, label: 'No obligation' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2 text-slate-400">
                <Icon size={14} className="text-sky-400" />
                <span className="text-xs">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0d1a2d]" style={{ height: '520px' }}>
          <iframe
            src={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT}?embed=true&hideEventTypeDetails=1&hideLandingPageDetails=1`}
            className="w-full h-full border-0"
            title="Book your free AI demo"
          />
        </div>

        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 text-center">
          <p className="text-slate-500 text-xs">
            <span className="text-amber-400 font-medium">Limited spots:</span> We only onboard 5 new businesses per month. No pressure — just actionable insights.
          </p>
        </div>
      </div>
    </div>
  );
}
