'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/966553719009"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
            <FaWhatsapp className="text-4xl relative z-10" />
            <span className="sr-only">Contact us on WhatsApp</span>
        </motion.a>
    );
}
