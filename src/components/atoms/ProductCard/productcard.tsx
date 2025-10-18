import { motion } from "framer-motion"



const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}


function ProductCard({ 
  product, 
  index 
}: { 
  product: { 
    id: number;
    name: string;
    description: string;
    price: number;
    priceFormatted: string;
    image: string;
    isBestSeller: boolean;
    category?: string;
    rating?: number;
  }; 
  index: number 
}) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 bg-[#940616] text-white px-3 py-1 rounded-full text-sm font-medium">
            Terlaris
          </div>
        )}
        {product.category && (
          <div className="absolute top-4 right-4 bg-white/90 text-[#940616] px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="text-yellow-500">★</span>
              <span>{product.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#940616]">
            {product.priceFormatted}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard