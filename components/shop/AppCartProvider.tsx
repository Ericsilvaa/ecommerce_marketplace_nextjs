"use client";
import React from "react";
import { CartProvider } from "use-shopping-cart";

interface AppCartProviderProps {
  children: React.ReactNode;
}

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const AppCartProvider = ({ children }: AppCartProviderProps) => {
  return (
    <CartProvider
      shouldPersist
      cartMode="checkout-session"
      stripe={stripeKey!}
      currency="BRL"
    >
      {children}
    </CartProvider>
  );
};

export default AppCartProvider;
