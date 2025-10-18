import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { ContactItem } from "@/components/molecules/ContactItem.tsx/contactitem";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Beranda", path: "/" },
    { label: "Produk", path: "/product" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Ulasan", path: "/ulasan" },
  ];

  const handleQuickLinkClick = (path: string) => {
    navigate({ to: path });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#940616] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Brand Section - Mobile */}
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Empek Empek Arlyfan
              </h3>
              <p className="text-white/80 leading-relaxed text-base px-2">
                Menyajikan kelezatan empek-empek Palembang asli dengan cita rasa
                tradisional yang telah diwariskan turun-temurun.
              </p>
            </motion.div>

            {/* Quick Links - Mobile */}
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {quickLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleQuickLinkClick(link.path)}
                    className="text-white/80 hover:text-white transition-colors py-2 px-3 bg-white/10 rounded-lg text-sm font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Section - Mobile */}
            <motion.div 
              variants={fadeInUp}
              className="text-center bg-white/5 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-4">
                <ContactItem
                  icon="📍"
                  text="Jl. Palembang Raya No. 123, Palembang, Sumatera Selatan"
                  align="center"
                />
                <ContactItem 
                  icon="📞" 
                  text="+62 812-3456-7890" 
                  align="center" 
                />
                <ContactItem
                  icon="✉️"
                  text="hello@empekarlyfan.com"
                  align="center"
                />
                <ContactItem
                  icon="🕒"
                  text="Buka Setiap Hari: 08.00 - 22.00 WIB"
                  align="center"
                />
              </div>
            </motion.div>

            {/* Social Media & Payment - Mobile */}
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-6"
            >

              {/* Copyright */}
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/50 text-xs">
                  © 2025 Empek Empek Arlyfan. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                    Kebijakan Privasi
                  </a>
                  <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                    Syarat Layanan
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Empek Empek Arlyfan
              </h3>
              <p className="text-white/80 leading-relaxed max-w-md">
                Menyajikan kelezatan empek-empek Palembang asli dengan cita rasa
                tradisional yang telah diwariskan turun-temurun. Setiap gigitan
                adalah kenikmatan autentik.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleQuickLinkClick(link.path)}
                    className="block text-white/70 hover:text-white transition-colors text-left w-full py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
              <div className="space-y-3">
                <ContactItem
                  icon="📍"
                  text="Jl. Palembang Raya No. 123, Palembang"
                  align="left"
                />
                <ContactItem icon="📞" text="+62 812-3456-7890" align="left" />
                <ContactItem
                  icon="✉️"
                  text="hello@empekarlyfan.com"
                  align="left"
                />
                <ContactItem
                  icon="🕒"
                  text="08.00 - 22.00 WIB"
                  align="left"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mt-8 pt-6 border-t border-white/20"
          >
            <p className="text-white/50 text-sm">
              © 2025 Empek Empek Arlyfan. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
             
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}