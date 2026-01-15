import { useState, useEffect, useCallback } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({
  sectionIds,
  offset = 100,
}: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  );

  const handleScroll = useCallback(() => {
    // 1. Handle Bottom of Page Edge Case
    // If user has scrolled to the bottom, activate the last section
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    ) {
      const lastSectionId = sectionIds[sectionIds.length - 1];
      if (lastSectionId) {
        setActiveSection(lastSectionId);
        return;
      }
    }

    // 2. Normal Scroll Spy Logic
    const scrollPosition = window.scrollY + offset;

    // Iterate backwards to find the first section that is "above" the scroll line
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        // Use getBoundingClientRect for more accurate viewport checking relative to offset
        const { top, height } = section.getBoundingClientRect();
        // Calculate the absolute top position relative to document
        const elementTop = window.scrollY + top;

        if (scrollPosition >= elementTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    }

    // 3. Handle Top of Page / Default
    // If no section matches (we are above the first section's trigger point),
    // default to the first section (usually 'home').
    setActiveSection(sectionIds[0] || "");
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
