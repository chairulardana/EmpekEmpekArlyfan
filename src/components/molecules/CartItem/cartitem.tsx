import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import type { CartItem as CartItemType } from '@/types'
import { motion } from 'framer-motion'

interface CartItemProps {
  item: CartItemType
  showDelete?: boolean
}

export function CartItem({ item, showDelete = true }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const totalPrice = item.price * item.quantity
  const hasDiscount = item.originalPrice > item.price
  const totalOriginalPrice = item.originalPrice * item.quantity

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 p-4 border-b border-gray-200"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecrease}
              className="h-8 w-8 p-0"
            >
              <Minus className="w-3 h-3" />
            </Button>
            
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleIncrease}
              className="h-8 w-8 p-0"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>

          {showDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeFromCart(item.id)}
              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="text-right flex-shrink-0">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#940616]">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>
          
          {hasDiscount && (
            <>
              <span className="text-sm text-gray-500 line-through">
                Rp {totalOriginalPrice.toLocaleString()}
              </span>
              <span className="text-xs text-green-600 font-medium">
                Hemat Rp {(totalOriginalPrice - totalPrice).toLocaleString()}
              </span>
            </>
          )}
          
          <span className="text-sm text-gray-600 mt-1">
            Rp {item.price.toLocaleString()} × {item.quantity}
          </span>
        </div>
      </div>
    </motion.div>
  )
}