import { FileText } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "VINNO E35",
    category: "Staționar • Cardiologie",
    desc: "Performanță excepțională pentru diagnostic cardiac și vascular. Include sondă Phased Array.",
    features: ["Single Crystal", "4D Live", "Workflow Automat"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "VINNO 6",
    category: "Portabil • Point of Care",
    desc: "Mobilitate totală pentru urgențe și vizite la domiciliu. Autonomie baterie 4 ore.",
    features: ["Greutate 3.5kg", "Boot < 30s", "Carcasă Magneziu"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "DigiRad X-Pro",
    category: "Radiologie • Digital",
    desc: "Sistem digital direct cu doză redusă de radiații și procesare AI a imaginii.",
    features: ["Detector Wireless", "Soft Veterinar", "Instalare 2h"],
    image: "/api/placeholder/400/300"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Echipamente Recomandate</h2>
          <p className="text-slate-500">
            Selectăm riguros tehnologia. Doar dispozitive care trec testele noastre de fiabilitate ajung în portofoliu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-slate-200 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 bg-white">
              
              {/* Product Header */}
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">{product.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{product.desc}</p>
              </div>

              {/* Product Image */}
              <div className="aspect-[4/3] bg-slate-50 rounded-xl mb-6 relative overflow-hidden grid place-items-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain object-center block"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300"></div>
              </div>

              {/* Specs Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <FileText className="w-4 h-4 mr-2"/> Fișă Tehnică
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors">
                  Solicită Demo
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
