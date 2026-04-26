import { ReactNode } from "react";
import heroImage from "@/assets/hero-dental.jpg";

interface PageHeroProps {
    label?: string;
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

/**
 * Shared hero for all inner pages.
 * Uses a background image with gradient overlay + hover effects for consistency with homepage.
 */
const PageHero = ({ label, title, subtitle, children }: PageHeroProps) => {
    return (
        <section className="group relative bg-gradient-to-br from-dental-blue-dark via-dental-blue to-dental-blue-light text-white -mt-32 pt-48 pb-20 overflow-hidden">
            {/* Background Image with overlay — like the homepage hero */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-dark/90 via-dental-blue/80 to-dental-blue-light/70 transition-all duration-500 group-hover:from-dental-blue-dark/85 group-hover:via-dental-blue/75 group-hover:to-dental-blue-light/65" />
            </div>

            {/* Decorative elements */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-20 w-72 h-72 bg-dental-orange/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-gentle-float" />
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-dental-orange/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-[15%] w-2 h-2 bg-white/15 rounded-full animate-gentle-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[20%] right-[10%] w-5 h-5 bg-white/10 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Badge */}
                <div className="flex justify-center mb-5">
                    <span className="inline-block h-0.5 w-10 rounded-full bg-dental-orange mr-3 self-center" />
                    {label && (
                        <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                            {label}
                        </span>
                    )}
                    <span className="inline-block h-0.5 w-10 rounded-full bg-dental-orange ml-3 self-center" />
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-5 tracking-tight animate-fade-in">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto text-center leading-relaxed animate-fade-in" style={{ animationDelay: "0.15s" }}>
                        {subtitle}
                    </p>
                )}

                {/* Optional CTA slot */}
                {children && (
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        {children}
                    </div>
                )}
            </div>

            {/* Wave divider at bottom */}
            <div className="wave-divider">
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(45 30% 96%)" />
                </svg>
            </div>
        </section>
    );
};

export default PageHero;
