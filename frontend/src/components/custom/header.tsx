import type { ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-medium text-xl">
      {children}
    </h1>
  );
}