import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Logo from "@/assets/LogoEmpekEmpek.png";
import { CartIcon } from "@/components/atoms/CartIcon/carticon";
import { useCart } from "@/contexts/CartContext";

export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, openCart } = useCart();

  const menuItems = [
    { label: "BERANDA", path: "/" },
    { label: "PRODUK", path: "/product" },
    { label: "TENTANG", path: "/tentang" },
    { label: "ULASAN", path: "/ulasan" },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate({ to: "/keranjang" });
    setIsMobileMenuOpen(false);
  };

  const handleCartIconClick = () => {
    openCart();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#940616] shadow-lg py-3 px-4 md:py-4 md:px-8 flex items-center justify-between transition-shadow duration-300">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div
        className="flex items-center gap-3 cursor-pointer group relative z-20"
        onClick={() => navigate({ to: "/" })}
      >
        <div className="relative">
          <div className="bg-white rounded-full p-1.5">
            <img
              src={Logo}
              alt="Logo Empek Empek"
              className="h-10 w-10 md:h-12 md:w-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 rounded-full"
            />
          </div>
          <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold text-white tracking-tight">
            Empek Empek Arlyfan
          </span>
          <span className="text-white/80 text-xs md:text-sm font-medium hidden sm:block">
            Rasa Autentik Palembang
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 md:gap-6 absolute left-1/2 transform -translate-x-1/2 z-10">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="relative py-2 text-white hover:text-white/90 transition-all duration-300 group font-bold"
          >
            <span className="relative z-10 text-base md:text-lg whitespace-nowrap tracking-wide bg-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-[#940616] transition-all duration-300 shadow-lg hover:shadow-xl">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-4 relative z-20">
        <CartIcon onClick={handleCartIconClick} />
        
        <button 
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      <div className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)}></div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-[#940616] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-16 px-4">
          <div className="flex items-center gap-3 mb-6 px-2 border-b border-white/20 pb-4">
            <div className="bg-white rounded-full p-1">
              <img
                src={Logo}
                alt="Logo Empek Empek"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-white leading-tight whitespace-nowrap">
                Empek Empek Arlyfan
              </span>
              <span className="text-white/70 text-xs font-medium">
                Rasa Autentik Palembang
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="relative py-4 px-4 text-white font-bold hover:bg-white hover:text-[#940616] rounded-lg transition-all duration-200 group text-left text-lg tracking-wide bg-white/20 hover:shadow-lg"
              >
                <span className="relative z-10">
                  {item.label}
                </span>
              </button>
            ))}
            
            <button
              onClick={handleCartClick}
              className="relative py-4 px-4 text-white font-bold hover:bg-white hover:text-[#940616] rounded-lg transition-all duration-200 group text-left text-lg tracking-wide bg-white/20 hover:shadow-lg flex items-center justify-between"
            >
              <span className="relative z-10">
                KERANJANG
              </span>
              {cart.totalItems > 0 && (
                <span className="bg-white text-[#940616] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cart.totalItems}
                </span>
              )}
            </button>
          </div>
          <div className="mt-auto pb-6 pt-4 text-center border-t border-white/20">
            <div className="text-white/50 text-xs">
              © 2025 Empek Empek Arlyfan
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-40"></div>
    </nav>
  );
}