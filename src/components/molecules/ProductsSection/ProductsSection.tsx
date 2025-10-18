import ProductCard from "@/components/atoms/ProductCard/productcard"
import { motion } from "framer-motion"
import featuredProductsData from '../../../pages/product/data/data.json'
import PempekLenjer from '@/assets/mpekmpeklenjer.jpg'
import PempekAdaan from '@/assets/mpekmpekadaan.jpg'
import PempekKapalSelam from '@/assets/mpekmpekkapalselam.jpg'
import { useNavigate } from "@tanstack/react-router"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const imageMap: { [key: string]: string } = {
  '/src/assets/mpekmpeklenjer.jpg': PempekLenjer,
  '/src/assets/mpekmpekadaan.jpg': PempekAdaan,
  '/src/assets/mpekmpekkapalselam.jpg': PempekKapalSelam
}



const featuredProducts = featuredProductsData.products
  .filter(product => [4, 6, 7].includes(product.id))
  .map(product => ({
    ...product,
    image: imageMap[product.image] || product.image,
    priceFormatted: `Rp ${product.price.toLocaleString('id-ID')}`
  }))


function ProductsSection() {
  const navigate = useNavigate()

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 md:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#940616] mb-3">
            Produk Unggulan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan terbaik empek-empek dengan cita rasa autentik Palembang
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button 
            onClick={() => navigate({ to: "/product" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#940616] hover:bg-[#7d0512] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#940616] focus:ring-opacity-50"
          >
            Lihat Semua Produk
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProductsSection