'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { NavbarContent, NavbarGroup, NavbarItem, NavbarLink } from './menu-items';
import { useHeaderVariant } from '@/hooks/useHeaderVariant';
import clsx from 'clsx';

interface MobileNavProps {
    navItems: NavbarContent;
    className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

    const { atTop, isHomePage } = useHeaderVariant();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setExpandedGroups(new Set());
    };

    const toggleGroup = (groupTitle: string) => {
        const newExpanded = new Set(expandedGroups);
        newExpanded.has(groupTitle)
            ? newExpanded.delete(groupTitle)
            : newExpanded.add(groupTitle);
        setExpandedGroups(newExpanded);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setExpandedGroups(new Set());
    };

    const isNavLink = (item: any): item is NavbarLink =>
        item && typeof item === 'object' && 'link' in item;

    const isNavGroup = (item: any): item is NavbarGroup =>
        item && typeof item === 'object' && Array.isArray(item.children);

    const renderNavItem = (
        item: NavbarItem | NavbarGroup | string,
        depth: number = 0
    ) => {
        if (typeof item === 'string') {
            return (
                <div
                    key={item}
                    className="py-2 px-4 text-sm text-dark font-medium uppercase tracking-wide"
                    style={{ paddingLeft: `${16 + depth * 16}px` }}
                >
                    {item}
                </div>
            );
        }

        if (isNavLink(item)) {
            return (
                <Link
                    key={item.title}
                    href={item.link}
                    className="block py-3 px-4 text-dark hover:bg-white hover:text-gray-900 transition-colors border-b border-gray-100 last:border-b-0"
                    style={{ paddingLeft: `${16 + depth * 16}px` }}
                    onClick={closeMenu}
                    rel={item.rel}
                    target={item.target}
                    aria-label={item.ariaLabel}
                >
                    {item.title}
                </Link>
            );
        }

        if (isNavGroup(item)) {
            const isExpanded = expandedGroups.has(item.title);

            return (
                <div key={item.title}>
                    <button
                        className="w-full flex items-center justify-between py-3 px-4 text-dark transition-colors border-b border-gray-100"
                        style={{ paddingLeft: `${16 + depth * 16}px` }}
                        onClick={() => toggleGroup(item.title)}
                        aria-label={item.ariaLabel}
                        aria-expanded={isExpanded}
                    >
                        <span className="font-medium">{item.title}</span>
                        {isExpanded ? (
                            <ChevronDown className="h-4 w-4 text-dark" />
                        ) : (
                            <ChevronRight className="h-4 w-4 text-dark" />
                        )}
                    </button>

                    {isExpanded && (
                        <div className="bg-white">
                            {item.children.map((child, index) => (
                                <div key={`${item.title}-${index}`}>
                                    {renderNavItem(child, depth + 1)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return null;
    };

    return (
        <div className={`md:hidden ${className}`}>
            {/* Toggle button */}
            <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className={clsx(
                        "h-6 w-6 ",
                        {
                            "text-white": atTop && isHomePage,
                            "text-dark": !atTop,
                        }
                    )} aria-hidden="true"
                    />
                )}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity"
                    onClick={closeMenu}
                />
            )}

            {/* Slide-in panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <h2 className="text-[18px] font-medium text-gray-900">Menu</h2>
                    <button
                        onClick={closeMenu}
                        className="rounded-md p-2 text-dark"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto">
                    <div className="py-2">
                        {navItems.map((item, index) => (
                            <div key={`nav-${index}`}>{renderNavItem(item)}</div>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;

