"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, User, Menu, Phone } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart(); 

  return (
    <nav className="relative lg:sticky lg:top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm lg:mt-[var(--promo-height)] mt-0">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2">
        <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
          <div className="hidden md:flex space-x-6">
            <span className="flex items-center"><span className="text-numeris mr-1">🚀</span> Livrare Gratuită peste 500 RON</span>
            <span className="flex items-center"><span className="text-numeris mr-1">🛡️</span> Garanție 24 Luni</span>
            <span className="flex items-center"><span className="text-numeris mr-1">💳</span> Plata în Rate / Leasing</span>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <a href="tel:+40722123456" className="hover:text-numeris transition-colors flex items-center">
              <Phone className="w-3 h-3 mr-1" /> +40 722 123 456
            </a>
            <Link href="/contact" className="hover:text-numeris transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-24 py-4">
        <div className="flex items-center justify-between gap-8">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 flex items-center">
             <Image 
               src="/logo.png" 
               alt="Numeris Medical" 
               width={180} 
               height={50} 
               className="h-10 w-auto object-contain"
               priority 
             />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Caută ecografe, sonde, consumabile..." 
              className="w-full pl-4 pr-12 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-numeris focus:border-numeris outline-none transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-numeris-light text-numeris-dark rounded-md hover:bg-numeris hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* DISABLED ACCOUNT BUTTON */}
            <div className="flex flex-col items-center text-slate-300 cursor-not-allowed select-none">
              <User className="w-6 h-6 mb-0.5" />
              <span className="text-xs font-medium">Cont</span>
            </div>
            
            <Link href="/cart" className="flex flex-col items-center text-slate-600 hover:text-numeris transition-colors group relative">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 mb-0.5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-numeris text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">Coș</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-t border-slate-100 hidden lg:block bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <ul className="flex space-x-8 text-sm font-medium text-slate-700 py-3">
            <li className="flex items-center text-numeris font-bold cursor-pointer hover:text-numeris-dark"><Menu className="w-4 h-4 mr-2"/> Toate Produsele</li>
            <li className="hover:text-numeris cursor-pointer transition-colors">Ecografe Staționare</li>
            <li className="hover:text-numeris cursor-pointer transition-colors">Ecografe Portabile</li>
            <li className="hover:text-numeris cursor-pointer transition-colors">Sonde & Accesorii</li>
            <li className="hover:text-numeris cursor-pointer transition-colors">Radiologie</li>
            <li className="hover:text-numeris-dark cursor-pointer text-red-500 font-semibold">Oferte Speciale %</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
