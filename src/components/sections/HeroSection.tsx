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
  const heroBackgroundImage = "https://images.unsplash.com/photo-1529939803454-24c814598593?q=80&w=1920&auto=format&fit=crop";

  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center text-white min-h-[80vh] md:min-h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/70 z-0"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-shadow-lg max-w-4xl">
          Içamento e Movimentação de Cargas com Precisão e Segurança
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 font-light opacity-90">
          Locação de Guindauto 5 Toneladas em São Paulo e Grande SP. A solução ideal para sua obra ou projeto.
        </p>
        
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
          <GraphicItem icon={<Truck />} text="Guindauto 5T" />
          <GraphicItem icon={<Zap />} text="Rápido" />
          <GraphicItem icon={<Shield />} text="Seguro" />
          <GraphicItem icon={<MapPin />} text="Grande SP" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;