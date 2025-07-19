'use client';

import Link from 'next/link';
import clothingImages from '@/data/clothing-images.json';
import { NavbarGroup } from '../sections/Header/menu-items';

const images: Record<string, Array<{ title: string; image: string; url: string }>> = {};
images['clothing'] = clothingImages;

const SubMenu = ({
    item,
    parent
}: {
    item: NavbarGroup;
    parent: string;
}) => {
    const renderNavItems = (children: NavbarGroup['children']) => {
        return children.map((child, i) => {
            if (typeof child === 'string') {
                return (
                    <span key={i} className="">
                        {child}
                    </span>
                );
            }

            if ('children' in child) {
                // This is a NavbarGroup
                return (
                    <div key={i} className="flex flex-col gap-3">
                        <h4 className="uppercase">{child.title}</h4>
                        <div className="flex flex-col gap-2">
                            {renderNavItems(child.children)}
                        </div>
                    </div>
                );
            }

            // This is a NavbarItem (link)
            return (
                <Link
                    key={i}
                    href={child.link}
                    className="hover-line text-[15px] font-medium transition-colors duration-200"
                    {...(child.rel && { rel: child.rel })}
                    {...(child.target && { target: child.target })}
                    aria-label={child.ariaLabel}
                >
                    {child.title}
                </Link>
            );
        });
    };

    return (
        <div
            className="pointer-events-none absolute left-0 right-0 top-[100px] z-40 flex items-center justify-center border-t border-purple bg-white py-[24px] opacity-0 transition-all duration-200 shadow-lg"
        >
            <div className="flex w-full max-w-[1200px] items-center justify-center px-8">
                <nav className="flex gap-12">
                    <h3 className="sr-only">{parent} Sub Menu</h3>
                    {renderNavItems(item.children)}
                </nav>
            </div>
        </div>
    );
};

export default SubMenu;

