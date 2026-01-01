import { useState, useEffect, useCallback } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({ sectionIds, offset = 100 }: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    }
    
    setActiveSection(sectionIds[0] || '');
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
