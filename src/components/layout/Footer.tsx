import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { trackEvent } from "@/lib/gtagHelper";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Links Rápidos",
      items: [
        { name: "Home", href: "#home" },
        { name: "Serviços", href: "#servicos" },
        { name: "Guindautos Munck", href: "#guindauto" },
        { name: "Contato", href: "#contato" },
      ],
    },
    {
      title: "Serviços",
      items: [
        { name: "Locação 5T e 10T", href: "#servicos" },
        { name: "Serviços para Obras", href: "#servicos" },
        { name: "Instalações Industriais", href: "#servicos" },
        { name: "Locação Mensal", href: "#servicos" },
      ],
    },
    {
      title: "Área de Atendimento",
      items: [
        { name: "São Paulo", href: "#contato" },
        { name: "Grande São Paulo", href: "#contato" },
        { name: "Suzano e Região", href: "#contato" },
      ],
    },
  ];

  const handleWhatsappClick = () => {
    trackEvent('click', 'whatsapp', 'Link do Rodapé');
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 border-b border-gray-700 pb-10">
          {/* Coluna 1: SOCRAM Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              SOCRAM
            </h3>
            <p className="text-gray-300">
              Especialistas em içamento e movimentação de cargas médias e pesadas em São
              Paulo e Grande São Paulo.
            </p>
          </div>

          {/* Colunas de Links */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Informações de Contato Detalhadas */}
        <div className="bg-primary/90 p-6 rounded-lg mb-10">
          <h3 className="text-center text-2xl font-bold mb-6 text-secondary">
            Informações de Contato
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="text-secondary mb-2" size={24} />
              <h4 className="font-medium">Endereço</h4>
              <p className="text-sm text-gray-300">
                Rua Guilherme Garijo, 1265 - Jardim Santa Ines
                <br />
                Suzano - SP, 08695-010
              </p>
            </div>
            <div className="flex flex-col items-center col-span-1 lg:col-span-2">
              <Phone className="text-secondary mb-2" size={24} />
              <h4 className="font-medium">Telefone de Contato</h4>
              <p className="text-sm text-gray-300">
                <a
                  href="https://wa.me/5511961623798"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappClick}
                  className="hover:text-secondary text-lg font-bold"
                >
                  (11) 96162-3798 (WhatsApp)
                </a>
                <br />
                <span className="text-xs">(Atendimento prioritário via WhatsApp)</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="text-secondary mb-2" size={24} />
              <h4 className="font-medium">E-mail</h4>
              <p className="text-sm text-gray-300">munck1services@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-secondary mb-2" size={24} />
              <h4 className="font-medium">Horário</h4>
              <p className="text-sm text-gray-300">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SOCRAM - Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;