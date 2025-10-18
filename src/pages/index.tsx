import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {  AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/molecules/HeroSection/herosection'
import FeaturesSection from '@/components/molecules/FeaturesSection/featuresection'
import ProductsSection from '@/components/molecules/ProductsSection/ProductsSection'
import { Footer } from '@/components/organisms/footer/footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})




function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-gray-50 text-gray-800">
      <AnimatePresence>
        {isVisible && (
          <>
            <HeroSection />
            <FeaturesSection />
            <ProductsSection />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}



export default HomePage