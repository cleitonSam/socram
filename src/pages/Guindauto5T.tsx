import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const Guindauto5T: React.FC = () => {
  const pageData = {
    pageTitle: "Locação de Guindauto 5 Toneladas em SP (Caminhão Munck)",
    pageSubtitle: "Ideal para içamento e movimentação de cargas em locais com pouco espaço. Perfeito para obras, comércios e manutenções rápidas.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para a locação do Guindauto 5 Toneladas.",
    eventLabel: "Guindauto 5T Page CTA",
    sections: [
      {
        title: "Para que Serve",
        isList: true,
        content: [
          "Elevação de equipamentos.",
          "Remoção e transporte de máquinas.",
          "Montagem de estruturas leves.",
          "Apoio em obras e serviços técnicos.",
        ],
      },
      {
        title: "Cargas Atendidas",
        isList: true,
        content: [
          "Motores e máquinas.",
          "Geradores.",
          "Bombas e compressores.",
          "Containers pequenos.",
          "Estruturas metálicas leves.",
        ],
      },
      {
        title: "Por que Escolher a SOCRAM",
        isList: true,
        content: [
          "Operadores treinados.",
          "Frota revisada.",
          "Agilidade no atendimento.",
          "Segurança garantida.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "Atendemos com excelência toda a cidade de São Paulo (Capital) e a Região Metropolitana (RMSP), garantindo pontualidade e eficiência em todas as áreas.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default Guindauto5T;