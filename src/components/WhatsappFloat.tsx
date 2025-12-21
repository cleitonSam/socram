import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import React from "react";
import { trackEvent } from "@/lib/gtagHelper";

const WhatsappFloat: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511961623798?text=Olá! Gostaria de mais informações sobre os serviços da SOCRAM.";

  const handleClick = () => {
    trackEvent('click', 'whatsapp', 'Botão Flutuante');
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "fixed bottom-8 right-8 w-16 h-16 rounded-full", // Aumentado de w-14 h-14 para w-16 h-16
        "bg-secondary text-primary shadow-2xl", // Usando shadow-2xl para mais destaque
        "flex items-center justify-center text-3xl",
        "transition-all duration-400 hover:bg-secondary/90 hover:scale-110 z-50", // Aumentando o hover scale
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={34} /> {/* Aumentando o ícone */}
    </a>
  );
};

export default WhatsappFloat;