import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface OwnerProfileProps {
  image: string
  name: string
  role: string
  description: string
}

export function OwnerProfile({ image, name, role, description }: OwnerProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center lg:text-left space-y-6"
    >
      <Card className="border-2 border-[#940616]/10 overflow-hidden">
        <CardContent className="p-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={`Owner ${name}`}
            className="w-full h-auto object-cover"
          />
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#940616]/10 text-[#940616] text-sm font-medium mb-3">
            {role}
          </div>
          <p className="text-gray-600">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}