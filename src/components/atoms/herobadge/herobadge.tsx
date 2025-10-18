import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

function  HeroBadge() {
  return (
    <motion.span
      variants={fadeInUp}
      className="inline-block px-4 py-2 bg-[#940616] text-white rounded-full text-sm font-medium"
    >
      🍴 Rasa Autentik Palembang
    </motion.span>
  )
}

export default HeroBadge