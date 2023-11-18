"use client";
import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const CartButton = () => {
  const { cartCount, formattedTotalPrice } = useShoppingCart();

  return (
    <Link href={"/cart"} className="flex items-center justify-center gap-2">
      {/* Icon Cart */}
      <ShoppingCart className="font-extrabold h-6 w-6" />({formattedTotalPrice})
      ({cartCount})
    </Link>
  );
};

export default CartButton;
