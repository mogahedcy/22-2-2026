'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import ServiceSection from '@/components/sections/ServiceSection';
import DotNavigation from '@/components/DotNavigation';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeClient() {
    const { t } = useLanguage();

    const servicesData = [
        {
            id: 'car-shades',
            theme: 'protection',
            title: t('carShadesTitle'),
            desc: t('carShadesDesc'),
            bgImage: '/images/car-shades/مظلات سيارات جدة .jpg',
            feature: t('carShadesFeature'),
            gallery: [
                '/images/car-shades/مظلات سيارات جدة  (1).jpg',
                '/images/car-shades/مظلات سيارات جدة  (2).jpg',
                '/images/car-shades/مظلات سيارات جدة  (4).jpg',
                '/images/car-shades/مظلات سيارات جدة  (5).jpg',
            ],
            link: '/services/car-shades'
        },
        {
            id: 'pergolas',
            theme: 'relaxation',
            title: t('pergolasTitle'),
            desc: t('pergolasDesc'),
            bgImage: '/images/pergolas/برجولات وجلسات خارجية  (1).jpg',
            feature: t('pergolasFeature'),
            gallery: [
                '/images/pergolas/برجولات وجلسات خارجية  (2).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (3).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (5).jpg',
            ],
            link: '/services/pergolas'
        },
        {
            id: 'tents',
            theme: 'luxury',
            title: t('tentsTitle'),
            desc: t('tentsDesc'),
            bgImage: '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (6).jpg',
            feature: t('tentsFeature'),
            gallery: [
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (7).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (10).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (11).jpg',
            ],
            link: '/services/tents'
        },
        {
            id: 'sawatr',
            theme: 'privacy',
            title: t('sawatrTitle'),
            desc: t('sawatrDesc'),
            bgImage: '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (1).jpg',
            feature: t('sawatrFeature'),
            gallery: [
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (2).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (4).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (5).jpg',
            ],
            link: '/services/sawatr'
        },
        {
            id: 'panel',
            theme: 'insulation',
            title: t('panelTitle'),
            desc: t('panelDesc'),
            bgImage: '/images/sandwich-panel/sandwich-panel-1.jpg',
            feature: t('panelFeature'),
            gallery: [
                '/images/sandwich-panel/hangar-sandwich.webp',
                '/images/sandwich-panel/sandwich-panel-2.webp',
                '/images/sandwich-panel/sandwich-small.webp',
            ],
            link: '/services/panel'
        },
        {
            id: 'landscaping',
            theme: 'nature',
            title: t('landscapingTitle'),
            desc: t('landscapingDesc'),
            bgImage: '/images/landscaping/garden.webp',
            feature: t('landscapingFeature'),
            gallery: [
                '/images/landscaping/garden.webp',
                '/images/landscaping/waterfall.webp',
                '/images/landscaping/pathway.webp',
            ],
            link: '/services/landscaping'
        },
        {
            id: 'hair-houses',
            theme: 'tradition',
            title: t('hairHousesTitle'),
            desc: t('hairHousesDesc'),
            bgImage: '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (10).jpg',
            feature: t('hairHousesFeature'),
            gallery: [
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (6).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (7).jpg',
            ],
            link: '/services/tents'
        },
        {
            id: 'restoration',
            theme: 'renewal',
            title: t('restorationTitle'),
            desc: t('restorationDesc'),
            bgImage: '/images/trmim/restoration-hero.webp',
            feature: t('restorationFeature'),
            gallery: [
                '/images/trmim/restoration-interior.webp',
                '/images/trmim/restoration-exterior.webp',
            ],
            link: '/services/restoration'
        },
        {
            id: 'qarmid',
            theme: 'classic',
            title: t('qarmidTitle'),
            desc: t('qarmidDesc'),
            bgImage: '/images/qrmeed/qarmid-1.jpg',
            feature: t('qarmidFeature'),
            gallery: [
                '/images/qrmeed/qarmid-2.jpg',
                '/images/qrmeed/qarmid-3.jpg',
            ],
            link: '/services/qarmid'
        },
    ];

    return (
        <div className="relative">
            <DotNavigation />

            <Hero />

            <div id="services">
                {servicesData.map((service) => (
                    <ServiceSection key={service.id} {...service} />
                ))}
            </div>

            {/* Contact / Map Placeholder */}
            <section id="contact" className="h-screen bg-slate-900 flex items-center justify-center text-white snap-start relative">
                <div className="text-center z-10">
                    <h2 className="text-4xl font-bold mb-4">{t('contactTitle')}</h2>
                    <p className="text-xl opacity-70">{t('location')}</p>
                </div>
                {/* Optional: Add a subtle footer or copyright at the bottom absolute */}
                <div className="absolute bottom-4 w-full text-center text-white/20 text-sm">
                    © 2026 Diyar Jeddah International. All rights reserved.
                </div>
            </section>
        </div>
    );
}
