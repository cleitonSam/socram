import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const IcamentoMovimentacao: React.FC = () => {
  const pageData = {
    pageTitle: "Serviço de Içamento e Movimentação de Cargas",
    pageSubtitle: "Serviço especializado para elevar, mover e posicionar equipamentos com segurança e rapidez.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para serviços de Içamento e Movimentação de Cargas.",
    eventLabel: "Icamento e Movimentacao Page CTA",
    sections: [
      {
        title: "Para que Serve",
        isList: true,
        content: [
          "Instalação de máquinas.",
          "Transporte de materiais pesados.",
          "Remoção de cargas em locais difíceis.",
          "Apoio técnico em obras e indústrias.",
        ],
      },
      {
        title: "Cargas Movimentadas",
        isList: true,
        content: [
          "Máquinas industriais.",
          "Geradores e transformadores.",
          "Containers.",
          "Tanques, bombas e compressores.",
          "Estruturas metálicas.",
        ],
      },
      {
        title: "Por que a SOCRAM",
        isList: true,
        content: [
          "Equipe especializada.",
          "Frota moderna (5t e 10t).",
          "Segurança operacional.",
          "Atendimento rápido.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "Atendemos São Paulo (Capital) e toda a Região Metropolitana (RMSP). Nossa logística permite atender rapidamente a demanda de obras e indústrias em toda a região.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default IcamentoMovimentacao;