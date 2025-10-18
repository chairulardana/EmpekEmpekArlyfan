import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StarRating } from '@/components/atoms/StarRating/starrating'

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="h-full">
      <Card className="border-slate-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 h-full bg-white">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-100"
              />
              <div>
                <h3 className="font-bold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <StarRating rating={review.rating} />
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
            "{review.comment}"
          </p>
          {review.verified && (
            <Badge variant="secondary" className="bg-rose-100 text-[#940616] w-fit">
              Pembelian Terverifikasi
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  )
}