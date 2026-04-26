import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000, startOnView = true) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!startOnView) {
            animate();
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration, startOnView]);

    function animate() {
        const start = performance.now();
        const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    return { count, ref };
}
