'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa6';

const socials = [
    {
        name: 'WhatsApp',
        icon: <FaWhatsapp size={24} />,
        href: 'https://wa.me/966553719009',
        color: 'bg-[#25D366] hover:bg-[#128C7E]',
        label: '+966553719009'
    },
    {
        name: 'Call',
        icon: <FaPhone size={20} />,
        href: 'tel:+966553719009',
        color: 'bg-[#001F3F] hover:bg-[#003366]',
        label: '+966553719009'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram size={24} />,
        href: 'https://www.instagram.com/aldiyarglobal',
        color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
        label: '@aldiyarglobal'
    },
    {
        name: 'TikTok',
        icon: <FaTiktok size={22} />,
        href: 'https://vm.tiktok.com/ZShKSH6o9/',
        color: 'bg-black hover:bg-[#25F4EE]',
        label: 'TikTok'
    }
];

export default function FloatingSocials() {
    return (
        <div className="fixed left-4 bottom-8 z-50 flex flex-col gap-4 items-start">
            {socials.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    className={`
                        relative group flex items-center justify-center
                        w-12 h-12 rounded-full text-white shadow-lg shadow-black/20
                        ${social.color} transition-all duration-300
                    `}
                >
                    {social.icon}

                    {/* Tooltip Label */}
                    <span className="absolute left-full ml-3 px-3 py-1 bg-white text-slate-800 text-sm font-bold rounded-lg shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
                        {social.label}
                        <span className="absolute left-0 top-1/2 -translate-x-[4px] -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></span>
                    </span>
                </motion.a>
            ))}
        </div>
    );
}
