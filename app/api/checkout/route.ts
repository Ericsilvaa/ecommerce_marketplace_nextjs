import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { validateCartItems } from "use-shopping-cart/utilities";
import { Product } from "use-shopping-cart/core";




export async function POST(req: NextRequest) {
  try {
    // cartDetails: intercepting route post to get products in body
    const cartDetails = await req.json()
    const baseUrl = req.headers.get("origin")

    const stripeInventory = await stripe.products.list({
      expand: ['data.default_price']
    })

    // transform product that took the stripe inventory
    // and i'm going to transform it to get the same thing 
    // with our application
    const products = stripeInventory.data.map((p: Stripe.Product): Product => {
      return {
        id: p.id.toString(),
        name: p.name,
        price: (p.default_price as Stripe.Price)?.unit_amount ?? 0,
        currency: (p.default_price as Stripe.Price)?.currency ?? 'BRL',
        image: p.images[0]
      }
    })

    const line_items = validateCartItems(products, cartDetails)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: line_items,
      success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`
    })

    return NextResponse.json(session, { status: 200 })

  } catch (error) {
    console.log(error)
  }


}