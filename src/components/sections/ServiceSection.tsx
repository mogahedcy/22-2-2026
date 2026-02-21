'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';

interface ServiceSectionProps {
    id: string;
    theme: string;
    title: string;
    desc: string;
    bgImage: string; // or video
    feature: string;
    gallery: string[];
    link?: string;
}

export default function ServiceSection({ id, theme, title, desc, bgImage, feature, gallery, link }: ServiceSectionProps) {
    const { direction, t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Create a scroll ref for parallax effect
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section
            id={id}
            ref={ref}
            className={`relative w-full flex flex-col md:flex-row overflow-hidden border-t border-slate-800/30 snap-start bg-slate-50 dark:bg-slate-900 ${id === 'restoration' ? 'border-b md:border-b-0' : ''
                } md:h-screen md:min-h-[700px]`}
        >
            {/* 
        Split Screen:
        - Visual (Media): Top 40% on Mobile, Left 50% on Desktop
        - Content (Text): Bottom 60% on Mobile, Right 50% on Desktop
      */}

            {/* Visual Side (Media) */}
            <motion.div
                className="relative w-full md:w-1/2 h-[35vh] md:h-full overflow-hidden shrink-0"
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yBg : 0 }}
            >
                {/* Background Image/Video with Parallax/Zoom */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    whileInView={{ scale: [1.1, 1] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ margin: "-20%" }}
                >
                    {bgImage.endsWith('.mp4') ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={bgImage} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            src={bgImage}
                            alt={title}
                            fill
                            className="object-cover cursor-pointer"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onClick={() => setSelectedImage(bgImage)}
                            priority
                        />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent pointer-events-none" />
                </motion.div>

                {/* Feature Badge */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-brand-accent text-brand-primary font-bold px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg z-10 uppercase text-[10px] md:text-xs tracking-wider">
                    {feature}
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
                className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:px-16 md:py-12 relative z-10"
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yContent : 0 }}
            >
                <div className="max-w-md mx-auto w-full">
                    <motion.h2
                        className="text-3xl md:text-5xl font-black text-brand-primary mb-4 md:mb-6 leading-tight"
                        initial={{ opacity: 0, x: direction === 'rtl' ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title}
                    </motion.h2>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                        {desc}
                    </p>

                    {/* Mini Gallery (Horizontal Scroll) */}
                    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-4 min-w-max px-1">
                            {gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-accent transition-all shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${title} ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {link ? (
                        <Link href={link}>
                            <motion.button
                                className="mt-8 px-8 py-3 bg-brand-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors w-max"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('details') || "View Details"}
                            </motion.button>
                        </Link>
                    ) : (
                        <button className="mt-8 px-8 py-3 bg-brand-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors w-max">
                            {t('details') || "View Details"}
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl hover:text-brand-accent transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FiX />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full h-full md:max-w-6xl md:max-h-[85vh] flex items-center justify-center bg-black rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full screen preview"
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
