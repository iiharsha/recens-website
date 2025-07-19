'use client';

import Link from 'next/link';
import Logo from '@/components/layout/LogoHeader';
import MobileMenu from './mobile-menu';
import { NavLinks } from './menu-items';
import { useHeaderVariant } from '@/hooks/useHeaderVariant';
import Menu from '@/components/nav/Menu';
import SearchIcon from '@/components/common/SearchIcon';

interface HeaderWrapperProps {
    children: React.ReactNode;
}

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
    const { headerClass, variant, handleMouseEnter, handleMouseLeave } = useHeaderVariant();

    return (
        <header className={headerClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <nav className="flex h-full w-full max-w-full items-center justify-between md:w-[1440px]">
                <h2 className="sr-only">Main Navigation Menu</h2>
                <div className="flex h-full w-full items-center justify-between">
                    <div className="xl:hidden text-dark">
                        <MobileMenu navItems={NavLinks} />
                    </div>
                    <Link
                        href="/"
                        title="Home"
                        className="flex h-full items-center justify-center border-none"
                    >
                        <Logo
                            size="sm"
                            variant={variant}
                            className="block group-hover:hidden"
                        />
                        <Logo
                            size="sm"
                            className="hidden group-hover:block"
                        />
                    </Link>
                    <Menu navLinks={NavLinks} />
                    <div className="flex h-full items-center justify-end md:w-[115px] xl:w-[150px]">
                        <SearchIcon />
                        {children}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderWrapper;
