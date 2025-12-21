import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, HardHat, Map, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    icon: <Cog size={32} />,
    title: "Especialização",
    description:
      "Foco em guindautos de 5 e 10 toneladas (Caminhão Munck), garantindo expertise e desempenho superior.",
  },
  {
    icon: <HardHat size={32} />,
    title: "Operador Incluso",
    description:
      "Profissional qualificado incluso no serviço, eliminando preocupações com mão de obra.",
  },
  {
    icon: <Map size={32} />,
    title: "Atendimento Local",
    description:
      "Foco em São Paulo e Grande São Paulo, com agilidade no atendimento e entrega.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Flexibilidade",
    description:
      "Opções de locação diária, semanal e mensal para atender seu cronograma.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Por Que Escolher a SOCRAM?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "text-center p-6 shadow-lg transition-transform duration-300 hover:shadow-xl hover:translate-y-[-5px]",
                "border-t-4 border-secondary",
              )}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;