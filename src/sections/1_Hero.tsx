import database from '../data/database.json';

export default function Hero() {
  const information = database.information;
  
    return(
      <div className="relative bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Subtle gold radial glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-4">
          <img src="logo.svg" alt="Logo for ET Fadezz, a private barber in Fontana, CA" className="w-28" />

          <a href="https://cal.com/etfadezz" className="border border-amber-500/60 text-amber-400 text-xs px-12 py-2 rounded tracking-wider">BOOK</a>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-5 p-16">
          {/* Decorative line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-amber-500/60"></div>
            <p className="text-amber-500/80 text-xs tracking-[0.25em] uppercase">Est. 2023</p>
          </div>

          <h1 className="text-4xl leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="text-zinc-100">Premium Barber</span><br/>
            <span className="text-amber-300 italic">Fontana, CA</span>
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
            Expert haircuts, fades & beard grooming serving Los Angeles, Orange & San Bernardino counties. Book your appointment today.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a href="https://cal.com/etfadezz" className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-black font-medium py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              Book Appointment
            </a>

            <a className="w-full border border-zinc-700 text-zinc-300 font-light py-4 rounded-lg flex items-center justify-center gap-3" href={`tel:${information.phone}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>

              Call Studio
            </a>
          </div>
        </div>
      </div>
    )
};