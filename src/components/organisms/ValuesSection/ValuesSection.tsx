import { motion } from 'framer-motion'
import { CustomBadge } from '@/components/atoms/Badge/CustomBadge'
import { ValueCard } from '@/components/atoms/ValueCard/valuecard'

interface Value {
  icon: string
  title: string
  description: string
}

interface ValuesSectionProps {
  badgeText: string
  title: string
  values: Value[]
}

export function ValuesSection({ badgeText, title, values }: ValuesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <div className="text-center mb-12">
        <CustomBadge variant="default" className="mb-4">
          {badgeText}
        </CustomBadge>
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <ValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </motion.section>
  )
}