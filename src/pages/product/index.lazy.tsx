import { createLazyFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, MessageCircle } from 'lucide-react'
import { ProductCard } from '@/components/molecules/ProductCard/productcard'
import productsData from './data/data.json'
import type { Product } from '@/types'
import PempekTunu from '@/assets/pempektunu.webp'
import PempekPistel from '@/assets/pempekpistel.jpg'
import PempekKulit from '@/assets/pempekkulit.jpg'
import PempekLenjer from '@/assets/mpekmpeklenjer.jpg'
import PempekKeriting from '@/assets/mpekmpekkeriting.jpeg'
import PempekKapalSelam from '@/assets/mpekmpekkapalselam.jpg'
import PempekAdaan from '@/assets/mpekmpekadaan.jpg'

export const Route = createLazyFileRoute('/product/')({
  component: RouteComponent,
})

const imageMap: { [key: string]: string } = {
  '/src/assets/pempektunu.webp': PempekTunu,
  '/src/assets/pempekpistel.jpg': PempekPistel,
  '/src/assets/pempekkulit.jpg': PempekKulit,
  '/src/assets/mpekmpeklenjer.jpg': PempekLenjer,
  '/src/assets/mpekmpekkeriting.jpeg': PempekKeriting,
  '/src/assets/mpekmpekkapalselam.jpg': PempekKapalSelam,
  '/src/assets/mpekmpekadaan.jpg': PempekAdaan
}

const products: Product[] = productsData.products.map(product => ({
  ...product,
  image: imageMap[product.image] || product.image
}))

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function RouteComponent() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285167764204'
    const message = 'Halo, saya ingin bertanya tentang menu empek-empek Arlyfan. Bisa info lebih lanjut?'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 bg-gradient-to-b from-[#940616]/5 to-white"
      >
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-[#940616] text-white hover:bg-[#7d0512]">
            Menu Spesial
          </Badge>
          <motion.h1 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl font-bold mb-6 text-[#940616]"
          >
            Ragam Pempek Autentik
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-xl text-[#940616]/80 max-w-2xl mx-auto"
          >
            Temukan berbagai varian empek-empek dengan cita rasa Palembang asli, dibuat dari bahan-bahan pilihan terbaik
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-[#940616]/20 bg-gradient-to-br from-white to-[#940616]/5">
            <CardContent className="p-8 md:p-12">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-[#940616] rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Butuh Bantuan Memilih?
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Tim kami siap membantu Anda memilih empek-empek terbaik sesuai selera. Hubungi kami via WhatsApp untuk konsultasi gratis!
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 md:px-8 py-3 text-sm md:text-base"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Hubungi via WhatsApp
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default RouteComponent