'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const sections = [
    { id: 'hero', name: 'heroTitle' },
    { id: 'car-shades', name: 'carShadesTitle' },
    { id: 'pergolas', name: 'pergolasTitle' },
    { id: 'tents', name: 'tentsTitle' },
    { id: 'sawatr', name: 'sawatrTitle' },
    { id: 'panel', name: 'panelTitle' },
    { id: 'landscaping', name: 'landscapingTitle' },
    { id: 'hair-houses', name: 'hairHousesTitle' },
    { id: 'restoration', name: 'restorationTitle' }
];

export default function DotNavigation() {
    const [activeSection, setActiveSection] = useState('hero');
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5 // Trigger when 50% of the section is visible
            }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-4 rtl:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
            {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                    <div key={section.id} className="group relative flex items-center justify-end">
                        {/* Tooltip (Name) */}
                        <motion.span
                            className="absolute right-8 rtl:left-8 bg-slate-900 text-white px-2 py-1 rounded text-xs transition-opacity whitespace-nowrap pointer-events-none"
                            initial={{ x: 10, opacity: 0 }}
                            animate={{
                                x: isActive ? 0 : 10,
                                opacity: isActive ? 1 : 0
                            }}
                            whileHover={{ x: 0, opacity: 1 }}
                        >
                            {t(section.name as any) || section.name}
                        </motion.span>

                        {/* Dot */}
                        <button
                            onClick={() => handleScrollTo(section.id)}
                            className={`
                                rounded-full transition-all duration-300 border border-transparent 
                                ${isActive
                                    ? 'w-4 h-4 bg-brand-accent border-white/20 scale-125'
                                    : 'w-3 h-3 bg-slate-400/30 hover:bg-brand-accent/50 hover:scale-110 hover:border-white/20'}
                            `}
                            aria-label={`Scroll to ${section.name}`}
                            aria-current={isActive ? 'step' : undefined}
                        />
                    </div>
                );
            })}
        </div>
    );
}
