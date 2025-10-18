import { motion } from 'framer-motion'
import { ReviewCard } from '@/components/molecules/ReviewCard/reviewcard'

// Tambahkan variabel animasi yang diperlukan
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

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

interface ReviewGridProps {
  reviews: Review[]
}

export function ReviewGrid({ reviews }: ReviewGridProps) {
  console.log('ReviewGrid received reviews:', reviews)

  if (!reviews || reviews.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-gray-500 text-lg">Belum ada ulasan untuk ditampilkan.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate" // Ubah dari whileInView menjadi animate
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={fadeInUp}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}