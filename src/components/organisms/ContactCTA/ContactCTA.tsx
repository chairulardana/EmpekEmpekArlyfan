import { motion } from 'framer-motion'

export const ContactCTA = () => {
  const handleContactClick = () => {
    // Nomor WhatsApp
    const phoneNumber = '6285167764204'
    // Pesan default
    const message = 'Halo, saya ingin bertanya tentang Empek Empek Arlyfan.'
    // Membuka WhatsApp dengan pesan
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-12 bg-[#940616] rounded-2xl text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
        <p className="mb-8">Ada pertanyaan? Jangan ragu untuk menghubungi kami</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactClick}
          className="bg-white text-[#940616] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
        >
          Kontak
        </motion.button>
      </div>
    </motion.section>
  )
}