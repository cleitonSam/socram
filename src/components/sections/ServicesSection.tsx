import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/gtagHelper";

const servicesData = [
  {
    title: "Movimentação de Cargas",
    description:
      "Içamento e posicionamento preciso de cargas de até 10 toneladas em diversos ambientes, utilizando Guindautos Munck 5T e 10T, com segurança e eficiência.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Guindauto Munck movimentando carga pesada em ambiente industrial",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para Movimentação de Cargas (Guindauto Munck).",
  },
  {
    title: "Obras Civis",
    description:
      "Suporte completo para obras, içamento de materiais pesados e movimentação de equipamentos em canteiros de obras com nossos Caminhões Munck 5T e 10T.",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Caminhão Munck em canteiro de obras auxiliando na construção",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para Obras Civis (Guindauto Munck).",
  },
  {
    title: "Serviços Urbanos",
    description:
      "Soluções eficientes para manutenção urbana, instalação de postes, placas de sinalização e poda de árvores utilizando Guindautos Munck.",
    imageUrl:
      "https://images.unsplash.com/photo-1508873696983-2dfd5898fcc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Guindauto Munck realizando manutenção em infraestrutura urbana",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para Serviços Urbanos (Guindauto Munck).",
  },
];

const ServicesSection: React.FC = () => {
  const whatsappNumber = "5511961623798";

  const handleWhatsappClick = (serviceTitle: string) => {
    trackEvent('click', 'whatsapp_orcamento', `Serviço: ${serviceTitle}`);
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nossos Serviços de Içamento com Caminhão Munck"
          subtitle="A versatilidade dos Guindautos 5 e 10 toneladas para diversas aplicações"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.imageUrl}')` }}
                role="img"
                aria-label={service.imageAlt}
              ></div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => handleWhatsappClick(service.title)}
                >
                  <Button
                    className={cn(
                      "w-full bg-secondary hover:bg-secondary/90 text-primary font-bold",
                      "flex items-center gap-2 transition-all duration-300",
                    )}
                  >
                    <Truck size={18} /> Solicitar Orçamento
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;