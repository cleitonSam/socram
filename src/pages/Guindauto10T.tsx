import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const Guindauto10T: React.FC = () => {
  const pageData = {
    pageTitle: "Locação de Guindauto 10 Toneladas (Caminhão Munck)",
    pageSubtitle: "Potência e estabilidade para movimentação de cargas pesadas. Ideal para operações industriais e obras de grande porte.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para a locação do Guindauto 10 Toneladas.",
    eventLabel: "Guindauto 10T Page CTA",
    sections: [
      {
        title: "Para que Serve",
        isList: true,
        content: [
          "Içamento de grandes máquinas.",
          "Instalações industriais.",
          "Montagem estrutural.",
          "Remoção de equipamentos pesados.",
        ],
      },
      {
        title: "Cargas Atendidas",
        isList: true,
        content: [
          "Transformadores.",
          "Tanques.",
          "Containers grandes.",
          "Estruturas metálicas robustas.",
          "Equipamentos industriais pesados.",
        ],
      },
      {
        title: "Diferenciais da SOCRAM",
        isList: true,
        content: [
          "Planejamento técnico.",
          "Operadores experientes.",
          "Frota potente e segura.",
          "Precisão no posicionamento da carga.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "Atendemos São Paulo (Capital) e toda a Região Metropolitana (RMSP), garantindo que seu projeto, por maior que seja, tenha o suporte logístico necessário.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default Guindauto10T;