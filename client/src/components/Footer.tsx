import { Zap, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040b16] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap size={14} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-white text-lg">AutoLeads<span className="text-sky-400">.ai</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI-powered lead capture and WhatsApp automation for businesses that want to grow without hiring more staff.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Results & Case Studies', href: '#results' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Book Free Demo', href: '#book-call' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="block text-slate-500 hover:text-sky-400 text-sm transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@autoleads.ai" className="flex items-center gap-2 text-slate-500 hover:text-sky-400 text-sm transition-colors">
                <Mail size={14} />
                hello@autoleads.ai
              </a>
              <a href="tel:+919705142006" className="flex items-center gap-2 text-slate-500 hover:text-sky-400 text-sm transition-colors">
                <Phone size={14} />
                +91 9705142006
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-400 transition-colors">GDPR</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} AutoLeads.ai. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built with modern AI · Secure · Scalable · Reliable</p>
        </div>
      </div>
    </footer>
  );
}
