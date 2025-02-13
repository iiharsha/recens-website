"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import clsx from "clsx";

import { createUrl } from "@/lib/utils";

import { ProductOption } from "@/lib/shopify/types";
import { Combination } from "./ProductDescription";

export function VariantSelector({
  options,
  combinations,
}: {
  options: ProductOption[];
  combinations: Combination[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  return options.map((option) => (
    <dl
      className="flex flex-col items-start justify-start gap-2"
      key={option.id}
    >
      <dt className="text-[16px] uppercase">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(
            ([key, value]) =>
              options.find(
                (option) =>
                  option.name.toLowerCase() === key &&
                  option.values.includes(value)
              )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) =>
                combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <button
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => router.replace(optionUrl, { scroll: false })}
              // onClick={() => router.push(optionUrl, { scroll: false })}
              title={`${option.name} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""
                }`}
              className={clsx(
                "border-[1px] border-dark px-[20px] py-[10px] text-[14px] font-medium transition-all duration-300 will-change-transform uppercase", {
                "cursor-default bg-dark text-white": isActive,
                "hover:bg-dark hover:text-primary":
                  !isActive && isAvailableForSale,
                "relative z-10 cursor-not-allowed overflow-hidden bg-primary text-dark ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700":
                  !isAvailableForSale,
              }
              )}
            >
              {value}
            </button>
          );
        })}
      </dd>
    </dl>
  ));
}
