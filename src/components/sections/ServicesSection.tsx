import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/gtagHelper";
import { Link } from "react-router-dom";

interface ServiceCardData {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    routePath: string;
    icon: React.ReactNode;
}

const servicesData: ServiceCardData[] = [
  {
    title: "Locação de Guindauto 5T",
    description:
      "Ideal para içamento e movimentação de cargas médias (até 5 toneladas) em áreas urbanas e locais com restrição de espaço. Inclui operador qualificado.",
    imageUrl:
      "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/93f624f1-e2c1-43bd-a282-05e25787e799.JPG", // Nova imagem
    imageAlt: "Guindauto Munck 5T em operação de içamento",
    routePath: "/guindauto-5t",
    icon: <Truck size={24} />,
  },
  {
    title: "Locação de Guindauto 10T",
    description:
      "Potência máxima para içamento de cargas pesadas (até 10 toneladas), estruturas robustas e equipamentos de grande porte em obras e indústrias.",
    imageUrl:
      "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/WhatsApp%20Image%202025-10-29%20at%2011.06.13%20(1).jpeg", // Imagem atualizada
    imageAlt: "Caminhão Munck 10T em canteiro de obras",
    routePath: "/guindauto-10t",
    icon: <Truck size={24} />,
  },
  {
    title: "Movimentação de Cargas", // Título atualizado
    description:
      "Serviço completo de logística pesada, utilizando Caminhões Munck para posicionamento preciso de máquinas, containers e materiais em geral.",
    imageUrl:
      "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/WhatsApp%20Image%202025-10-29%20at%2011.06.14.jpeg", // Imagem atualizada
    imageAlt: "Serviço de içamento em área urbana",
    routePath: "/icamento-movimentacao",
    icon: <Wrench size={24} />,
  },
];

const ServicesSection: React.FC = () => {
  const handleViewDetailsClick = (serviceTitle: string) => {
    trackEvent('click', 'view_service_page', `Serviço: ${serviceTitle}`);
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nossos Principais Serviços com Caminhão Munck"
          subtitle="Locação de Guindautos 5T e 10T e soluções completas de içamento na Grande SP"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.imageUrl}')` }}
                role="img"
                aria-label={service.imageAlt}
              ></div>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  {service.icon} {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  to={service.routePath}
                  className="w-full"
                  onClick={() => handleViewDetailsClick(service.title)}
                >
                  <Button
                    className={cn(
                      "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold",
                      "flex items-center gap-2 transition-all duration-300",
                    )}
                  >
                    Ver Detalhes do Serviço
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;