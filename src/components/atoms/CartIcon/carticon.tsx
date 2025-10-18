import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { motion } from 'framer-motion'

interface CartIconProps {
  onClick?: () => void
  className?: string
}

export function CartIcon({ onClick, className = "" }: CartIconProps) {
  const { cart } = useCart()

  return (
    <button
      onClick={onClick}
      className={`relative p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group ${className}`}
    >
      <svg 
        className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300 group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>
      
      {cart.totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-white text-[#940616] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:scale-110"
        >
          {cart.totalItems}
        </motion.span>
      )}
      
      <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </button>
  )
}