
export interface Product {
  id: number
  name: string
  image: string
  price: number
  originalPrice: number
  description: string
  category: string
  rating: number
  reviewCount: number
  isBestSeller: boolean
  isNew: boolean
}

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  originalPrice: number
  quantity: number
  category: string
}

export interface Cart {
  items: CartItem[]
  total: number
  totalItems: number
  totalDiscount: number;
}