import { createLazyFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { ReviewHeader } from '@/components/organisms/ReviewHeader/reviewheader'
import { ReviewGrid } from '@/components/organisms/ReviewGrid/reviewgrid'
import { StatsSection } from '@/components/organisms/StatsSection/statssection'
import { ReviewCTA } from '@/components/organisms/ReviewCTA/reviewcta'
import reviewsData from './data/reviews-data.json'
import AvatarPria from '@/assets/avatarpria.webp'
import AvatarWanita from '@/assets/avatarwanita.jpg'

const avatarMap: { [key: string]: string } = {
  '/src/assets/avatarpria.webp': AvatarPria,
  '/src/assets/avatarwanita.jpg': AvatarWanita
}

// Process reviews with actual image imports
const processedReviews = reviewsData.reviews.map(review => ({
  ...review,
  avatar: avatarMap[review.avatar] || review.avatar
}))

export const Route = createLazyFileRoute('/ulasan/')({
  component: UlasanPage,
})

function UlasanPage() {
  const navigate = useNavigate()
  
  const averageRating = (processedReviews.reduce((acc, r) => acc + r.rating, 0) / processedReviews.length).toFixed(1)
  
  const handleMenuClick = () => {
    navigate({ to: '/product' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ReviewHeader 
        averageRating={averageRating}
        totalReviews={processedReviews.length}
      />
      
      <ReviewGrid reviews={processedReviews} />
      
      <StatsSection stats={reviewsData.stats} />
      
      <ReviewCTA onMenuClick={handleMenuClick} />
    </div>
  )
}

export default UlasanPage