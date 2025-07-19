'use client';

import Price from '@/components/common/price';
import { DEFAULT_OPTION } from '@/lib/constants';
import type { Cart } from '@/lib/shopify/types';
import { createUrl } from '@/lib/utils';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CloseCart from './close-cart';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';
import { ArrowRight } from 'lucide-react';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button
        aria-label="Open cart"
        onClick={openCart}
        className="header-link ml-4 [&>*]:transition-all [&>*]:duration-300 hover:[&>*]:opacity-50"
      >
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Dialog open={isOpen} onClose={closeCart} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 transition-all duration-300 ease-in-out data-[closed]:opacity-0 data-[closed]:backdrop-blur-none data-[enter]:opacity-100 data-[enter]:backdrop-blur-[.5px] data-[leave]:opacity-0 data-[leave]:backdrop-blur-none"
        />
        <div className="fixed inset-0 flex items-center justify-end">
          <DialogPanel
            transition
            className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-stone-500 bg-white/50 bg-opacity-60 px-4 pb-6 pt-2 backdrop-blur-md transition-all duration-300 ease-in-out data-[closed]:translate-x-full data-[enter]:translate-x-0 data-[leave]:translate-x-full md:w-[390px]"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">My Cart</p>

              <button aria-label="Close cart" onClick={closeCart}>
                <CloseCart />
              </button>
            </div>

            {!cart || cart.lines.length === 0 ? (
              <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                <Image src="/images/cart.png" width="36" height="36" alt="cart" />
                <p className="mt-6 text-center text-2xl font-semibold">
                  Your cart is empty.
                </p>
              </div>
            ) : (
              <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow overflow-auto py-4">
                  {cart.lines.map((item, i) => {
                    const merchandiseSearchParams = {} as MerchandiseSearchParams;

                    item.merchandise.selectedOptions.forEach(({ name, value }) => {
                      if (value !== DEFAULT_OPTION) {
                        merchandiseSearchParams[name.toLowerCase()] = value;
                      }
                    });

                    const merchandiseUrl = createUrl(
                      `/product/${item.merchandise.product.handle}`,
                      new URLSearchParams(merchandiseSearchParams)
                    );

                    return (
                      <li key={i} className="flex w-full flex-col border-b border-black/40">
                        <div className="relative flex w-full flex-row justify-between px-1 py-4">
                          <div className="absolute z-40 -mt-2 ml-[55px]">
                            <DeleteItemButton item={item} />
                          </div>
                          <Link
                            href={merchandiseUrl}
                            onClick={closeCart}
                            className="z-30 flex flex-row space-x-4"
                          >
                            <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md bg-neutral-300">
                              <Image
                                className="h-full w-full object-cover"
                                width={64}
                                height={64}
                                alt={
                                  item.merchandise.product.featuredImage.altText ||
                                  item.merchandise.product.title
                                }
                                src={item.merchandise.product.featuredImage.url}
                              />
                            </div>

                            <div className="flex flex-1 flex-col">
                              <span className="text-base font-medium leading-tight">
                                {item.merchandise.product.title}
                              </span>
                              {item.merchandise.title !== DEFAULT_OPTION ? (
                                <p className="text-[10px] font-normal text-purple uppercase">
                                  {item.merchandise.title}
                                </p>
                              ) : null}
                            </div>
                          </Link>
                          <div className="flex h-16 flex-col justify-between">
                            <Price
                              className="text-[12px] font-medium"
                              amount={item.cost.totalAmount.amount}
                              currencyCode={item.cost.totalAmount.currencyCode}
                            />
                            <div className="ml-auto flex h-9 flex-row items-center rounded-[8px] bg-white">
                              <EditItemQuantityButton item={item} type="minus" />
                              <p className="w-6 border-x-2 border-purple/50 text-center font-lora font-bold leading-[1]">
                                <span className="w-full">{item.quantity}</span>
                              </p>
                              <EditItemQuantityButton item={item} type="plus" />
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="py-4 text-[14px] font-normal">
                  <div className="mb-3 flex items-center justify-between border-b border-purple pb-1">
                    <p className='font-medium'>Taxes</p>
                    <p className="text-right">Price is inclusive of all taxes.</p>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-purple pb-1 pt-1">
                    <p className='font-medium'>Shipping</p>
                    <p className="text-right">FREE for PAN India</p>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-purple pb-1 pt-1">
                    <p className='font-medium'>Total</p>
                    <Price
                      className="text-right text-[18px] font-medium"
                      amount={cart.cost.totalAmount.amount}
                      currencyCode={cart.cost.totalAmount.currencyCode}
                    />
                  </div>
                </div>
                <a href={cart.checkoutUrl} className={`bg-dark px-[32px] text-primary font-semibold
                  py-[16px] text-center flex justify-center gap-2 hover:text-[16px] transition-all duration-200 ease-in-out`}>
                  Proceed to Checkout
                  <ArrowRight />
                </a>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
