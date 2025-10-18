import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { StarRating } from '@/components/atoms/StarRating/starrating'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

interface ReviewHeaderProps {
  averageRating: string
  totalReviews: number
}

export function ReviewHeader({ averageRating, totalReviews }: ReviewHeaderProps) {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="relative py-24 md:py-32 bg-gradient-to-b from-rose-50 to-slate-50 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#940616]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-500/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center z-10">
        <motion.div variants={fadeInUp}>
          <Badge variant="secondary" className="mb-6 bg-[#940616] text-white hover:bg-[#7d0512] text-sm px-4 py-1.5">
            Ulasan Pelanggan Setia
          </Badge>
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[#940616] tracking-tight"
        >
          Apa Kata Mereka?
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Dengarkan pengalaman langsung dari para penikmat empek-empek autentik kami.
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold text-[#940616]">{averageRating}</div>
            <div className="text-left">
              <StarRating rating={parseFloat(averageRating)} />
              <p className="text-gray-600 mt-1">Berdasarkan {totalReviews} ulasan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}