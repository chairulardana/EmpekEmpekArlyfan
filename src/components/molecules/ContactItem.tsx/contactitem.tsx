import { motion } from 'framer-motion'

interface ContactItemProps {
  icon: string
  text: string
  align?: "left" | "right" | "center"
}

export function ContactItem({ icon, text, align = "left" }: ContactItemProps) {
  const getAlignmentClasses = () => {
    switch (align) {
      case "right":
        return "flex-row-reverse text-right"
      case "center":
        return "justify-center text-center"
      default:
        return "justify-start text-left"
    }
  }

  const getTextAlignment = () => {
    switch (align) {
      case "right":
        return "text-right"
      case "center":
        return "text-center"
      default:
        return "text-left"
    }
  }

  return (
    <motion.div 
      whileHover={{ x: align === "right" ? -5 : align === "center" ? 0 : 5 }}
      className={`flex items-start space-x-3 text-white/80 ${getAlignmentClasses()}`}
    >
      {/* Icon - always show on left for mobile readability */}
      <span className="text-lg mt-0.5 flex-shrink-0">
        {icon}
      </span>
      
      <span className={`flex-1 leading-tight text-sm md:text-base ${getTextAlignment()}`}>
        {text}
      </span>
    </motion.div>
  )
}