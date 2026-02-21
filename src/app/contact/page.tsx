'use client';

import React from 'react';
import Image from 'next/image';
import { BsGeoAltFill, BsTelephoneFill, BsWhatsapp, BsClockFill, BsEnvelopeFill } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-slate-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contactPageTitle' as any)}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        {t('contactHeroSubtitle' as any)}
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6">{t('contactFormTitle' as any)}</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldName' as any)}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldPhone' as any)}</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" dir="ltr" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldSubject' as any)}</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white">
                                        <option value="">Select Service...</option>
                                        <option value="car-shades">Car Shades</option>
                                        <option value="pergolas">Pergolas</option>
                                        <option value="tents">Tents</option>
                                        <option value="sawatr">Sawatr</option>
                                        <option value="panel">Sandwich Panel</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldMessage' as any)}</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"></textarea>
                            </div>

                            <button type="button" className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-brand-accent transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {t('btnSend' as any)}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent flex items-start gap-4">
                                <div className="p-3 bg-brand-surface rounded-full text-brand-primary text-xl">
                                    <BsTelephoneFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('callNow' as any)}</h4>
                                    <p className="text-slate-600 dir-ltr text-right">0553719009</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4">
                                <div className="p-3 bg-green-50 rounded-full text-green-600 text-xl">
                                    <BsWhatsapp />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">WhatsApp</h4>
                                    <p className="text-slate-600 dir-ltr text-right">0553719009</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                                    <BsClockFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('workingHoursTitle' as any)}</h4>
                                    <p className="text-slate-600 text-sm">{t('workingHoursDesc' as any)}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-full text-red-600 text-xl">
                                    <BsGeoAltFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('contactInfoTitle' as any)}</h4>
                                    <p className="text-slate-600 text-sm">{t('location' as any) || 'Jeddah, Saudi Arabia'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg h-[400px] overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118742.84656094254!2d39.172778!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137c93%3A0x30a2798e1858a7a0!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1625680000000!5m2!1sen!2sae"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
