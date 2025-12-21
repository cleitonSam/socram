import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const IcamentoMovimentacao: React.FC = () => {
  const pageData = {
    pageTitle: "Serviço de Içamento e Movimentação de Cargas com Caminhão Munck",
    pageSubtitle: "Soluções logísticas completas para elevar, transportar e posicionar qualquer tipo de carga com máxima segurança e precisão.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para serviços de Içamento e Movimentação de Cargas.",
    eventLabel: "Icamento e Movimentacao Page CTA",
    sections: [
      {
        title: "O que é Içamento e Movimentação de Cargas?",
        content: "Este serviço engloba todas as etapas necessárias para tirar uma carga do ponto A e colocá-la no ponto B, seja verticalmente (içamento) ou horizontalmente (movimentação). Utilizamos nossos Caminhões Munck (Guindautos 5T e 10T) para garantir que o processo seja realizado de forma controlada, segura e eficiente, minimizando riscos e danos.",
      },
      {
        title: "Para que Serve?",
        content: "É essencial para projetos de construção civil, montagens industriais, logística pesada e serviços urbanos onde a força humana ou equipamentos menores são insuficientes. Garante que materiais e equipamentos cheguem ao local exato de instalação.",
      },
      {
        title: "Tipos de Cargas que Movemos",
        isList: true,
        content: [
          "Máquinas e equipamentos industriais.",
          "Estruturas metálicas e pré-moldados de concreto.",
          "Containers e módulos habitacionais.",
          "Postes, transformadores e painéis elétricos.",
          "Materiais de construção em altura.",
        ],
      },
      {
        title: "Vantagens de Contratar a SOCRAM para Içamento",
        isList: true,
        content: [
          "Segurança em Primeiro Lugar: Equipe treinada e equipamentos inspecionados.",
          "Planejamento Logístico: Análise prévia do local para garantir a melhor estratégia de içamento.",
          "Frota Adequada: Escolha entre Guindauto 5T ou 10T conforme a necessidade da sua carga.",
          "Economia de Tempo: Execução rápida que otimiza o cronograma da sua obra.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "A SOCRAM é referência em serviços de içamento e movimentação na Grande São Paulo e Capital. Nossa logística permite atender rapidamente a demanda de obras e indústrias em toda a região metropolitana.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default IcamentoMovimentacao;