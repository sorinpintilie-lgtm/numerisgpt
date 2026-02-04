import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-8 pb-20 lg:pt-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Tehnologie Premium. <br/>
              <span className="text-numeris">Diagnostic Precis.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Unic importator <strong>VINNO</strong> și <strong>ROESYS</strong> în România. 
              Peste 20 de ani de experiență în imagistică medicală, service autorizat și aplicații clinice avansate (FlyinSono).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-numeris rounded-lg hover:bg-numeris-dark shadow-xl shadow-numeris/20 hover:shadow-2xl hover:shadow-numeris/30 transform hover:-translate-y-0.5">
                Configurează VINNO G86
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-numeris hover:border-numeris/50 shadow-lg hover:shadow-xl">
                Catalog Radiologie
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 hidden lg:grid grid-cols-3 gap-4">
              <div className="flex items-center text-sm text-slate-500 font-medium">
                <div className="w-10 h-10 rounded-full bg-numeris/10 flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-numeris" />
                </div>
                <span className="hidden sm:inline">Service Autorizat</span>
              </div>
              <div className="flex items-center text-sm text-slate-500 font-medium">
                <div className="w-10 h-10 rounded-full bg-numeris/10 flex items-center justify-center mr-3">
                  <Star className="w-5 h-5 text-numeris" />
                </div>
                <span className="hidden sm:inline">Buy-Back Ecografe</span>
              </div>
              <div className="flex items-center text-sm text-slate-500 font-medium">
                <div className="w-10 h-10 rounded-full bg-numeris/10 flex items-center justify-center mr-3">
                  <Truck className="w-5 h-5 text-numeris" />
                </div>
                <span className="hidden sm:inline">Training Aplicații</span>
              </div>
            </div>
          </div>

          {/* Square Hero Card - Links to Product 1 */}
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            {/* Square Card */}
            <Link href="/products/1" className="block relative bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:border-numeris/30 w-full max-w-md aspect-square">
              {/* Card Header Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-numeris via-numeris-light to-blue-500 z-10"></div>
              
              {/* Image Container */}
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex items-center justify-center">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://numeris.ro/wp-content/uploads/2021/11/ecograf-stationar-vinno-g86-900.jpg" 
                    alt="VINNO G86"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Product Name Overlaid on Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">Ecograf VINNO G86</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
