'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });

    const refreshAOS = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    window.addEventListener('load', refreshAOS);

    return () => {
      window.removeEventListener('load', refreshAOS);
    };
  }, []);

  return <>{children}</>;
}
