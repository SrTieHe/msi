import { Shield, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUzNDA2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
      </div>

      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Segurança & Inovação</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
            Protegendo o Futuro
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Onde vulnerabilidades não são uma opção. Inteligência em software e segurança avançada para proteger o núcleo do seu negócio.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToServices}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-md transition-all flex items-center gap-2 group"
            >
              Nossos Serviços
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-cyan-500/50 hover:bg-cyan-500/10 px-8 py-3 rounded-md transition-all"
            >
              Fale com Especialista
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cyan-500/20">
            <div>
              <div className="text-3xl text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-slate-400">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-3xl text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Monitoramento</div>
            </div>
            <div>
              <div className="text-3xl text-cyan-400 mb-2">100+</div>
              <div className="text-sm text-slate-400">Clientes Protegidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
