import Hours from '@/components/custom/Hours';

import database from '../../data/database.json';

export default function Footer() {
  const business_hours = database.business_hours;

  return (
    <div className="min-h-full bg-slate-900 flex flex-col">
      {/* Main Footer */}
      <div className="flex-1 px-5 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="logo-white.svg" alt="Logo for ET Fadezz, a private barber in Fontana, CA" className="w-20 m-auto" />
        </div>

        {/* Quick Links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { title: "Services", link: "#Services" },
            { title: "Our Work", link: "#Our Work" },
            { title: "FAQs", link: "#FAQs" },
            { title: "Book Now", link: "https://cal.com/etfadezz" },
          ].map(({ title, link }, i) => (
            <a 
              href={link} 
              key={i} 
              className="text-slate-400 text-sm hover:text-white transition-colors"
            >
              {title}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 justify-center text-slate-400">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">Fontana, CA</span>
          </div>

          <div className="flex items-center gap-3 justify-center text-slate-400">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">(626) 216-4488</span>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-slate-800/50 rounded-xl p-12 border border-slate-700">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase text-center mb-6">Studio Hours</p>
          <div className="space-y-2 text-sm">
            {
              business_hours.map(({ day, open, close, closed}, index) => (
                <Hours day={day} open={open} close={close} closed={closed} key={index}/>
              ))
            }

            <p className="text-xs italic text-slate-500 mt-4">
              * Hours and availability are subject to change on a weekly basis.
            </p>
          </div>
        </div>

        {/* Social Icons (uncomment when ready) */}
        {/* 
        <div className="flex justify-center gap-4 mt-8">
          {[
            // Instagram path
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />,
            // Twitter path
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />,
            // TikTok path
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45..." />
          ].map((path, i) => (
            <a 
              key={i} 
              className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{path}</svg>
            </a>
          ))}
        </div>
        */}
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 px-5 py-4">
        <p className="text-slate-500 text-xs text-center">
          ©2023 - {new Date().getFullYear()} ET Fadezz. All rights reserved.
        </p>
      </div>
    </div>
  );
}