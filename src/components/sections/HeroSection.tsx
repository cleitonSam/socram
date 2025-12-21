import React from "react";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Shield, MapPin, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const GraphicItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 min-w-[120px] sm:min-w-[150px] transition-transform hover:scale-[1.02]">
    <div className="text-3xl text-secondary mb-2">{icon}</div>
    <div className="font-semibold text-white text-sm sm:text-base text-center">
      {text}
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  const sealUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/selo%20atendimento%20.png";

  return (
    <section
      id="home"
      className="flex items-center justify-center text-center text-white min-h-[70vh] bg-primary pt-24 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight max-w-4xl">
          Soluções Completas em Içamento e Movimentação de Cargas
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 font-light opacity-90">
          Locação de Guindauto 5T e 10T com operador incluso em São Paulo e Grande SP. A solução ágil e segura para sua obra ou projeto.
        </p>
        
        {/* Selo de Atendimento */}
        <img 
          src={sealUrl} 
          alt="Selo de Atendimento em até 1 hora" 
          className="w-36 h-auto mb-10 sm:w-44 lg:w-52 mx-auto shadow-2xl transition-transform duration-300 hover:scale-105"
        />

        <a href="#contato">
          <Button
            size="lg"
            className={cn(
              "bg-secondary hover:bg-secondary/90 text-primary font-bold py-7 px-10 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg",
              "flex items-center gap-3"
            )}
          >
              Solicite agora mesmo seu orçamento <ArrowDown className="h-5 w-5 animate-bounce" />
          </Button>
        </a>

        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mt-20">
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