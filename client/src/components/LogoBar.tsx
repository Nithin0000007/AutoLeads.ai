const logos = [
  { name: 'MedCore Clinics', abbr: 'MC' },
  { name: 'Prime Realty', abbr: 'PR' },
  { name: 'CoachFlow', abbr: 'CF' },
  { name: 'TalentBridge', abbr: 'TB' },
  { name: 'HealthFirst', abbr: 'HF' },
  { name: 'ScaleUp Agency', abbr: 'SA' },
];

export default function LogoBar() {
  return (
    <section className="bg-[#070e1c] border-y border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">
          Trusted by growing businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2.5 group opacity-50 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/20 rounded-lg flex items-center justify-center">
                <span className="text-sky-400 text-xs font-bold">{logo.abbr}</span>
              </div>
              <span className="text-slate-300 font-semibold text-sm hidden sm:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
