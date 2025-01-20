'use client';

import { Menu } from "@/lib/shopify/types";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import Search from "./search";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    return (
        <>
            {/* Button to open menu */}
            <button
                onClick={openMobileMenu}
                aria-label="Open Mobile Menu"
                className="flex w-11 h-11 items-center justify-center rounded-md border border-neutral-300 text-neutral-800 transition hover:bg-neutral-100 focus:ring focus:ring-neutral-200"
            >
                <Bars3Icon className="h-5" />
            </button>

            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    {/* Backdrop */}
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[2px]"
                        leave="transition-opacity ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[2px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
                    </Transition.Child>

                    {/* Mobile Menu Panel */}
                    <Transition.Child
                        as={Fragment}
                        enter="transition-transform ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="fixed inset-0 flex flex-col bg-white shadow-lg">
                            <div className="p-5">
                                {/* Close Button */}
                                <button
                                    className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 text-neutral-800 transition hover:bg-neutral-100 focus:ring focus:ring-neutral-200"
                                    onClick={closeMobileMenu}
                                    aria-label="Close Mobile Menu"
                                >
                                    <XMarkIcon className="h-6" />
                                </button>

                                {/* Search Component */}
                                <div className="mb-6">
                                    <Search />
                                </div>

                                {/* Menu Items */}
                                {menu.length > 0 && (
                                    <ul className="space-y-4">
                                        {menu.map((item: Menu) => (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.path}
                                                    prefetch={true}
                                                    onClick={closeMobileMenu}
                                                    className="block text-lg font-medium text-neutral-800 transition hover:text-neutral-600"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}

