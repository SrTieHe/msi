import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - Movido para primeiro em mobile */}
          <div className="lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 text-sm tracking-widest uppercase">Sobre Nós</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              Especialistas em <span className="text-cyan-400">Cybersegurança</span>
            </h2>
            
            <p className="text-slate-300 mb-6">
              A MOSA Intelligence nasceu da necessidade de oferecer soluções completas e inovadoras em segurança da informação. Nossa equipe é formada por especialistas certificados e apaixonados por tecnologia.
            </p>
            
            <p className="text-slate-400 mb-8">
              Combinamos expertise técnica com visão estratégica para entregar soluções que vão além da simples proteção. Desenvolvemos softwares seguros, realizamos testes de penetração avançados e fornecemos consultoria especializada para empresas de todos os portes.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4">
                <div className="text-2xl text-cyan-400 mb-2">ISO 27001</div>
                <div className="text-sm text-slate-400">Certificado</div>
              </div>
              <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4">
                <div className="text-2xl text-cyan-400 mb-2">LGPD</div>
                <div className="text-sm text-slate-400">Compliance</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-cyan-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY1MzUyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Network Security"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20 pt-12 border-t border-cyan-500/20">
          <h3 className="text-center text-2xl mb-8 text-slate-400">Tecnologias & Frameworks</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg">Python</div>
            <div className="text-lg">React</div>
            <div className="text-lg">Node.js</div>
            <div className="text-lg">Kubernetes</div>
            <div className="text-lg">AWS</div>
            <div className="text-lg">Azure</div>
            <div className="text-lg">Metasploit</div>
            <div className="text-lg">Burp Suite</div>
          </div>
        </div>
      </div>
    </section>
  );
}