import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { Link } from "react-router-dom";

const Guindauto5T: React.FC = () => {
  const pageData = {
    pageTitle: "Locação de Guindauto 5T (Caminhão Munck) em São Paulo e Grande SP | SOCRAM - Içamento de Cargas Médias e Leves",
    pageSubtitle: "Ideal para içamento e movimentação de cargas em locais com pouco espaço. Perfeito para obras, comércios e manutenções rápidas.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para a locação do Guindauto 5 Toneladas.",
    eventLabel: "Guindauto 5T Page CTA",
    metaDescription: "SOCRAM: Líder em locação de guindauto 5 toneladas (Caminhão Munck) em São Paulo e Grande SP. Serviços de içamento e movimentação de cargas médias e leves com agilidade, segurança e operador qualificado para sua obra, comércio ou projeto.",
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
      {
        title: "Serviços Relacionados",
        content: (
          <p className="text-lg text-gray-700 leading-relaxed">
            Se sua carga for mais pesada, confira nossa opção de <Link to="/guindauto-10t" className="text-secondary hover:underline font-semibold">Locação de Guindauto 10 Toneladas</Link>. Também oferecemos o serviço completo de <Link to="/icamento-movimentacao" className="text-secondary hover:underline font-semibold">Içamento e Movimentação de Cargas</Link>.
          </p>
        ),
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default Guindauto5T;