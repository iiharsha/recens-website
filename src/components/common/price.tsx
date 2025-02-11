import clsx from "clsx";

const Price = ({
  amount,
  className,
  currencyCode = "INR",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(parseFloat(amount));

  return (
    <p suppressHydrationWarning={true} className={className}>
      {`RS. ${formattedAmount}`}
      <span className={clsx("ml-1 inline", currencyCodeClassName)}>{`${currencyCode}`}</span>
    </p>
  );
};

export default Price;

