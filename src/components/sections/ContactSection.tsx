import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/gtagHelper";

const whatsappNumber = "5511961623798";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para locação de guindauto.")}`;

const ContactSection: React.FC = () => {
  const handleWhatsappClick = () => {
    trackEvent('click', 'whatsapp_contato_cta', 'Seção Contato CTA');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          title="Fale Conosco Agora"
          subtitle="Priorizamos a agilidade! Entre em contato diretamente pelo WhatsApp para um orçamento rápido e sem compromisso."
        />

        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Atendimento Imediato via WhatsApp
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Clique no botão abaixo para iniciar uma conversa e detalhar seu projeto.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
          >
            <Button
              size="lg"
              className={cn(
                "bg-secondary hover:bg-secondary/90 text-primary font-bold py-7 px-10 text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg",
                "flex items-center gap-3 mx-auto"
              )}
            >
              <MessageCircle size={24} /> Chamar no WhatsApp
            </Button>
          </a>
          
          <p className="mt-6 text-primary font-semibold text-xl">
            (11) 96162-3798
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;