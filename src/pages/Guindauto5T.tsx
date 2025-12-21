import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const Guindauto5T: React.FC = () => {
  const pageData = {
    pageTitle: "Locação de Guindauto 5 Toneladas (Caminhão Munck)",
    pageSubtitle: "A solução ideal para içamento e movimentação de cargas médias em espaços urbanos e obras com acesso restrito.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para a locação do Guindauto 5 Toneladas.",
    eventLabel: "Guindauto 5T Page CTA",
    sections: [
      {
        title: "O que é o Guindauto 5T?",
        content: "O Guindauto de 5 toneladas, popularmente conhecido como Caminhão Munck 5T, é um veículo robusto equipado com um braço hidráulico articulado (lança) capaz de levantar e transportar cargas de até 5.000 kg. É a escolha perfeita para projetos que exigem força e precisão, mas em locais onde guindastes maiores não conseguem operar.",
      },
      {
        title: "Para que Serve?",
        content: "Este equipamento é extremamente versátil, sendo utilizado principalmente para içamento, carga, descarga e transporte de materiais de peso médio. Sua capacidade de manobra o torna indispensável em áreas urbanas e canteiros de obras menores.",
      },
      {
        title: "Tipos de Cargas e Aplicações",
        isList: true,
        content: [
          "Içamento e posicionamento de estruturas metálicas leves.",
          "Movimentação de máquinas e equipamentos industriais de porte médio.",
          "Carga e descarga de containers e paletes pesados.",
          "Instalação de postes, placas de sinalização e luminárias.",
          "Transporte de materiais de construção (vigas, lajes, telhas).",
        ],
      },
      {
        title: "Vantagens de Alugar o Caminhão Munck 5T com a SOCRAM",
        isList: true,
        content: [
          "Agilidade: Equipamento compacto que garante rapidez na operação e no deslocamento.",
          "Segurança: Todos os serviços incluem operador qualificado e seguem rigorosas normas de segurança.",
          "Custo-benefício: Solução econômica para cargas que não exigem a potência máxima de um guindaste.",
          "Versatilidade: Ideal para içamento vertical e movimentação horizontal.",
        ],
      },
      {
        title: "Regiões Atendidas",
        content: "Atendemos com excelência toda a cidade de São Paulo (Capital) e a Região Metropolitana, incluindo o Alto Tietê (Suzano, Mogi das Cruzes, Poá, Itaquaquecetuba, etc.). Garantimos pontualidade e eficiência em todas as áreas.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default Guindauto5T;