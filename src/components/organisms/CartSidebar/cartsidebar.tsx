import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Trash2, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import { CartItem } from '@/components/molecules/CartItem/cartitem'
import { useNavigate } from '@tanstack/react-router'

export function CartSidebar() {
  const { cart, isOpen, closeCart, clearCart } = useCart()
  const navigate = useNavigate()

  const handleWhatsAppOrder = () => {
    const phoneNumber = '6285167764204'
    
    const itemsText = cart.items.map(item => 
      `• ${item.name} (${item.quantity} x Rp ${item.price.toLocaleString()}) = Rp ${(item.quantity * item.price).toLocaleString()}`
    ).join('%0A')
    
    const message = `Halo, saya ingin memesan:%0A%0A${itemsText}%0A%0ATotal: Rp ${cart.total.toLocaleString()}%0A%0ATerima kasih!`
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleViewCart = () => {
    navigate({ to: '/keranjang' })
    closeCart()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-[#940616]" />
                <h2 className="text-xl font-bold text-gray-900">
                  Keranjang Belanja
                </h2>
                {cart.totalItems > 0 && (
                  <span className="bg-[#940616] text-white text-sm rounded-full px-2 py-1">
                    {cart.totalItems} item
                  </span>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={closeCart}
                className="h-8 w-8 p-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Keranjang Kosong
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Belum ada item di keranjang belanja Anda
                  </p>
                  <Button onClick={closeCart} className="bg-[#940616] hover:bg-[#7d0512]">
                    Mulai Belanja
                  </Button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} item={item} showDelete={true} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Summary */}
                <div className="space-y-2">
                  {cart.totalDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Diskon</span>
                      <span className="text-green-600 font-medium">
                        - Rp {cart.totalDiscount.toLocaleString()}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Belanja</span>
                    <span className="text-[#940616]">
                      Rp {cart.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Pesan via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={handleViewCart}
                    variant="outline"
                    className="w-full"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Lihat Keranjang Lengkap
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="flex-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Kosongkan
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={closeCart}
                      className="flex-1"
                    >
                      Lanjut Belanja
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}