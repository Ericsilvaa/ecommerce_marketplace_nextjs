"use client";
import React from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "../ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description?: string;
  sku?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
}

const ProductCard = ({
  id,
  name,
  description,
  sku,
  price,
  currency,
  image,
  images,
}: ProductCardProps) => {
  const { addItem } = useShoppingCart();
  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });
  const { toast } = useToast();

  const addToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addItem({
      name,
      description,
      id,
      price: Number(price),
      currency,
      image,
    });

    toast({
      title: "Add to Cart",
      description: `${name} Added`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center min-h-[4rem]">
          {name}
        </CardTitle>
        <CardDescription className="relative w-full h-60">
          <Image
            src={image}
            fill
            sizes="100%"
            alt={name}
            className="object-contain"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <p className="min-h-[6rem]">{description}</p>
      </CardContent>
      <CardFooter className="fle items-center justify-between ">
        <div>
          <p>Preço</p>
          <p>{formattedPrice}</p>
        </div>
        <Button size={"lg"} variant={"default"} onClick={addToCart}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
