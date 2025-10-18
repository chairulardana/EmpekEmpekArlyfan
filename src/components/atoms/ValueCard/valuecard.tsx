import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface ValueCardProps {
  icon: string
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full border-[#940616]/10 hover:border-[#940616]/30 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <div className="w-12 h-1 bg-[#940616] mx-auto mb-4 rounded-full"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}