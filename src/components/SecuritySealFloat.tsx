import { cn } from "@/lib/utils";
import React from "react";

const SecuritySealFloat: React.FC = () => {
  const sealUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/main/selo%20de%20seguranca%CC%80.png";

  return (
    <div
      className={cn(
        "fixed bottom-8 left-8 w-28 h-28", // Aumentei o tamanho para mais visibilidade
        "bg-white rounded-full shadow-2xl", // Fundo branco, borda circular e sombra forte
        "flex items-center justify-center p-2", // Centraliza a imagem e adiciona um respiro
        "transition-transform duration-400 hover:scale-110 z-50",
        "hidden md:block" // Oculto em telas pequenas para não poluir a interface
      )}
      aria-label="Selo de Segurança e Qualidade SOCRAM"
    >
      <img
        src={sealUrl}
        alt="Selo de Segurança e Qualidade SOCRAM"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SecuritySealFloat;