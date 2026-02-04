export default function LeadForm() {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background decoration - Teal Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-numeris rounded-full blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Nu ești sigur ce să alegi?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Consultanții noștri sunt ingineri medicali. Discutăm despre buget, cazuistică și opțiuni de finanțare.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-200">
                <div className="w-8 h-8 rounded-full bg-numeris flex items-center justify-center mr-4 text-white font-bold shadow-lg shadow-numeris/30">1</div>
                Analiză gratuită a nevoilor clinicii
              </li>
              <li className="flex items-center text-slate-200">
                <div className="w-8 h-8 rounded-full bg-numeris flex items-center justify-center mr-4 text-white font-bold shadow-lg shadow-numeris/30">2</div>
                Demo fizic în locația ta
              </li>
              <li className="flex items-center text-slate-200">
                <div className="w-8 h-8 rounded-full bg-numeris flex items-center justify-center mr-4 text-white font-bold shadow-lg shadow-numeris/30">3</div>
                Ofertă personalizată în 24h
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-numeris">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Solicită Consultanță Gratuită</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nume</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-numeris outline-none" placeholder="Dr. Andrei Popescu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
                  <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-numeris outline-none" placeholder="07xx xxx xxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mesaj (Opțional)</label>
                <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-numeris outline-none h-24" placeholder="Mă interesează un ecograf portabil..."></textarea>
              </div>

              <button type="submit" className="w-full bg-numeris hover:bg-numeris-dark text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-numeris/25">
                Trimite Solicitarea
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
