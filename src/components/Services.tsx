import { Shield, Code, Lock, Zap, Target, Users } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Pentest & Auditoria',
    description: 'Testes de penetração avançados e auditorias completas de segurança para identificar vulnerabilidades antes dos atacantes.',
    features: ['Testes de Penetração', 'Auditoria de Código', 'Análise de Vulnerabilidades']
  },
  {
    icon: Lock,
    title: 'Segurança de Redes',
    description: 'Proteção completa de infraestrutura com monitoramento 24/7, detecção de ameaças e resposta a incidentes.',
    features: ['Firewall Avançado', 'IDS/IPS', 'Monitoramento Contínuo']
  },
  {
    icon: Code,
    title: 'Desenvolvimento Seguro',
    description: 'Criação de software com segurança integrada desde o início, seguindo as melhores práticas do mercado.',
    features: ['DevSecOps', 'Code Review', 'Arquitetura Segura']
  },
  {
    icon: Target,
    title: 'SOC as a Service',
    description: 'Centro de operações de segurança completo, com equipe especializada monitorando sua infraestrutura.',
    features: ['Análise de Ameaças', 'Resposta a Incidentes', 'Relatórios Detalhados']
  },
  {
    icon: Users,
    title: 'Treinamento',
    description: 'Capacitação de equipes em segurança da informação e desenvolvimento seguro de aplicações.',
    features: ['Workshops', 'Certificações', 'Awareness']
  },
  {
    icon: Zap,
    title: 'Consultoria',
    description: 'Assessoria estratégica em cybersegurança, compliance e transformação digital segura.',
    features: ['LGPD/GDPR', 'ISO 27001', 'Estratégia de Segurança']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Nossos Serviços</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Soluções <span className="text-cyan-400">Completas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços em cybersegurança e desenvolvimento de software para proteger e impulsionar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-lg transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}