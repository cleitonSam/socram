import React from "react";
import { cn } from "@/lib/utils";

const ServiceBadge: React.FC = () => {
  const imageUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/selo%20atendimento%20.png";

  return (
    <div
      className={cn(
        "fixed bottom-8 left-8", // Posiciona no canto inferior esquerdo
        "w-24 h-24", // Define um tamanho para o selo
        "flex items-center justify-center",
        "transition-transform duration-400 hover:scale-110 z-50", // Adiciona uma animação ao passar o mouse
      )}
    >
      <img
        src={imageUrl}
        alt="Selo de Atendimento em até 1 hora"
        className="w-full h-full object-contain" // Garante que a imagem se ajuste ao contêiner
      />
    </div>
  );
};

export default ServiceBadge;