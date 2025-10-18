import { motion } from 'framer-motion'
import { StoryCard } from '@/components/molecules/StoryCard/storycard'

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface StoryItem {
  title: string
  content: string | string[]
}

interface StorySectionProps {
  stories: StoryItem[]
}

export function StorySection({ stories }: StorySectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {stories.map((story, index) => (
        <StoryCard
          key={story.title}
          title={story.title}
          content={story.content}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  )
}