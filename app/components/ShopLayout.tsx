"use client";
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Filter, ShoppingCart, X, SlidersHorizontal } from 'lucide-react';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';

export default function ShopLayout() {
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState(50000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (isFilterOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isFilterOpen]);

  // Filter Logic
  const allCategories = Array.from(new Set(products.map(p => p.category)));
  const allBrands = Array.from(new Set(products.map(p => p.brand)));

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (product.price !== null && product.price > priceRange) return false;
      return true;
    });
  }, [selectedCategories, selectedBrands, priceRange]);

  const toggleCategory = (cat: string) => setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  const toggleBrand = (brand: string) => setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  const resetFilters = () => { setSelectedCategories([]); setSelectedBrands([]); setPriceRange(50000); };

  const FilterContent = () => (
    <div className="space-y-8">
       {/* Category Filter */}
       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center">
            <Filter className="w-4 h-4 mr-2"/> Categorie
          </h3>
          <div className="space-y-3">
            {allCategories.map(cat => (
              <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-numeris focus:ring-numeris w-5 h-5" 
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="text-sm text-slate-600 group-hover:text-numeris transition-colors">
                  {cat} <span className="text-slate-400 text-xs">({products.filter(p => p.category === cat).length})</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Buget Maxim (RON)</h3>
          <input 
            type="range" 
            min="0" 
            max="50000" 
            step="1000"
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-numeris"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>0</span>
            <span className="font-bold text-numeris">{priceRange.toLocaleString()} RON</span>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Brand</h3>
          <div className="space-y-2">
            {allBrands.map(brand => (
               <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
               <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-numeris focus:ring-numeris w-5 h-5"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
               />
               <span className="text-sm text-slate-600 group-hover:text-numeris transition-colors">{brand}</span>
             </label>
            ))}
          </div>
        </div>
    </div>
  );

  return (
    <section className="py-8 lg:py-12 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="hidden lg:block w-64 flex-shrink-0">
             <FilterContent />
          </aside>

          <div className="flex-1">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-row justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-sm text-slate-500">
                  Afișez <strong>{filteredProducts.length}</strong> din <strong>{products.length}</strong> produse
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 hidden sm:inline">Sortare:</span>
                  <select className="text-sm border-none bg-slate-50 rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-numeris outline-none cursor-pointer">
                    <option>Recomandate</option>
                    <option>Preț Crescător</option>
                  </select>
                </div>
              </div>

              <div className="lg:hidden grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setIsFilterOpen(true)}
                  className="flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-bold py-3 rounded-xl shadow-sm hover:bg-slate-50"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtre
                </button>
                <button 
                  onClick={resetFilters}
                  disabled={selectedCategories.length === 0 && selectedBrands.length === 0}
                  className="flex items-center justify-center bg-white border border-slate-300 text-red-500 font-bold py-3 rounded-xl shadow-sm hover:bg-red-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                  <X className="w-4 h-4 mr-2" />
                  Șterge Filtre
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-numeris/50 transition-all duration-300 group flex flex-col h-full">
                  <Link href={`/products/${product.id}`} className="relative aspect-[4/3] bg-white border-b border-slate-50 cursor-pointer">
                    <div className="absolute inset-0 p-6 grid place-items-center">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center block" />
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-slate-500 font-medium mb-1">{product.category}</div>
                    <Link href={`/products/${product.id}`}>
                        <h3 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-numeris transition-colors text-lg cursor-pointer">
                        {product.name}
                        </h3>
                    </Link>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.price ? (
                            <span className="text-lg font-bold text-slate-900">{product.price} {product.currency}</span>
                        ) : (
                          <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">Preț la cerere</span>
                        )}
                      </div>
                      {product.price ? (
                        <button onClick={() => addToCart(product)} className="bg-numeris hover:bg-numeris-dark text-white p-3 rounded-lg transition-colors shadow-lg shadow-numeris/20">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      ) : (
                        <Link href={`/products/${product.id}`} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase">
                          Detalii
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
          <div className="absolute inset-x-0 bottom-0 h-[85vh] bg-slate-50 rounded-t-3xl shadow-2xl flex flex-col transform transition-transform duration-300 ease-out">
            <div className="px-6 py-4 bg-white border-b border-slate-200 rounded-t-3xl flex justify-between items-center flex-shrink-0">
              <h2 className="text-lg font-bold text-slate-900">Filtrează Produse</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterContent />
            </div>
            <div className="p-6 bg-white border-t border-slate-200 safe-area-bottom">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-numeris text-white font-bold py-4 rounded-xl shadow-lg shadow-numeris/20 active:scale-[0.98] transition-transform"
              >
                Aplică Filtre ({filteredProducts.length} rezultate)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
