'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Navbar() {
    const { t, toggleLanguage, language, direction } = useLanguage();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    // Close mobile menu when route changes or screen resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: t('home' as any) || (language === 'ar' ? 'الرئيسية' : 'Home'), path: '/' },
        { name: t('about' as any) || (language === 'ar' ? 'من نحن' : 'About'), path: '/#about' },
        { name: t('services' as any) || (language === 'ar' ? 'خدماتنا' : 'Services'), path: '/#services' },
        { name: t('contact' as any) || (language === 'ar' ? 'اتصل بنا' : 'Contact'), path: '/contact' },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <motion.header
                className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    className={`
                            w-[95%] max-w-7xl mx-auto px-6 py-3 md:py-4 rounded-2xl transition-all duration-300 pointer-events-auto
                            ${isScrolled
                            ? 'glass-nav shadow-2xl border border-white/5 bg-brand-primary/80'
                            : 'bg-transparent'}
                            flex items-center justify-between
                        `}
                >
                    {/* Logo Area */}
                    <div className="flex-shrink-0 cursor-pointer relative z-50">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className="relative w-32 md:w-48 h-10 md:h-12">
                                <Image
                                    src="/logo.svg"
                                    alt="Diyar Jeddah Logo"
                                    fill
                                    className={`object-contain transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'}`}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`
                                        relative px-5 py-2 rounded-full text-sm font-medium transition-colors hover:text-brand-accent
                                        ${isScrolled ? 'text-slate-200' : 'text-white'}
                                    `}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className={`
                                    px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors
                                    border border-white/10 hover:bg-white/10
                                    ${isScrolled ? 'text-white' : 'text-white'}
                                `}
                        >
                            {language === 'ar' ? 'English' : 'عربي'}
                        </button>

                        <Link
                            href="/contact"
                            className="flex px-6 py-2 bg-white text-brand-primary rounded-full text-sm font-bold hover:bg-brand-accent hover:text-white transition-colors shadow-lg shadow-white/10"
                        >
                            {t('callNow')}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center gap-4 relative z-50">
                        <button
                            onClick={toggleLanguage}
                            className={`
                                    text-sm font-bold uppercase tracking-wider transition-colors
                                    ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'}
                                `}
                        >
                            {language === 'ar' ? 'EN' : 'AR'}
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className={`text-2xl transition-colors ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'}`}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-brand-primary/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl" />

                        <nav className="flex flex-col items-center gap-6 w-full px-8 relative z-10">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-center text-2xl font-bold text-white py-4 border-b border-white/10 hover:text-brand-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 w-full"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex w-full justify-center items-center gap-3 px-8 py-4 bg-brand-accent text-brand-primary rounded-xl text-lg font-bold shadow-lg shadow-brand-accent/20"
                                >
                                    <FiPhone /> {t('callNow')}
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
