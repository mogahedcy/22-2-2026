'use client';

import React from 'react';
import Image from 'next/image';
import { BsCheckCircleFill, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function LandscapingPage() {
    const { t } = useLanguage();

    const servicesList = [
        t('landscapingService1' as any),
        t('landscapingService2' as any),
        t('landscapingService3' as any),
        t('landscapingService4' as any),
        t('landscapingService5' as any),
    ];

    const features = [
        { title: t('lsFeature1Title' as any), desc: t('lsFeature1Desc' as any) },
        { title: t('lsFeature2Title' as any), desc: t('lsFeature2Desc' as any) },
        { title: t('lsFeature3Title' as any), desc: t('lsFeature3Desc' as any) },
        { title: t('lsFeature4Title' as any), desc: t('lsFeature4Desc' as any) },
    ];

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/landscaping/garden.webp"
                        alt={t('landscapingPageTitle' as any)}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('landscapingPageTitle' as any)}</h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
                        {t('landscapingHeroSubtitle' as any)}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8 h-fit lg:sticky lg:top-24">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-xl font-bold text-brand-primary mb-4 border-b pb-2">{t('landscapingServicesListTitle' as any)}</h3>
                        <ul className="space-y-3">
                            {servicesList.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-600 hover:text-brand-accent transition-colors cursor-pointer">
                                    <span className="w-2 h-2 bg-brand-accent rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-brand-primary text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">{t('explore' as any)}</h3>
                        <p className="text-slate-300 mb-6 text-sm">{t('consultationDesc' as any)}</p>
                        <a href="tel:+966553719009" className="flex items-center justify-center gap-2 bg-white text-brand-primary py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-colors">
                            <BsTelephoneFill /> {t('askConsultation' as any)}
                        </a>
                    </div>
                </aside>

                {/* Detailed Article */}
                <article className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">{t('landscapingWhyTitle' as any)}</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        {t('landscapingWhyDesc' as any)}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-brand-accent rtl:border-r-4 ltr:border-l-4">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <BsCheckCircleFill className="text-brand-accent shrink-0" /> {feature.title}
                                </h4>
                                <p className="text-sm text-slate-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-brand-primary mb-6">{t('lsTypesTitle' as any)}</h2>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Grass */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="relative h-64 w-full group overflow-hidden">
                                <Image src="/images/landscaping/garden.webp" alt={t('lsType1Title' as any)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{t('lsType1Title' as any)}</h3>
                                <p className="text-slate-600">{t('lsType1Desc' as any)}</p>
                            </div>
                        </div>

                        {/* Waterfalls */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="relative h-64 w-full group overflow-hidden">
                                <Image src="/images/landscaping/waterfall.webp" alt={t('lsType2Title' as any)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{t('lsType2Title' as any)}</h3>
                                <p className="text-slate-600">{t('lsType2Desc' as any)}</p>
                            </div>
                        </div>

                        {/* Pathways */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="relative h-64 w-full group overflow-hidden">
                                <Image src="/images/landscaping/pathway.webp" alt={t('lsType3Title' as any)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{t('lsType3Title' as any)}</h3>
                                <p className="text-slate-600">{t('lsType3Desc' as any)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-brand-surface rounded-3xl text-center border border-brand-accent/20">
                        <h3 className="text-2xl font-bold text-brand-primary mb-4">{t('contactTitle' as any)}</h3>
                        <p className="text-slate-600 mb-6">{t('consultationDesc' as any)}</p>
                        <div className="flex justify-center gap-4">
                            <a href="tel:+966553719009" className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-accent transition-colors">
                                <BsTelephoneFill />
                                {t('callNow' as any)}
                            </a>
                            <a href="https://wa.me/966553719009" className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
                                <BsWhatsapp />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                </article>
            </div>
        </main>
    );
}
