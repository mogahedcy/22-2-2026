'use client';

import React, { useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { ReactLenis } from 'lenis/react';

export default function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Force reset scroll on reload if desired, or let Lenis handle it
        window.scrollTo(0, 0);
    }, []);

    return (
        <LanguageProvider>
            <ReactLenis root>
                {children}
            </ReactLenis>
        </LanguageProvider>
    );
}
