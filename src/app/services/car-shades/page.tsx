'use client';

import React from 'react';
import Image from 'next/image';
import { BsCheckCircleFill, BsTelephoneFill } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function CarShadesPage() {
    const { t } = useLanguage();

    const servicesList = [
        t('carShadesService1' as any),
        t('carShadesService2' as any),
        t('carShadesService3' as any),
        t('carShadesService4' as any),
        t('carShadesService5' as any),
    ];

    const features = [
        { title: t('csFeature1Title' as any), desc: t('csFeature1Desc' as any) },
        { title: t('csFeature2Title' as any), desc: t('csFeature2Desc' as any) },
        { title: t('csFeature3Title' as any), desc: t('csFeature3Desc' as any) },
        { title: t('csFeature4Title' as any), desc: t('csFeature4Desc' as any) },
    ];

    const faqs = [
        { q: t('csFaq1Q' as any), a: t('csFaq1A' as any) },
        { q: t('csFaq2Q' as any), a: t('csFaq2A' as any) },
        { q: t('csFaq3Q' as any), a: t('csFaq3A' as any) },
    ];

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <Navbar />

            {/* Hero Section of the Inner Page */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/car-shades/مظلات سيارات جدة .jpg"
                        alt={t('carShadesTitle')}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('carShadesTitle')}</h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
                        {t('carShadesHeroSubtitle' as any)}
                    </p>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8 h-fit lg:sticky lg:top-24">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-xl font-bold text-brand-primary mb-4 border-b pb-2">{t('carShadesServicesListTitle' as any)}</h3>
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
                        <h3 className="text-2xl font-bold mb-2">{t('needConsultation' as any)}</h3>
                        <p className="text-slate-300 mb-6 text-sm">{t('consultationDesc' as any)}</p>
                        <a href="tel:+966553719009" className="flex items-center justify-center gap-2 bg-white text-brand-primary py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-colors">
                            <BsTelephoneFill /> {t('askConsultation' as any)}
                        </a>
                    </div>
                </aside>

                {/* Article / Detailed Content */}
                <article className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">{t('whyChooseUs' as any)}</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        {t('whyChooseUsDescPart1' as any)}
                        <strong className="text-brand-accent mx-1"> Diyar Jeddah </strong>
                        {t('whyChooseUsDescPart2' as any)}
                        <span className="text-brand-primary font-semibold mx-1">{t('whyChooseUsDescHighlight1' as any)}</span>
                        &
                        <span className="text-brand-primary font-semibold mx-1">{t('whyChooseUsDescHighlight2' as any)}</span>.
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

                    <h2 className="text-2xl font-bold text-brand-primary mb-4">{t('csTypesTitle' as any)}</h2>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden shrink-0">
                                <Image src="/images/car-shades/مظلات سيارات جدة  (1).jpg" alt={t('csType1Title' as any)} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('csType1Title' as any)}</h3>
                                <p className="text-sm text-slate-600">{t('csType1Desc' as any)}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden shrink-0">
                                <Image src="/images/car-shades/مظلات سيارات جدة  (2).jpg" alt={t('csType2Title' as any)} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('csType2Title' as any)}</h3>
                                <p className="text-sm text-slate-600">{t('csType2Desc' as any)}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden shrink-0">
                                <Image src="/images/car-shades/مظلات سيارات جدة  (4).jpg" alt={t('csType3Title' as any)} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('csType3Title' as any)}</h3>
                                <p className="text-sm text-slate-600">{t('csType3Desc' as any)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-slate-900 text-white p-8 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">{t('csPricingTitle' as any)}</h2>
                        <p className="mb-8 text-slate-300">{t('csPricingDesc' as any)}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <span className="block text-sm opacity-70">{t('priceFrom' as any)}</span>
                                <strong className="text-2xl text-brand-accent">100 {t('sar' as any)}</strong>
                                <span className="block text-xs">{t('perMeterKorean' as any)}</span>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <span className="block text-sm opacity-70">{t('priceFrom' as any)}</span>
                                <strong className="text-2xl text-brand-accent">140 {t('sar' as any)}</strong>
                                <span className="block text-xs">{t('perMeterGerman' as any)}</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">{t('pricesDisclaimer' as any)}</p>
                    </div>

                </article>
            </div>

            {/* FAQ Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">{t('faqTitle' as any)}</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-brand-primary">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
