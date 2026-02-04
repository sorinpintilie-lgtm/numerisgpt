"use client";
import Link from 'next/link';
import { Trash2, ArrowLeft, ShieldCheck, ShoppingCart, Plus, Minus } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useCart } from '@/app/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const vat = subtotal * 0.19;
  const total = subtotal + vat;

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-24 py-8 lg:py-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 lg:mb-8">Coșul de Cumpărături</h1>

        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* CART ITEMS LIST */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm relative">
                  
                  {/* Remove Button (Absolute on Mobile, Standard on Desktop) */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-3 right-3 sm:static p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  {/* Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2 self-center sm:self-auto">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left w-full">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{item.name}</h3>
                    <div className="text-xs text-slate-500 mb-3 sm:mb-0">
                      Preț unitar: <span className="font-medium text-slate-700">{item.price} RON</span>
                    </div>
                  </div>

                  {/* Controls Container (Qty + Total) */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 border-t border-slate-100 pt-3 sm:border-0 sm:pt-0">
                    
                    {/* Quantity */}
                    <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="p-2 hover:bg-slate-200 text-slate-600 rounded-l-lg transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold bg-white h-full flex items-center justify-center py-2 border-x border-slate-300">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="p-2 hover:bg-slate-200 text-slate-600 rounded-r-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className="text-right sm:w-28">
                      <div className="font-bold text-slate-900 text-lg">{(item.price * item.quantity).toLocaleString()} <span className="text-xs">RON</span></div>
                    </div>
                  </div>

                </div>
              ))}
              
              <Link href="/" className="inline-flex items-center text-numeris font-semibold hover:underline mt-4 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Continuă Cumpărăturile
              </Link>
            </div>

            {/* ORDER SUMMARY (Sticky on Desktop, Bottom on Mobile) */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Sumar Comandă</h2>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>{subtotal.toLocaleString()} RON</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>TVA (19%)</span>
                    <span>{vat.toFixed(2)} RON</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-numeris">{total.toLocaleString()} RON</span>
                  </div>
                </div>

                <button className="w-full bg-numeris hover:bg-numeris-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-numeris/25 transition-all mb-4">
                  Finalizează Comanda
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 py-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4" /> Plată 100% Securizată
                </div>
              </div>
            </div>

          </div>
        ) : (
          // EMPTY CART
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 mx-4 lg:mx-0">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-slate-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Coșul tău este gol</h2>
            <p className="text-slate-500 mb-8 text-center px-4">Nu ai adăugat încă niciun produs.</p>
            <Link href="/" className="px-8 py-3 bg-numeris text-white font-bold rounded-xl hover:bg-numeris-dark transition-colors shadow-lg shadow-numeris/20">
              Vezi Oferta Noastră
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
