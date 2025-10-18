import { motion } from 'framer-motion'

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#940616] mb-3">
        Kenapa Memilih Kami?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Keunggulan yang membuat empek empek kami berbeda dan istimewa.
      </p>
    </motion.div>
  )
}

export default SectionHeader