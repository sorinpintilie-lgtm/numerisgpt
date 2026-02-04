import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopLayout from './components/ShopLayout';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
       <Navbar />
       <Hero />
       <ShopLayout />
       <LeadForm />
       <Footer />
    </main>
  )
}
