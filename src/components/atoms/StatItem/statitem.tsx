import type { ReactNode } from 'react'

interface StatItemProps {
  icon: ReactNode
  value: string
  label: string
}

export function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-[#940616] mb-2">{icon}</div>
      <div className="text-3xl lg:text-4xl font-bold text-gray-800">{value}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  )
}