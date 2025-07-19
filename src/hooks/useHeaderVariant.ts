// src/hooks/useHeaderVariant.ts
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utilsshadcn';

const BASE_HEADER_CLASS = `
fixed top-0 left-0 z-50 flex w-full items-center justify-center transition-all
duration-200 ease-in-out px-[8px] py-[4px] md:h-[100px] md:py-0 xl:px-[48px]
`;

type HeaderLogoVariant = 'default' | 'white';

export function useHeaderVariant() {
    const [atTop, setIsAtTop] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();

    const isHomePage = useMemo(() => pathname === '/', [pathname])

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 1);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let headerClass = cn(
        BASE_HEADER_CLASS,
        {
            'bg-transparent text-white': atTop && isHomePage && !isHovered,
            'bg-white text-dark': atTop && isHomePage && isHovered,

            'bg-white/70 shadow-md text-dark': !atTop,
            'bg-white shadow-md text-dark': !atTop && isHovered,

            'shadow-md bg-white/70': !isHomePage && !isHovered,
            'shadow-md bg-white': !isHomePage && isHovered,
        }
    );

    const variant: HeaderLogoVariant = atTop && isHomePage && !isHovered ? 'white' : 'default';

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return { headerClass, variant, atTop, isHomePage, handleMouseEnter, handleMouseLeave };
}

