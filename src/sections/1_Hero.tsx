import database from '../data/database.json';

export default function Hero() {
  const information = database.information;
  
  return (
    <div className="pb-16 relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-4">
        <img src="logo-white.svg" alt="Logo for ET Fadezz" className="w-28" />
        <a href="https://cal.com/etfadezz" className="border border-blue-500 text-blue-500 text-xs px-12 py-2 rounded tracking-wider hover:border-blue-400 hover:text-blue-400 transition-colors">
          BOOK
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-5 p-16">
        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-slate-400"></div>
          <p className="text-slate-400 text-xs tracking-[0.25em] uppercase">Est. 2023</p>
        </div>
        
        <h1 className="text-4xl leading-tight mb-4" style={{ fontFamily: 'Merriweather Variable, serif' }}>
          <span className="text-white">Premium Barber</span><br/>
          <span className="text-slate-300 italic">Fontana, CA</span>
        </h1>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
          Expert haircuts, fades & beard grooming serving Los Angeles, Orange & San Bernardino counties.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <a href="https://cal.com/etfadezz" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </a>
          <a href={`tel:${information.phone}`} className="w-full border border-slate-500 text-slate-300 hover:text-white hover:border-slate-400 font-light py-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Studio
          </a>
        </div>
      </div>
    </div>
  );
}