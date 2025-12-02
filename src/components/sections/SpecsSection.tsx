import React, { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Spec {
  characteristic: string;
  detail: string;
}

interface CraneSpec {
    title: string;
    capacity: string;
    specs: Spec[];
    whatsappText: string;
    eventLabel: string;
}

const craneSpecs: Record<string, CraneSpec> = {
  '5t': {
    title: "Guindauto 5T",
    capacity: "5 toneladas",
    specs: [
      { characteristic: "Capacidade Máxima", detail: "5 toneladas" },
      { characteristic: "Alcance Máximo", detail: "7 metros (horizontal)" },
      { characteristic: "Altura Máxima", detail: "9 metros (vertical)" },
      { characteristic: "Combustível", detail: "Diesel" },
      {
        characteristic: "Operador",
        detail: "Incluso (qualificado e experiente)",
      },
    ],
    whatsappText: "Olá! Gostaria de solicitar a locação do Guindauto 5T.",
    eventLabel: 'Botão de Locação - Especificações 5T',
  },
  '10t': {
    title: "Guindauto 10T",
    capacity: "10 toneladas",
    specs: [
      { characteristic: "Capacidade Máxima", detail: "10 toneladas" },
      { characteristic: "Alcance Máximo", detail: "10 metros (horizontal)" },
      { characteristic: "Altura Máxima", detail: "13 metros (vertical)" },
      { characteristic: "Combustível", detail: "Diesel" },
      {
        characteristic: "Operador",
        detail: "Incluso (qualificado e experiente)",
      },
    ],
    whatsappText: "Olá! Gostaria de solicitar a locação do Guindauto 10T.",
    eventLabel: 'Botão de Locação - Especificações 10T',
  }
};


const SpecsSection: React.FC = () => {
  const whatsappNumber = "5511961623798";
  
  // State to manage the active tab/crane type
  const [activeCrane, setActiveCrane] = useState<'5t' | '10t'>('5t');
  
  const currentSpec = craneSpecs[activeCrane];

  const handleWhatsappClick = () => {
    trackEvent('click', 'whatsapp_locacao', currentSpec.eventLabel);
  };

  return (
    <section id="guindauto" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Especificações dos Guindautos"
          subtitle="Potência, precisão e confiabilidade para suas operações"
        />

        <Tabs defaultValue="5t" className="max-w-4xl mx-auto">
          <TabsList className="flex justify-center w-full max-w-md mx-auto bg-gray-100 p-1 rounded-xl shadow-inner mb-8">
            <TabsTrigger 
                value="5t" 
                onClick={() => setActiveCrane('5t')}
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-base py-2 rounded-lg transition-all duration-200 hover:bg-gray-200"
            >
                Guindauto 5 Toneladas
            </TabsTrigger>
            <TabsTrigger 
                value="10t" 
                onClick={() => setActiveCrane('10t')}
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-base py-2 rounded-lg transition-all duration-200 hover:bg-gray-200"
            >
                Guindauto 10 Toneladas
            </TabsTrigger>
          </TabsList>

          {Object.keys(craneSpecs).map((key) => {
            const spec = craneSpecs[key];
            return (
                <TabsContent key={key} value={key} className="mt-0">
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                        <Table className="w-full">
                            <TableHeader className="bg-primary">
                                <TableRow className="border-primary/50 hover:bg-primary">
                                    <TableHead className="text-white text-lg font-semibold py-3 px-4">
                                        Característica
                                    </TableHead>
                                    <TableHead className="text-white text-lg font-semibold py-3 px-4">
                                        Detalhe
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {spec.specs.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        className={cn(
                                            "border-gray-100",
                                            index % 2 === 0 ? "bg-white" : "bg-gray-50",
                                        )}
                                    >
                                        <TableCell className="font-medium text-primary w-1/3 py-3 px-4">
                                            {item.characteristic}
                                        </TableCell>
                                        <TableCell className="text-gray-700 py-3 px-4">
                                            {item.detail}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </TabsContent>
            );
          })}
        </Tabs>

        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(currentSpec.whatsappText)}`}
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
              <Truck size={20} /> Solicitar Locação do {currentSpec.capacity}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;