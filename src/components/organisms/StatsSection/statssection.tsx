import { motion } from 'framer-motion'
import { Star, Users, Truck, ThumbsUp } from 'lucide-react'
import { StatItem } from '@/components/atoms/StatItem/statitem'

interface StatsSectionProps {
  stats: {
    rating: string
    customers: string
    delivery: string
    satisfaction: string
  }
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Pelanggan Puas, Kami Senang
          </h2>
          <p className="text-lg text-gray-500">Statistik yang membuktikan komitmen kami pada kualitas.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <StatItem icon={<Star className="w-8 h-8" />} value={stats.rating} label="Rating Positif" />
          <StatItem icon={<Users className="w-8 h-8" />} value={stats.customers} label="Pelanggan Setia" />
          <StatItem icon={<Truck className="w-8 h-8" />} value={stats.delivery} label="Pengiriman Tepat Waktu" />
          <StatItem icon={<ThumbsUp className="w-8 h-8" />} value={stats.satisfaction} label="Kepuasan Rata-rata" />
        </div>
      </div>
    </motion.section>
  )
}