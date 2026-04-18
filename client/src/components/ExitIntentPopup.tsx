import { useEffect, useState } from 'react';
import { X, Zap, Calendar, ArrowRight } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
  onBookDemo: () => void;
}

// const CAL_USERNAME = import.meta.env.VITE_CAL_USERNAME;
// const CAL_EVENT = import.meta.env.VITE_CAL_EVENT;

export default function ExitIntentPopup({ onClose, onBookDemo }: ExitIntentPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBookDemo = () => {
    handleClose();
    setTimeout(onBookDemo, 350);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      <div
        className={`relative bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transition-all duration-300 ${
          visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border-b border-white/5 px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Wait — Before You Go</div>
              <div className="text-sky-400 text-sm">Get a Free Automation Audit</div>
            </div>
          </div>
          <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-white font-extrabold text-xl mb-2">
            Want a Free Automation Audit for Your Business?
          </h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            In just 30 minutes, we'll analyze your current lead system and show you exactly where you're losing money — and how to fix it. No cost, no obligation.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Calendar, label: '30 min call' },
              { icon: Zap, label: 'Instant insights' },
              { icon: ArrowRight, label: 'No pressure' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2">
                  <Icon size={14} className="text-sky-400" />
                  <span className="text-slate-400 text-xs text-center">{item.label}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleBookDemo}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.02] transition-all duration-200"
          >
            <Calendar size={18} />
            Book My Free Audit Now
            <ArrowRight size={16} />
          </button>

          <p className="text-center text-slate-500 text-xs mt-3">Takes less than 30 seconds to book</p>
        </div>

        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 text-center">
          <button onClick={handleClose} className="text-slate-500 text-xs hover:text-slate-400 transition-colors">
            No thanks, I don't want more leads
          </button>
        </div>
      </div>
    </div>
  );
}
