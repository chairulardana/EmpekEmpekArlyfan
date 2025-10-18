import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CustomBadge } from '@/components/atoms/Badge/CustomBadge'

interface ContactCTAProps {
  badgeText: string
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

export function ContactCTA({ 
  badgeText, 
  title, 
  description, 
  buttonText, 
  onButtonClick 
}: ContactCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <Card className="bg-gradient-to-r from-[#940616]/5 to-[#940616]/10 border-[#940616]/20">
        <CardContent className="p-12">
          <CustomBadge variant="secondary" className="mb-4">
            {badgeText}
          </CustomBadge>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-[#940616] hover:bg-[#7d0512] text-white font-semibold px-8 py-3"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}