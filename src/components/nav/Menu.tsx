// Menu.tsx
'use client';

import Link from 'next/link';
import { NavbarContent } from '../sections/Header/menu-items';
import SubMenu from './SubMenu';

const Menu = ({ navLinks }: { navLinks: NavbarContent }) => {
    return (
        <>
            {navLinks.length ? (
                <ul className="hidden h-full gap-[16px] font-semibold tracking-[1px] md:flex md:items-center lg:gap-[24px] text-[14px] xl:gap-[48px]">
                    {navLinks.map((item, idx: number) => {
                        // Handle string items
                        if (typeof item === 'string') {
                            return (
                                <li key={idx} className="h-full">
                                    <span className="uppercase flex items-center justify-center">
                                        {item}
                                    </span>
                                </li>
                            );
                        }

                        // Handle NavbarGroup (items with children)
                        if ('children' in item) {
                            return (
                                <li
                                    key={idx}
                                    className="h-full"
                                    onMouseLeave={(e) => {
                                        if (
                                            (e.relatedTarget as HTMLElement)?.parentElement === e.currentTarget
                                        )
                                            return;
                                        const submenu = (e.currentTarget as HTMLLIElement).lastChild as HTMLDivElement;
                                        if (submenu) {
                                            submenu.classList.add(
                                                'opacity-0',
                                                'pointer-events-none',
                                                '[&_.fade-up]:animate-fadeOut',
                                                '[&_.fade-up-delay]:animate-fadeOut'
                                            );
                                        }
                                    }}
                                >
                                    <span
                                        className="header-link uppercase flex items-center justify-center transition-all duration-200 will-change-transform cursor-pointer"
                                        onMouseEnter={(e) => {
                                            const containerElement = (e.target as HTMLSpanElement)
                                                .nextSibling as HTMLDivElement;
                                            if (!containerElement || !containerElement.classList.contains('opacity-0'))
                                                return;
                                            containerElement.classList.remove(
                                                'opacity-0',
                                                'pointer-events-none',
                                                '[&_.fade-up]:animate-fadeOut',
                                                '[&_.fade-up-delay]:animate-fadeOut',
                                                '[&_.fade-up]:animate-fadeUp',
                                                '[&_.fade-up-delay]:animate-fadeUpDelay'
                                            );
                                            void containerElement.offsetHeight;
                                            containerElement.classList.add(
                                                '[&_.fade-up]:animate-fadeUp',
                                                '[&_.fade-up-delay]:animate-fadeUpDelay'
                                            );
                                        }}
                                    >
                                        {item.title}
                                    </span>
                                    <SubMenu item={item} parent={item.title} />
                                </li>
                            );
                        }

                        // Handle NavbarItem (simple links)
                        return (
                            <li key={idx} className="h-full">
                                <Link
                                    href={item.link}
                                    className="header-link uppercase flex items-center justify-center will-change-transform"
                                    {...(item.rel && { rel: item.rel })}
                                    {...(item.target && { target: item.target })}
                                    aria-label={item.ariaLabel}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul >
            ) : null}
        </>
    );
};

export default Menu;
