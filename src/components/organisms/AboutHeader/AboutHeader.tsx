import { motion } from 'framer-motion'
import { CustomBadge } from '@/components/atoms/Badge/CustomBadge'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

interface AboutHeaderProps {
  badgeText: string
  title: string
  description: string
}

export function AboutHeader({ badgeText, title, description }: AboutHeaderProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative py-20 bg-gradient-to-b from-[#940616]/ to-white"
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
        <CustomBadge variant="default" className="mb-6">
          {badgeText}
        </CustomBadge>
        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-bold mb-6 text-[#940616]"
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="text-xl text-[#940616]/80 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  )
}