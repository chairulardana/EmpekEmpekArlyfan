import { motion } from 'framer-motion'


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}



function HeroTitle() {
  return (
    <motion.h1
      variants={fadeInUp}
      className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
    >
      Empek Empek <span className="block">Arlyfan</span>
    </motion.h1>
  )
}

export default HeroTitle
