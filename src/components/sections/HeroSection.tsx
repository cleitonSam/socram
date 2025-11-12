import React from "react";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Shield, MapPin } from "lucide-react";
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
  return (
    <section
      id="home"
      className={cn(
        "pt-40 pb-20 md:pt-48 md:pb-32",
        "bg-primary text-white text-center relative overflow-hidden",
      )}
    >
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(249, 192, 42, 0.15) 0%, transparent 20%), radial-gradient(circle at 80% 70%, rgba(249, 192, 42, 0.1) 0%, transparent 20%)`
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-shadow-lg">
          SOCRAM: Sua Solução em Içamento e Movimentação de Cargas Médias em SP
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 font-light opacity-90">
          Precisão, Segurança e Agilidade para Seus Projetos
        </p>
        <a
          href="https://wa.me/5511947871831?text=Olá! Gostaria de solicitar um orçamento para locação de guindauto."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={cn(
              "bg-[#25D366] hover:bg-[#128C7E] text-white",
              "px-8 py-6 text-lg font-semibold rounded-full shadow-xl transition-all duration-300",
              "flex items-center gap-2",
            )}
          >
            <Truck size={20} /> Solicite pelo WhatsApp
          </Button>
        </a>

        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mt-12">
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