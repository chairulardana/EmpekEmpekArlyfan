import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface StoryCardProps {
  title: string
  content: string | string[]
  delay?: number
}

export function StoryCard({ title, content, delay = 0 }: StoryCardProps) {
  return (
    <Card className="border-[#940616]/10">
      <CardContent className="p-6 space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-[#940616] rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>
          </div>
          
          {Array.isArray(content) ? (
            <ul className="text-gray-700 leading-relaxed space-y-3">
              {content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-[#940616] rounded-full mt-2 mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 leading-relaxed text-lg">
              {content}
            </p>
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}