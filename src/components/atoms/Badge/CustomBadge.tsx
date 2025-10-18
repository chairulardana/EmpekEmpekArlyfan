import { Badge } from '@/components/ui/badge'

interface CustomBadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary"
  className?: string
}

export const CustomBadge = ({ children, variant = "secondary", className }: CustomBadgeProps) => (
  <Badge 
    variant={variant} 
    className={`
      ${variant === "secondary" ? "bg-[#940616] text-white hover:bg-[#7d0512]" : ""}
      ${variant === "default" ? "bg-white text-[#940616] border-[#940616] hover:bg-white/90" : ""}
      ${className || ""}
    `.trim()}
  >
    {children}
  </Badge>
)