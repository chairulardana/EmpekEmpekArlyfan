import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ReviewCTAProps {
  onMenuClick?: () => void
}

export function ReviewCTA({ onMenuClick }: ReviewCTAProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 text-5xl">💌</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bagaimana Pengalaman Anda?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sudah mencoba empek-empek kami? Bagikan pengalaman Anda dan bantu pelanggan lain menemukan cita rasa autentik Palembang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#940616] text-[#940616] hover:bg-[#940616] hover:text-white px-8 py-6 text-base"
                onClick={onMenuClick}
              >
                Lihat Semua Menu
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}