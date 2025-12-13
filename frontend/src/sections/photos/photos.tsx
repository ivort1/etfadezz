// src/components/PhotoGridAsync.tsx
import Header from '@/components/custom/header';
import Section from '@/components/custom/section';
import { useEffect, useState } from 'react';

export default function Photos() {
  const [photoUrls, setPhotoUrls] = useState<string[]>([])

  useEffect(() => {
    async function loadImages() {
      // 1. Dynamically find all matching imports
      const modules = import.meta.glob('/src/assets/photos/*.webp')

      // 2. modules is a Record<string, () => Promise<ModuleObject>>
      const imports = await Promise.all(
        Object.values(modules).map(loader => loader())
      )

      // 3. Pull out the default URLs
      setPhotoUrls(imports.map(mod => (mod as any).default))
    }

    loadImages()
  }, [])

  return (
    <Section>
        <Header>Photos</Header>

        <div className="columns-2 gap-1 ">
        {photoUrls.map((src, idx) => (
            <img 
            key={idx}
            src={src} 
            alt={`Photo ${idx + 1}`} 
            className="w-full h-auto rounded-lg mb-1 break-inside-avoid"
            />
        ))}
        </div>
    </Section>
  )
}
