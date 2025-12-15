import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o corpo do email
    const subject = `Contato de ${formData.name} - MOSA Intelligence`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Empresa: ${formData.company}\n` : ''}\nMensagem:\n${formData.message}`;
    
    // Criar o link mailto
    const mailtoLink = `mailto:mosaintelligence@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir o cliente de email
    window.location.href = mailtoLink;
    
    // Limpar o formulário
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Entre em Contato</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Vamos <span className="text-cyan-400">Conversar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Pronto para proteger seu negócio? Entre em contato conosco e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg mb-2">Email</h3>
              <p className="text-slate-400 text-sm">mosaintelligence@gmail.com</p>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg mb-2">Telefone</h3>
              <p className="text-slate-400 text-sm">+55 (16) 99138-5665</p>
              <p className="text-slate-400 text-sm">Segunda a Sexta: 9h às 18h</p>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg mb-2">Localização</h3>
              <p className="text-slate-400 text-sm">São Paulo, SP</p>
              <p className="text-slate-400 text-sm">Brasil</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div id="fale-conosco" className="scroll-mt-20">
              <h3 className="text-2xl mb-6">
                <span className="text-cyan-400">Fale Conosco</span>
              </h3>
              <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm mb-2">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2 group"
                >
                  Enviar Mensagem
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
