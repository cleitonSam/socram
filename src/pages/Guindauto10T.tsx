import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const Guindauto10T: React.FC = () => {
  const pageData = {
    pageTitle: "Locação de Guindauto 10 Toneladas (Caminhão Munck)",
    pageSubtitle: "Potência máxima para içamento e movimentação de cargas pesadas, estruturas robustas e equipamentos de grande porte.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para a locação do Guindauto 10 Toneladas.",
    eventLabel: "Guindauto 10T Page CTA",
    sections: [
      {
        title: "O que é o Guindauto 10T?",
        content: "O Guindauto de 10 toneladas é o nosso Caminhão Munck de maior capacidade, projetado para lidar com içamentos e transportes de até 10.000 kg. Ele combina a força de um pequeno guindaste com a mobilidade de um caminhão, sendo essencial para projetos de infraestrutura e grandes obras.",
      },
      {
        title: "Para que Serve?",
        content: "É utilizado em operações que exigem maior capacidade de elevação e alcance, como a montagem de grandes estruturas, o transporte de peças pré-moldadas e a movimentação de equipamentos industriais pesados.",
      },
      {
        title: "Tipos de Cargas e Aplicações",
        isList: true,
        content: [
          "Içamento de lajes, vigas e pilares pré-moldados.",
          "Movimentação de transformadores e geradores.",
          "Montagem de galpões e estruturas metálicas pesadas.",
          "Carga e descarga de grandes volumes em pátios industriais.",
          "Posicionamento de piscinas e caixas d'água de grande capacidade.",
        ],
      },
      {
        title: "Vantagens de Alugar o Caminhão Munck 10T com a SOCRAM",
        isList: true,
        content: [
          "Alta Capacidade: Lida com as cargas mais pesadas com facilidade e segurança.",
          "Maior Alcance: Braço hidráulico com maior extensão vertical e horizontal.",
          "Eficiência: Reduz o tempo de execução de tarefas complexas de içamento.",
          "Operação Profissional: Serviço completo com operador experiente e certificado.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "Nossa frota de Guindautos 10T atende prontamente a cidade de São Paulo (Capital) e toda a Região Metropolitana, garantindo que seu projeto, por maior que seja, tenha o suporte logístico necessário.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default Guindauto10T;