import { Cart, ShopifyCart } from "../types";
import { removeEdgesAndNodes } from "./common";

export const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {

    const currencyCode = cart.cost?.totalAmount?.currencyCode || 'INR';

    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode,
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
};
