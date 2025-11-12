import React, { useEffect, useState, useRef } from "react";

interface UseActiveSectionOptions {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number;
}

export function useActiveSection({
  sectionIds,
  rootMargin = "-50% 0px -50% 0px", // Detect when section is roughly in the middle of the viewport
  threshold = 0,
}: UseActiveSectionOptions) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    observerRef.current = observer;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}