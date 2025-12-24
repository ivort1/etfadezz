import database from '../data/database.json';

export default function Services() {
  const services = database.services;
  
  return (
    <section id="Services" className="min-h-full px-5 py-12 bg-slate-50">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-slate-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2">What We Offer</h2>
        <h3 className="text-2xl text-slate-900 mb-4" style={{ fontFamily: 'Merriweather Variable, serif' }}>Services</h3>
        <p className="text-slate-400 text-sm text-balance leading-relaxed mb-8 max-w-xs">
          Every service includes a complimentary drink and your choice of a tonic or hand massage.
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-4">
        {services.map(({ name, src, price, duration, popular, link }, i) => (
          <div key={i} className={`relative rounded-xl px-4 py-8 border transition-all ${popular ? 'bg-linear-to-br from-blue-50 to-transparent border-blue-200' : 'bg-white border-slate-200'}`}>
            {popular && (
              <span className="absolute -top-2 right-4 bg-blue-700 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                Popular
              </span>
            )}
            
            <div className="flex flex-row justify-between items-center">
              <img src={`/services/${src}`} alt={`${name} icon`} className="w-12 h-12 mr-4 shrink-0" />

              <div className="flex flex-col flex-1 pr-4">
                <h3 className="text-slate-800 font-medium mb-2">{name}</h3>
                {/* <p className="text-slate-500 text-xs mb-3">{description}</p> */}
                <div className="flex items-center gap-4">
                  <span className="text-blue-700 font-semibold">${price}</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {duration}
                  </span>
                </div>
              </div>
              
              <a href={link} className="text-blue-700 hover:text-blue-600 text-xs font-semibold tracking-wide transition-colors" rel="noreferrer">
                BOOK →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}