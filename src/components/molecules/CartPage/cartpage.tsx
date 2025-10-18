import { motion } from 'framer-motion'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/CartContext'
import { CartItem } from '@/components/molecules/CartItem/cartitem'
import { ShoppingCart, Trash2, Phone, ArrowLeft, Truck, Shield, Clock, Plus, Minus } from 'lucide-react'

export function CartPage() {
  const { cart, clearCart, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  const handleWhatsAppOrder = () => {
    const phoneNumber = '6285167764204'
    
    const itemsText = cart.items.map(item => 
      `• ${item.name} (${item.quantity} x Rp ${item.price.toLocaleString()}) = Rp ${(item.quantity * item.price).toLocaleString()}`
    ).join('%0A')
    
    const message = `Halo, saya ingin memesan:%0A%0A${itemsText}%0A%0ATotal: Rp ${cart.total.toLocaleString()}%0A%0ATerima kasih!`
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleContinueShopping = () => {
    navigate({ to: '/product' })
  }

  // Mobile Cart Item Component
  const MobileCartItem = ({ item }: { item: any }) => {
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

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 shadow-sm border border-gray-200"
      >
        <div className="flex gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
          />
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
              {item.name}
            </h3>
            <p className="text-xs text-gray-500 capitalize mb-2">{item.category}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecrease}
                  className="h-7 w-7 p-0 min-w-0"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                
                <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleIncrease}
                  className="h-7 w-7 p-0 min-w-0"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 min-w-0"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>

          <div className="text-right flex-shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-base font-bold text-[#940616]">
                Rp {(item.price * item.quantity).toLocaleString()}
              </span>
              <span className="text-xs text-gray-600 mt-1">
                Rp {item.price.toLocaleString()} × {item.quantity}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 pb-8 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            
            <div className="space-y-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Keranjang Kosong</h2>
              <p className="text-gray-600 text-sm px-4">
                Belum ada item di keranjang belanja Anda. Yuk temukan empek-empek favorit!
              </p>
            </div>

            <Button 
              onClick={handleContinueShopping}
              className="bg-[#940616] hover:bg-[#7d0512] text-white font-semibold w-full py-3 text-base"
            >
              Mulai Belanja
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-8">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 sticky top-16 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: '/product' })}
              className="p-2 h-auto"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-[#940616]" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Keranjang</h1>
                <p className="text-gray-600 text-xs">{cart.totalItems} item</p>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={clearCart}
            className="text-red-600 p-2 h-auto"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Cart Items - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3 mb-6"
        >
          {cart.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MobileCartItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Features - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-2 mb-6"
        >
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <Truck className="w-6 h-6 text-[#940616] mx-auto mb-1" />
            <h3 className="font-semibold text-xs">Gratis Ongkir</h3>
            <p className="text-gray-600 text-xs">Min. Rp 50rb</p>
          </div>

          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <Shield className="w-6 h-6 text-[#940616] mx-auto mb-1" />
            <h3 className="font-semibold text-xs">Garansi Segar</h3>
            <p className="text-gray-600 text-xs">100% Berkualitas</p>
          </div>

          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <Clock className="w-6 h-6 text-[#940616] mx-auto mb-1" />
            <h3 className="font-semibold text-xs">Siap Kirim</h3>
            <p className="text-gray-600 text-xs">Pesanan Same Day</p>
          </div>
        </motion.div>

        {/* Order Summary - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-[#940616] to-[#7d0512] rounded-xl p-4 text-white text-center">
            <Badge variant="secondary" className="bg-white text-[#940616] text-xs mb-2">
              Promo Spesial
            </Badge>
            <h3 className="font-bold text-sm mb-1">Gratis Ongkir!</h3>
            <p className="text-white/80 text-xs">
              Min. pembelian Rp 50.000
            </p>
          </div>

          {/* Order Summary Card */}
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({cart.totalItems} item)</span>
                  <span className="font-medium">Rp {cart.total.toLocaleString()}</span>
                </div>

                {cart.totalDiscount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Diskon</span>
                    <span className="text-green-600 font-medium">
                      - Rp {cart.totalDiscount.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ongkos Kirim</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    GRATIS
                  </Badge>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span className="text-[#940616]">
                      Rp {cart.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Pesan via WhatsApp
              </Button>

              {/* Continue Shopping Button */}
              <Button
                variant="outline"
                onClick={handleContinueShopping}
                className="w-full mt-3 border-[#940616] text-[#940616] hover:bg-[#940616] hover:text-white"
              >
                Lanjut Belanja
              </Button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-2"
          >
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-[#940616]/10 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-[#940616] text-xs">💳</span>
                </div>
                <p className="text-xs text-gray-600">Transfer</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#940616]/10 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-[#940616] text-xs">📱</span>
                </div>
                <p className="text-xs text-gray-600">QRIS</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#940616]/10 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-[#940616] text-xs">💰</span>
                </div>
                <p className="text-xs text-gray-600">Tunai</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs">
              Butuh bantuan? Hubungi <span className="text-[#940616] font-medium">+62 812-3456-7890</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Sticky WhatsApp Button for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Total:</span>
              <span className="text-[#940616] font-bold text-lg">
                Rp {cart.total.toLocaleString()}
              </span>
            </div>
            {cart.totalDiscount > 0 && (
              <p className="text-green-600 text-xs text-right">
                Hemat Rp {cart.totalDiscount.toLocaleString()}
              </p>
            )}
          </div>
          
          <Button
            onClick={handleWhatsAppOrder}
            className="ml-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 flex items-center"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Pesan
          </Button>
        </div>
      </motion.div>

      {/* Add padding to bottom for sticky button */}
      <div className="lg:hidden h-24"></div>
    </div>
  )
}