import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import React from "react";

const WhatsappFloat: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511947871831?text=Olá! Gostaria de mais informações sobre os serviços da SOCRAM.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 right-8 w-14 h-14 rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "flex items-center justify-center text-3xl",
        "transition-all duration-400 hover:bg-[#128C7E] hover:scale-105 z-50",
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsappFloat;