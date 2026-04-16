import { useEffect, useRef } from "react";

/**
 * Attaches IntersectionObserver to all children of `containerRef`
 * that have the class `animate-on-scroll`, `animate-slide-left`,
 * `animate-slide-right`, or `animate-scale-in`.
 * Adds `.is-visible` when they enter the viewport.
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const targets = containerRef.current?.querySelectorAll<HTMLElement>(
            ".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in"
        );
        if (!targets?.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [containerRef]);
}
