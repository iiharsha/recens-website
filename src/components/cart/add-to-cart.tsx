"use client";

import { addItem } from "@/components/cart/actions";
import { ProductVariant } from "@/lib/shopify/types";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function LoadingSpinner() {
  return (
    <svg
      className="inline-block animate-spin"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 2v4m0 12v4m10-10h-4M6 12H2m3.343-5.657L4.929 4.929m12.728 12.728 1.414 1.414"
        className="opacity-75"
      />
      <path
        d="M12 2a10 10 0 1 0 10 10"
        className="text-white/30"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SubmitButton({
  availableForSale,
  selectedVariantId,
  isPending,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  isPending: boolean;
}) {
  const buttonClasses = "text-[22px] font-quicksand";
  const disabledClasses =
    "btn-cart-disabled cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <button
        type="button"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        type="button"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        Please select an option
      </button>
    );
  }

  return (
    <button
      type="submit"
      aria-label="Add to cart"
      disabled={isPending}
      className={clsx(buttonClasses, "btn-cart", {
        "hover:opacity-90": true,
        [disabledClasses]: isPending,
      })}
    >
      {isPending ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        "Add To Cart"
      )}
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  const selectedVariantId = variant?.id || defaultVariantId;

  const [state, setState] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const variantId = formData.get("variantId") as string;

    try {
      const result = await addItem(state, variantId);
      setState(result || "Item added successfully");
    } catch (error) {
      setState("Error adding item to cart");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={formAction}>
      <input type="hidden" name="variantId" value={selectedVariantId || ""} />
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        isPending={isPending}
      />
      {state && (
        <p aria-live="polite" className="text-red-500 mt-2">
          {state}
        </p>
      )}
    </form>
  );
}
