'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { BsArrowDown, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center snap-start">
            {/* Background Video with modern gradient overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    poster="https://placehold.co/1920x1080/0F172A/FFF?text=Diyar+Jeddah"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Modern Dark Gradient Overlay - Top down and Bottom up */}
                <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-transparent to-brand-primary/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Main Heading Group */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    {/* Hero Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8 w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl shadow-brand-accent/20"
                    >
                        <img src="/favicon.svg" alt="Diyar Jeddah Icon" className="w-full h-full object-contain drop-shadow-xl" />
                    </motion.div>

                    {/* Top Tagline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full border border-brand-accent/30 bg-brand-primary/40 backdrop-blur-md"
                    >
                        <span className="text-brand-accent-light tracking-wide uppercase text-sm font-semibold">
                            {t('heroSubtitle') || "Engineering Excellence"}
                        </span>
                    </motion.div>

                    {/* Big Title */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight text-white drop-shadow-2xl">
                        <span className="block">{t('heroTitle')?.split(' ')[0] || "DIYAR"}</span>
                        <span className="text-gradient-gold block mt-2">
                            {t('heroTitle')?.split(' ').slice(1).join(' ') || "JEDDAH"}
                        </span>
                    </h1>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 mt-8"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-brand-accent overflow-hidden rounded-full shadow-lg shadow-brand-accent/20 transition-all hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />
                        <span className="relative flex items-center gap-3 text-brand-primary font-bold text-lg">
                            <BsTelephoneFill /> {t('callNow')}
                        </span>
                    </a>

                    <a
                        href="#services"
                        className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all text-white font-medium text-lg flex items-center gap-3"
                    >
                        {t('explore')}
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-[-15vh] md:bottom-[-20vh]"
                >
                    <div className="flex flex-col items-center gap-2 text-white/50">
                        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent"
                                animate={{ top: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
