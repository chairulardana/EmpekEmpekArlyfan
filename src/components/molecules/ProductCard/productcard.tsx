import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { Toast } from '@/components/atoms/Toast/toast'
import type { Product } from '@/types'
import type { CartItem } from '@/types'

interface ProductCardProps {
  product: Product
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating 
              ? 'fill-[#FFD700] text-[#FFD700]' 
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity: 1,
      category: product.category
    }
    
    addToCart(cartItem)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group"
      >
        <Card className="border-[#940616]/10 hover:border-[#940616]/30 transition-all duration-300 h-full overflow-hidden">
          <CardContent className="p-0">
            {/* Badge */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
              {product.isBestSeller && (
                <Badge className="bg-[#940616] text-white hover:bg-[#7d0512]">
                  Best Seller
                </Badge>
              )}
              {product.isNew && (
                <Badge className="bg-green-500 text-white hover:bg-green-600">
                  Baru
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full"
            >
              <Heart className="w-4 h-4" />
            </Button>

            {/* Product Image */}
            <div className="relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs border-[#940616]/30 text-[#940616]">
                  {product.category}
                </Badge>
                <StarRating rating={product.rating} />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-[#940616]">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-[#940616] hover:bg-[#7d0512] text-white font-semibold"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Tambah ke Keranjang
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Toast
        message={`${product.name} berhasil ditambahkan ke keranjang!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}