import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: { 
    icon: string; 
    title: string; 
    description: string;
    highlighted?: boolean; 
  }; 
  index: number 
}) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        backgroundColor: feature.highlighted ? "#fff3f3" : "#ffffff",
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className={`bg-gray-50 p-8 rounded-2xl text-center transition-all duration-300 ${
        feature.highlighted ? 'border-2 border-[#940616]' : ''
      }`}
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-5xl mb-4 flex items-center justify-center"
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  )
}

export default FeatureCard