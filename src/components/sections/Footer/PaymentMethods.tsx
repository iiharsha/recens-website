import Image from "next/image"
import paymentMethods from "@/data/payment-methods.json"

const PaymentMethods = () => {
  return (
    <div className="flex items-center space-x-4">
      {paymentMethods.map((paymentMethod, i) => (
        <Image
          src={paymentMethod.image || "/placeholder.svg"}
          alt={paymentMethod.title}
          width={40}
          height={25}
          key={i}
          className="opacity-70 hover:opacity-100 hover:scale-125 transition-transform ease-in-out duration-300 transition-opacity"
        />
      ))}
    </div>
  )
}

export default PaymentMethods
