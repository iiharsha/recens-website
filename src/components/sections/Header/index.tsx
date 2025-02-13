import { getMenu } from '@/lib/shopify';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

// components
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import { Suspense } from 'react';
import Menu from './Menu';
import SearchIcon from './SearchIcon';
import Logo from '@/components/layout/LogoHeader';


const headerClass = `flex items-center justify-center sticky top-0 z-50 transition-all
duration-300 ease-in-out backdrop-blur-md hover:bg-white/80 hover:backdrop-blur-none
bg-white/50 md:bg-transparent md:hover:bg-white/50 md:hover:backdrop-blur-none
px-[8px] py-[4px] md:h-[80px] md:py-0 xl:px-[48px]`


const Header = async () => {
    const menu = await getMenu('nextjs-menu');
    return (
        <header className={headerClass}>
            <h1 className="sr-only">Recens</h1>
            <nav className="flex h-full w-full max-w-full items-center justify-between md:w-[1440px]">
                <h2 className="sr-only">Main Navigation Menu</h2>
                <div className="flex h-full w-full items-center justify-between">
                    <div className="md:hidden">
                        <MobileMenu menu={menu} />
                    </div>
                    <Link
                        href="/"
                        title="Home"
                        className="flex h-full items-center justify-center border-none"
                    >
                        <Logo size="sm" />
                    </Link>
                    <Menu menu={menu} />
                    <div className="flex h-full items-center justify-end md:w-[115px] xl:w-[150px]">
                        <SearchIcon />
                        <Suspense fallback={<OpenCart />}>
                            <Cart />
                        </Suspense>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

