import { motion } from 'framer-motion'
import { useNavigate } from '@tanstack/react-router'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

function HeroButtons() {
  const navigate = useNavigate()

  const handlePesanSekarang = () => {
    const phoneNumber = '6285167764204'
    const message = 'Halo, saya ingin memesan empek-empek Arlyfan. Bisa info menu dan harga?'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleLihatMenu = () => {
    navigate({ to: '/product' })
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
    >
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePesanSekarang}
        className="px-8 py-3 bg-[#940616] hover:bg-[#7d0512] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#940616] focus:ring-opacity-50"
      >
        Pesan Sekarang
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLihatMenu}
        className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#940616] font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        Lihat Produk
      </motion.button>
    </motion.div>
  )
}

export default HeroButtons