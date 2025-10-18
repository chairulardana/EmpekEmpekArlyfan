import FeatureCard from "@/components/atoms/FeatureCard/featurecard"
import SectionHeader from "@/components/atoms/SectionHeader/sectionheader"
import { motion } from "framer-motion"
import featuresData from './data/features.json'

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function FeaturesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturesSection