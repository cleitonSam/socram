import React from "react";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Shield, MapPin, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const GraphicItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 transition-transform hover:scale-[1.02]">
    <div className="text-2xl sm:text-3xl text-secondary mb-2">{icon}</div>
    <div className="font-semibold text-white text-xs sm:text-base text-center leading-tight">
      {text}
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  const sealImageUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/selo%20atendimento%20.png";

  return (
    <section
      id="home"
      className="flex items-center justify-center text-center text-white min-h-[70vh] bg-primary pt-24 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Selo de Atendimento */}
        <img
          src={sealImageUrl}
          alt="Selo de Atendimento em até 1 hora"
          className="w-32 sm:w-40 lg:w-48 h-auto mb-8 animate-pulse" // Ajustado para ser menor no mobile
        />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight max-w-4xl">
          Soluções Completas em Içamento e Movimentação de Cargas
        </h1>
        <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10 font-light opacity-90">
          Locação de Guindauto 5T e 10T com operador incluso em São Paulo e Grande SP. A solução ágil e segura para sua obra ou projeto.
        </p>
        
        <a href="#contato">
          <Button
            size="lg"
            className={cn(
              "bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 px-6 text-base sm:py-7 sm:px-10 sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg", // Ajustado para mobile
              "flex items-center gap-3"
            )}
          >
              Solicite agora mesmo seu orçamento <ArrowDown className="h-5 w-5 animate-bounce" />
          </Button>
        </a>

        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mt-16"> {/* Reduzido mt-20 para mt-16 */}
          <GraphicItem icon={<Truck />} text="Guindauto Munck" />
          <GraphicItem icon={<Zap />} text="Rápido" />
          <GraphicItem icon={<Shield />} text="Seguro" />
          <GraphicItem icon={<MapPin />} text="Grande SP" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;