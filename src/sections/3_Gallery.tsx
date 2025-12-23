import { useState, useEffect } from 'react';

interface ImageModule {
  default: string;
}

import database from '../data/database.json';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageModules = import.meta.glob<ImageModule>(
      '/src/assets/gallery/*.webp',
      { eager: true }
    );

    const imageUrls = Object.entries(imageModules)
      .map(([path, module]) => ({
        url: module.default,
        num: parseInt(path.match(/(\d+)\.webp$/)?.[1] || '0')
      }))
      .sort((a, b) => a.num - b.num)
      .map(item => item.url);

    setImages(imageUrls);
  }, []);

  const social_media = database.social_media;

  return(
    <section id="Our Work" className="min-h-full bg-zinc-950 py-12">
      {/* Section Header */}
      <div className="px-5 mb-6">
        <p className="text-amber-500/80 text-xs tracking-[0.3em] uppercase mb-2">Photo Gallery</p>
        <h2 className="text-2xl text-zinc-100" style={{ fontFamily: 'Merriweather Variable, serif' }}>Our Work</h2>
      </div>

      {/* Photo Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 px-4">
        {images.map((src, index) => (
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            key={index}
            className="inline-block w-full h-auto rounded shadow-md hover:shadow-xl transition-shadow duration-300 mb-2"
            loading="lazy"
          />
        ))}
      </div>

      {/* Instagram CTA */}
      <div className="px-5 mt-6">
        <a href={social_media.instagram_url} target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>

          Follow @etfadezz
        </a>
      </div>
    </section>
  )
};