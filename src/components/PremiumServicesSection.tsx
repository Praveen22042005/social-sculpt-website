'use client'

import React, { useEffect, useState } from 'react'

const PremiumServicesSection = () => {

    const services = [
        {
            label: "Social Media",
            bgClass: "lg:bg-[url('/services-home/social-media.jpg')]",
        },
        {
            label: "SEO",
            bgClass: "lg:bg-[url('/services-home/seo.jpg')]",
        },
        {
            label: "Performance Marketing",
            bgClass: "lg:bg-[url('/services-home/performance-marketing.jpg')]",
        },
        {
            label: "Web Development & UI/UX",
            bgClass: "lg:bg-[url('/services-home/banner-two.avif')]",
        },
        {
            label: "Production",
            bgClass: "lg:bg-[url('/services-home/banner-try.avif')]",
        },
        {
            label: "Branding & Creative",
            bgClass: "lg:bg-[url('/services-home/banner-two.avif')]",
        },
        {
            label: "Influencer Marketing",
            bgClass: "lg:bg-[url('/services-home/banner-try.avif')]",
        },
    ];

    const words = ["Authentic", "Scalable", "Impactful", "Creative"];

    const [wordIndex, setWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [activeService, setActiveService] = useState<number | null>(null);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(hover: none), (pointer: coarse)");
        const update = () => setIsTouch(mq.matches);
        update();
        if (mq.addEventListener) {
            mq.addEventListener("change", update);
            return () => mq.removeEventListener("change", update);
        }
        mq.addListener(update);
        return () => mq.removeListener(update);
    }, []);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        const intervalId = setInterval(() => {
            setIsVisible(false);
            timeoutId = setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % words.length);
                setIsVisible(true);
            }, 200);
        }, 2000);

        return () => {
            clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [words.length]);

    const showBackground = !isTouch && activeService !== null;
    const activeBackgroundClass = showBackground
        ? services[activeService].bgClass
        : "";

    return (
        <div>
            <section
                className={`relative w-full overflow-hidden bg-white px-20 py-30 bg-cover bg-center transition-all duration-500 ${activeBackgroundClass}`}
            >
                <div
                    className={`absolute inset-0 transition-opacity duration-500  ${showBackground ? "bg-white/70 opacity-100" : "opacity-0"
                        }`}
                />
                <div className="relative mx-auto w-full">
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                        <div
                            className="flex w-full flex-col gap-8 font-semibold text-slate-900 sm:text-lg" data-aos="fade-down-left"
                            onMouseLeave={() => setActiveService(null)}
                        >
                            {services.map((service, index) => (
                                <button
                                    key={service.label}
                                    type="button"
                                    onMouseEnter={() => !isTouch && setActiveService(index)}
                                    onFocus={() => !isTouch && setActiveService(index)}
                                    className="flex w-full cursor-pointer items-center gap-6 text-left transition-colors duration-300 hover:text-slate-900"
                                >
                                    <span className="text-2xl">{service.label}</span>
                                    <span className="text-3xl leading-none">→</span>
                                </button>
                            ))}
                        </div>

                        <div className="w-full lg:text-right" data-aos="fade-down-right">
                            <div
                                className={`font-black leading-none tracking-tight text-slate-900 transition-all duration-1000 ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-2 opacity-0"
                                    } text-[clamp(3rem,9vw,9rem)]`}
                            >
                                {words[wordIndex]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PremiumServicesSection
