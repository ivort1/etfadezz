import database from '../data/database.json';

export default function Services() {
    const services = database.services;

    return(
      <section id="Services" className="min-h-full bg-zinc-950 px-5 py-12">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-amber-500/80 text-xs tracking-[0.3em] uppercase mb-2">What We Offer</p>
          <h2 className="text-2xl text-zinc-100" style={{ fontFamily: 'Merriweather Variable, serif' }}>Services</h2>
        </div>

        {/* Service Cards */}
        <div className="space-y-4">
          {
            services.map(({ name, description, price, duration, popular, link }, i) => (
              <div key={i} className={`flex flex-row justify-between items-center relative rounded-xl p-4 border transition-all ${popular ? 'bg-linear-to-br from-amber-500/10 to-transparent border-amber-500/30' : 'bg-zinc-900/50 border-zinc-800'}`}>
                {popular && (
                  <span className="absolute -top-2 right-4 bg-amber-500 text-black text-xs px-2 py-0.5 rounded-full font-medium">
                    Popular
                  </span>
                )}

                <div className="flex flex-col w-3/4">
                  <h3 className="text-zinc-100 font-medium mb-4">{name}</h3>

                  <p className="text-zinc-500 text-xs mb-2">{description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center gap-4">
                      <span className="text-amber-400 font-semibold">${price}</span>

                      <span className="text-zinc-600 text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <a href={link} className="absolute right-4 text-amber-500 text-xs font-medium tracking-wide">BOOK →</a>
              </div>
            ))
          }
        </div>
      </section>
    )
};