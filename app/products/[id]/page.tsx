"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Check, Star, Truck, ShieldCheck, Phone, ChevronRight, ShoppingCart, FileText, ArrowLeft } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('desc');

  // Find the product based on ID from URL
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-6 lg:px-24 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Produsul nu a fost găsit</h1>
          <Link href="/" className="text-numeris underline">Înapoi la magazin</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 lg:px-24 py-4">
        <div className="flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-numeris">Acasă</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Image */}
            <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img src={product.image} alt={product.name} className="max-w-full max-h-[250px] lg:max-h-[500px] object-contain" />
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12">
              <span className="bg-numeris-light text-numeris-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {product.brand}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4 mb-4 leading-tight">{product.name}</h1>
              
              <div className="mb-8">
                {product.price ? (
                  <div>
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      {product.price} <span className="text-2xl text-slate-500">{product.currency}</span>
                    </div>
                    <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-numeris hover:bg-numeris-dark text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-numeris/20 mt-6"
                    >
                        <ShoppingCart className="w-5 h-5 mr-2" /> Adaugă în Coș
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Solicită Ofertă</h3>
                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center">
                        <FileText className="w-5 h-5 mr-2" /> Cere Preț
                    </button>
                  </div>
                )}
              </div>

               {/* Specs Preview */}
               <div className="space-y-2 text-sm text-slate-600">
                  {product.specs?.map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-100 py-2">
                          <span className="font-medium">{spec.label}</span>
                          <span>{spec.value}</span>
                      </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
