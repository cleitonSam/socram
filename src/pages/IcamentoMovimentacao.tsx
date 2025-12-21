import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { Link } from "react-router-dom";

const IcamentoMovimentacao: React.FC = () => {
  const pageData = {
    pageTitle: "Serviço de Içamento e Movimentação de Cargas em SP",
    pageSubtitle: "Serviço especializado para elevar, mover e posicionar equipamentos com segurança e rapidez.",
    whatsappText: "Olá! Gostaria de solicitar um orçamento para serviços de Içamento e Movimentação de Cargas.",
    eventLabel: "Icamento e Movimentacao Page CTA",
    metaDescription: "Especialistas em içamento de cargas em SP utilizando Caminhão Munck (Guindauto 5T e 10T). Movimentação segura de máquinas, containers e estruturas metálicas em São Paulo e Grande SP.",
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
      {
        title: "Equipamentos Utilizados",
        content: (
          <p className="text-lg text-gray-700 leading-relaxed">
            Utilizamos nossa frota de Caminhões Munck, incluindo o <Link to="/guindauto-5t" className="text-secondary hover:underline font-semibold">Guindauto 5 Toneladas</Link> para agilidade e o <Link to="/guindauto-10t" className="text-secondary hover:underline font-semibold">Guindauto 10 Toneladas</Link> para máxima potência.
          </p>
        ),
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default IcamentoMovimentacao;