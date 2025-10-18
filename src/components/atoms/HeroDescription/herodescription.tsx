import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

function HeroDescription() {
  return (
    <motion.p
      variants={fadeInUp}
      className="max-w-xl mx-auto text-lg text-white/80 leading-relaxed"
    >
      Nikmati kelezatan empek empek Palembang asli dengan cita rasa
      tradisional yang turun-temurun. Dibuat dari bahan pilihan penuh
      cinta.
    </motion.p>
  )
}
export default HeroDescription