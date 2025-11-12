import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/gtagHelper";

const specsData = [
  { characteristic: "Capacidade Máxima", detail: "5 toneladas" },
  { characteristic: "Alcance Máximo", detail: "7 metros (horizontal)" },
  { characteristic: "Altura Máxima", detail: "9 metros (vertical)" },
  { characteristic: "Combustível", detail: "Diesel" },
  {
    characteristic: "Operador",
    detail: "Incluso (qualificado e experiente)",
  },
];

const SpecsSection: React.FC = () => {
  const handleWhatsappClick = () => {
    trackEvent('click', 'whatsapp_locacao', 'Botão de Locação - Especificações');
  };

  return (
    <section id="guindauto" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Especificações do Guindauto 5T"
          subtitle="Potência, precisão e confiabilidade para suas operações"
        />

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-primary">
              <TableRow className="border-primary/50 hover:bg-primary">
                <TableHead className="text-white text-lg font-semibold">
                  Característica
                </TableHead>
                <TableHead className="text-white text-lg font-semibold">
                  Detalhe
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specsData.map((spec, index) => (
                <TableRow
                  key={index}
                  className={cn(
                    "border-gray-100",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50",
                  )}
                >
                  <TableCell className="font-medium text-primary w-1/3">
                    {spec.characteristic}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {spec.detail}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5511947871831?text=Olá! Gostaria de solicitar a locação do Guindauto 5T."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
          >
            <Button
              className={cn(
                "bg-secondary hover:bg-secondary/90 text-primary",
                "px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300",
                "flex items-center gap-2 mx-auto",
              )}
            >
              <Truck size={20} /> Solicitar Locação
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;