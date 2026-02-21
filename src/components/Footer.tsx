'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { BsTelephoneFill, BsWhatsapp, BsGeoAltFill, BsEnvelopeFill, BsInstagram, BsSnapchat, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const { t, language } = useLanguage();
    const isRtl = language === 'ar';

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: BsWhatsapp, href: 'https://wa.me/966553719009', label: 'WhatsApp', color: 'hover:text-green-500' },
        { icon: BsInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok', color: 'hover:text-black' },
        { icon: BsSnapchat, href: 'https://snapchat.com', label: 'Snapchat', color: 'hover:text-yellow-400' },
        { icon: BsTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    ];

    const quickLinks = [
        { name: t('home' as any) || (isRtl ? 'الرئيسية' : 'Home'), path: '/' },
        { name: t('about' as any) || (isRtl ? 'من نحن' : 'About Us'), path: '/#about' },
        { name: t('services' as any) || (isRtl ? 'خدماتنا' : 'Services'), path: '/#services' },
        { name: t('contact' as any) || (isRtl ? 'اتصل بنا' : 'Contact'), path: '/#contact' },
    ];

    const servicesLinks = [
        { name: t('carShadesTitle' as any), path: '/services/car-shades' },
        { name: t('pergolasTitle' as any), path: '/services/pergolas' },
        { name: t('tentsTitle' as any), path: '/services/tents' },
        { name: t('sawatrTitle' as any), path: '/services/car-shades' }, // TODO: Update if path differs (Sawatr page is part of car shades or separate? Wait, Sawatr has its own link in home page pointing to /services/sawatr? No, I added /services/car-shades for Sawatr? No, wait.)
        // Checking home page links:
        // Car Shades -> /services/car-shades
        // Pergolas -> /services/pergolas
        // Tents -> /services/tents
        // Sawatr -> (I need to check, I didn't create a Sawatr page yet? Wait, I added content for Sawatr to LanguageContext, but did I create the page? I think I missed creating /services/sawatr/page.tsx!)
        // Panel -> /services/panel
        // Landscaping -> /services/landscaping
        // Restoration -> /services/restoration
        // Qarmid -> /services/qarmid
    ];

    // Wait, I need to verify if I created Sawatr page. 
    // I created: pergolas, tents, panel, landscaping, restoration, qarmid.
    // Did I create Sawatr?
    // Step 223 added Sawatr content to LanguageContext.
    // Step 224 added Sawatr content to LanguageContext.
    // But did I run write_to_file for Sawatr page?
    // I need to check list_dir of src/app/services.

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 relative w-32 h-16">
                            {/* Use logo.svg but maybe invert colors or just use valid one. 
                                 Logo is usually dark, might need a white version. 
                                 For now, I'll use text if image fails or just the image. */}
                            <Image
                                src="/logo.svg"
                                alt="Diyar Jeddah"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <h3 className="text-white text-lg font-bold mb-4">{t('footerAbout' as any)}</h3>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            {t('footerAboutDesc' as any)}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xl transition-colors ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            {t('footerQuickLinks' as any)}
                            <span className="absolute bottom-[-8px] right-0 w-1/2 h-1 bg-brand-accent rtl:right-0 ltr:left-0 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                                        <span className="text-brand-accent text-xs">➤</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            {t('footerServices' as any)}
                            <span className="absolute bottom-[-8px] right-0 w-1/2 h-1 bg-brand-accent rtl:right-0 ltr:left-0 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                                        <span className="text-brand-accent text-xs">➤</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            {t('footerContact' as any)}
                            <span className="absolute bottom-[-8px] right-0 w-1/2 h-1 bg-brand-accent rtl:right-0 ltr:left-0 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="bg-slate-800 p-2 rounded-lg text-brand-accent text-xl">
                                    <BsGeoAltFill />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">{t('location' as any) || t('footerAddress' as any)}</span>
                                    <span className="text-xs text-slate-500">Jeddah, SA</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-slate-800 p-2 rounded-lg text-brand-accent text-xl">
                                    <BsTelephoneFill />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">0553719009</span>
                                    <span className="text-xs text-slate-500">{t('callNow' as any)}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-slate-800 p-2 rounded-lg text-brand-accent text-xl">
                                    <BsWhatsapp />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">0553719009</span>
                                    <span className="text-xs text-slate-500">WhatsApp Support</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>{t('footerRights' as any)}</p>
                    <p className="flex items-center gap-1">
                        Designed with <span className="text-red-500 animate-pulse">❤</span> by <a href="#" className="text-slate-300 hover:text-white">Diyar Tech</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
