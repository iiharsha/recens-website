'use client';

// react
import { useEffect, useRef, useState, useCallback } from 'react';

// next
import Image from 'next/image';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

// components
import Search from './search';
import { X } from 'lucide-react';

const SearchIcon = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Function to close the search modal
    const handleClose = useCallback(() => {
        setIsSearchVisible(false);
    }, []);

    useEffect(() => {
        if (isSearchVisible) {
            ref.current?.querySelector<HTMLInputElement>('input')?.focus();
        }
    }, [isSearchVisible]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);

    return (
        <>
            <button
                title="search"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="header-link hidden md:block [&>*]:transition-all [&>*]:duration-300 hover:[&>*]:opacity-50"
            >
                <Image src="/images/magnifier.png" width="36" height="36" alt="search" />
            </button>
            <AnimatePresence>
                {isSearchVisible && (
                    <div
                        className="absolute inset-0 z-40 hidden md:block"
                        onClick={handleClose}
                    >
                        <LazyMotion features={domAnimation}>
                            <m.div
                                className="absolute left-0 right-0 top-[1px] flex h-[110px] items-center justify-center backdrop-blur-sm bg-black/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                onClick={(e) => e.stopPropagation()}
                                ref={ref}
                            >
                                <Search />
                                <X onClick={handleClose} className='m-2' />
                            </m.div>
                        </LazyMotion>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SearchIcon;

