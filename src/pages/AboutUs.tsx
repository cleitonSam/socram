import React from "react";
import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";

const AboutUs: React.FC = () => {
  const pageData = {
    pageTitle: "Sobre a SOCRAM",
    pageSubtitle: "Eficiência, Confiança e Qualidade em Içamento de Cargas.",
    whatsappText: "Olá! Gostaria de falar com a SOCRAM sobre a empresa.",
    eventLabel: "About Us Page CTA",
    metaDescription: "Conheça a SOCRAM: empresa familiar especializada em locação de caminhão munck (guindauto 5T e 10T) em São Paulo. Foco em agilidade, segurança e operadores qualificados.",
    sections: [
      {
        title: "Nossa História e Missão",
        content: "A Socram nasceu da dificuldade em encontrar equipamentos de guindauto (Munck) com agilidade e bom atendimento. Após vivenciarmos isso como clientes, investimos em frota própria, capacitação e equipamentos modernos para oferecer soluções rápidas, seguras e sem burocracia. Sabemos que quem precisa movimentar uma carga tem pressa, e essa é a base do nosso atendimento.",
      },
      {
        title: "Compromisso com a Qualidade e Segurança",
        isList: true,
        content: [
          "Empresa familiar com mais de 5 anos de atuação no mercado.",
          "Equipe treinada e sede própria.",
          "Operadores com capacitação atualizada, seguindo rigorosamente as NRs (Normas Regulamentadoras).",
          "Frota moderna e revisada para máxima segurança operacional.",
        ],
      },
      {
        title: "Área de Atendimento",
        content: "Localizados estrategicamente na zona leste de São Paulo, atendemos com agilidade toda a capital e a Grande SP. Seguimos evoluindo para entregar eficiência, confiança e qualidade em cada serviço.",
      },
    ],
  };

  return <ServiceDetailLayout {...pageData} />;
};

export default AboutUs;