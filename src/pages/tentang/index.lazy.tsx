import { createLazyFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AboutHeader } from '@/components/organisms/AboutHeader/AboutHeader' 
import { OwnerProfile } from '@/components/molecules/OwnerProfile/ownerprofile'
import { StorySection } from '@/components/molecules/StorySection/storysection' 
import { ValuesSection } from '@/components/organisms/ValuesSection/ValuesSection'
import { ContactCTA } from '@/components/organisms/ContactCTA/ContactCTA'
import OwnerAvatar from '@/assets/avatars.png'
import storiesData from './data/about-stories.json'
import valuesData from './data/about-values.json'

export const Route = createLazyFileRoute('/tentang/')({
  component: AboutPage,
})

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function AboutPage() {


  return (
    <div className="min-h-screen bg-white pt-20">
      <AboutHeader
        badgeText="Tentang Empek Empek Arlyfan"
        title="Cerita Kami"
        description="Mengenal lebih dekat passion dan dedikasi kami dalam melestarikan cita rasa autentik Palembang"
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24"
        >
          <OwnerProfile
            image={OwnerAvatar}
            name="Arlyfan"
            role="Founder & Owner"
            description="Pecinta kuliner tradisional yang berdedikasi melestarikan cita rasa autentik empek-empek Palembang dengan resep turun-temurun keluarga"
          />

          <StorySection stories={storiesData.stories} />
        </motion.div>

        <div className="mb-24">
          <ValuesSection
            badgeText="Nilai-Nilai"
            title="Yang Kami Pegang Teguh"
            values={valuesData.values}
          />
        </div>

    
        <div className="mt-16">
          <ContactCTA
           
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage