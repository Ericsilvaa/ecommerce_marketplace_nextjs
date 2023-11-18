// o que vem da API
export interface DummyProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

// transformando no que STRIPE aceita
export interface Product {
  id: string
  name: string
  description?: string
  price: string | number
  currency: string
  image: string
  images?: string[]
}