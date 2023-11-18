import React from "react";
import stripe from "@/lib/stripe";
import { DummyProduct } from "@/types";

async function getDummyProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=9");
  const dummyData = await res.json();

  const products = dummyData.products.map((product: DummyProduct) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: "BRL",
      },
    };
  });

  return products;
}

async function seedDummyData() {
  const products = await getDummyProducts();

  // para cada loop, realizo tratamento de error.
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create(product);
    } catch (error: any) {
      console.log("STRIPE_CREATE_ERROR: " + error.message);
    }
  });
}

const SeedPage = async () => {
  await seedDummyData();

  return (
    <div className="container flex items-center justify-center my-10">
      <h1 className="text-3xl text-green-600 font-extrabold">
        Dummy data created in your Stripe Inventory. If you don't see it on your
        Products Dashboard. Take a look at you console.log!
      </h1>
    </div>
  );
};

export default SeedPage;
