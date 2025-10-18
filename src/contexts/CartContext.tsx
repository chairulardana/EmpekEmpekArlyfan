import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Cart, CartItem } from '@/types'

interface CartContextType {
  cart: Cart
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ 
    items: [], 
    total: 0, 
    totalItems: 0,
    totalDiscount: 0
  })
  const [isOpen, setIsOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('empek-empek-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('empek-empek-cart', JSON.stringify(cart))
  }, [cart])

  const calculateTotals = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalDiscount = items.reduce((sum, item) => {
      const itemDiscount = (item.originalPrice - item.price) * item.quantity
      return sum + Math.max(0, itemDiscount)
    }, 0)

    return { total, totalItems, totalDiscount }
  }

  const addToCart = (product: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.id === product.id)
      
      let newItems: CartItem[]
      if (existingItem) {
        // Update quantity if item already exists
        newItems = prevCart.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new item with quantity 1
        newItems = [...prevCart.items, { ...product, quantity: 1 }]
      }

      const { total, totalItems, totalDiscount } = calculateTotals(newItems)

      return {
        items: newItems,
        total,
        totalItems,
        totalDiscount
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.id !== productId)
      const { total, totalItems, totalDiscount } = calculateTotals(newItems)

      return {
        items: newItems,
        total,
        totalItems,
        totalDiscount
      }
    })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
      const { total, totalItems, totalDiscount } = calculateTotals(newItems)

      return {
        items: newItems,
        total,
        totalItems,
        totalDiscount
      }
    })
  }

  const clearCart = () => {
    setCart({ items: [], total: 0, totalItems: 0, totalDiscount: 0 })
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getCartTotal = () => cart.total
  const getCartItemsCount = () => cart.totalItems

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      isOpen,
      openCart,
      closeCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}