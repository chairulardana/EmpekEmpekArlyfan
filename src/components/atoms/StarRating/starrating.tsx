import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {starValue <= rating ? (
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            ) : starValue - 0.5 <= rating ? (
              <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />
            ) : (
              <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
            )}
          </span>
        );
      })}
    </div>
  )
}