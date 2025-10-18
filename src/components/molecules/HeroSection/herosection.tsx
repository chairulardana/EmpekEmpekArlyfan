import HeroBadge from "@/components/atoms/herobadge/herobadge"
import { motion } from 'framer-motion'
import MpekMpekImage from '@/assets/mpekmpek1.webp'
import HeroTitle from "@/components/atoms/HeroTitle/HeroTitle"
import HeroDescription from "@/components/atoms/HeroDescription/herodescription"
import HeroButtons from "@/components/atoms/HeroButtons/herobutton"


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Komponen Hero Section
function HeroSection() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={MpekMpekImage}
          alt="Berbagai macam empek-empek khas Palembang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 px-4 py-16 space-y-6"
      >
        <HeroBadge />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </motion.div>
    </motion.header>
  )
}

export default HeroSection