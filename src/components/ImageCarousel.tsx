import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: { src: string; alt: string; caption?: string }[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

/**
 * A polished, auto-playing image carousel with navigation dots,
 * smooth transitions, and hover-pause behavior.
 */
const ImageCarousel = ({
    images,
    autoPlay = true,
    interval = 4000,
    className = "",
}: ImageCarouselProps) => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const touchStartX = useRef(0);

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrent((index + images.length) % images.length);
            setTimeout(() => setIsTransitioning(false), 600);
        },
        [images.length, isTransitioning]
    );

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [isAutoPlaying, next, interval]);

    // Touch / swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        }
    };

    if (images.length === 0) return null;

    return (
        <div
            className={`relative overflow-hidden rounded-2xl shadow-xl group ${className}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(autoPlay)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            <div className="relative aspect-[16/9] bg-dental-cream">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                            i === current
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                        {/* Gradient overlay at bottom for caption */}
                        {img.caption && (
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                <p className="text-white font-medium text-sm md:text-base">
                                    {img.caption}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-110 z-10"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="w-5 h-5 text-dental-blue" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-110 z-10"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="w-5 h-5 text-dental-blue" />
                    </button>
                </>
            )}

            {/* Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                i === current
                                    ? "bg-white w-7"
                                    : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Aller à l'image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
