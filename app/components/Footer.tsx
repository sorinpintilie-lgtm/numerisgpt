import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, ArrowRight, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image 
                src="/logo.png" 
                alt="Numeris Medical" 
                width={160} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Distribuitor exclusiv <strong>VINNO</strong> și <strong>ROESYS</strong>. 
              Partenerul tău de încredere pentru tehnologie medicală premium, service autorizat și soluții de finanțare flexibile în România.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-numeris hover:border-numeris transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-numeris hover:border-numeris transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-numeris hover:border-numeris transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Catalog */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Echipamente</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ecografe" className="flex items-center hover:text-numeris transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-numeris opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="-ml-6 group-hover:ml-0 transition-all">Ecografe VINNO</span>
                </Link>
              </li>
              <li>
                <Link href="/radiologie" className="flex items-center hover:text-numeris transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-numeris opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="-ml-6 group-hover:ml-0 transition-all">Radiologie Digitală</span>
                </Link>
              </li>
              <li>
                <Link href="/mamografie" className="flex items-center hover:text-numeris transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-numeris opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="-ml-6 group-hover:ml-0 transition-all">Mamografe Planmed</span>
                </Link>
              </li>
              <li>
                <Link href="/veterinar" className="flex items-center hover:text-numeris transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-numeris opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="-ml-6 group-hover:ml-0 transition-all">Veterinar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Support */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Suport Clienți</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/service" className="hover:text-numeris transition-colors">
                  Service & Mentenanță
                </Link>
              </li>
              <li>
                <Link href="/finantare" className="hover:text-numeris transition-colors">
                  Finanțare (Rate/Leasing)
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="hover:text-numeris transition-colors">
                  Despre Numeris
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-numeris transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Contact Showroom</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-numeris-light flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-numeris transition-colors">
                    <MapPin className="w-4 h-4 text-numeris-dark group-hover:text-white transition-colors" />
                </div>
                <span>București, Sector 3<br />Bd. Decebal nr. 5, Bloc S12 A</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-numeris-light flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-numeris transition-colors">
                    <Phone className="w-4 h-4 text-numeris-dark group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium">0786 012 177</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-numeris-light flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-numeris transition-colors">
                    <Mail className="w-4 h-4 text-numeris-dark group-hover:text-white transition-colors" />
                </div>
                <span>office@numeris.ro</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>
            © 2026 Numeris Com SRL. Toate drepturile rezervate.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <a href="https://sky.ro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-numeris transition-colors">
              <span>Crafted in the clouds by</span>
              <Image 
                src="/skyro.PNG" 
                alt="sky.ro" 
                width={60} 
                height={20} 
                className="h-5 w-auto"
              />
            </a>
            <div className="hidden md:block h-4 w-px bg-slate-300"></div>
            <div className="flex space-x-6">
              <Link href="/politica-confidentialitate" className="hover:text-numeris transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="hover:text-numeris transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/anpc" className="hover:text-numeris transition-colors">
                ANPC
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
