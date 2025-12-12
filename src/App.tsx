import { Shield, Code, Lock, Zap, Target, Users, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Logo } from './components/Logo';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-xl tracking-tight">
                MOSA <span className="text-cyan-400">Intelligence</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contato</button>
              <button onClick={() => scrollToSection('fale-conosco')} className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md transition-colors">
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/20">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-cyan-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-cyan-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-cyan-400 transition-colors">Contato</button>
              <button onClick={() => scrollToSection('fale-conosco')} className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-6 h-6" />
                <span className="tracking-tight">MOSA Intelligence</span>
              </div>
              <p className="text-slate-400 text-sm">
                Soluções avançadas em desenvolvimento de software e cybersegurança.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>mosaintelligence@gmail.com</li>
                <li>+55 (16) 99138-5665</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            © 2025 MOSA Intelligence. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}