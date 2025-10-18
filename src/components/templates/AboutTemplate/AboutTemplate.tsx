import { AboutHeader } from '@/components/organisms/AboutHeader/AboutHeader'
import { OwnerSection } from '@/components/organisms/OwnerSection/OwnerSection'
import { ValuesSection } from '@/components/organisms/ValuesSection/ValuesSection'
import { ContactCTA } from '@/components/organisms/ContactCTA/ContactCTA'

export const AboutTemplate = () => (
  <div className="min-h-screen bg-white pt-20">
    <AboutHeader />
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <OwnerSection />
      <ValuesSection />
      <ContactCTA />
    </div>
  </div>
)