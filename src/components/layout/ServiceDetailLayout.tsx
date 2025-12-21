import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/gtagHelper";
import { Link } from "react-router-dom";

interface SectionContent {
  title: string;
  content: string | string[] | React.ReactNode; // Adicionado React.ReactNode para flexibilidade
  isList?: boolean;
}

interface ServiceDetailLayoutProps {
  pageTitle: string;
  pageSubtitle: string;
  sections: SectionContent[];
  whatsappText: string;
  eventLabel: string;
  metaDescription: string; // Novo: para SEO
}

const whatsappNumber = "5511961623798";

const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({
  pageTitle,
  pageSubtitle,
  sections,
  whatsappText,
  eventLabel,
  metaDescription,
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const handleWhatsappClick = () => {
    trackEvent('click', 'whatsapp_page_cta', eventLabel);
  };

  // SEO: Define o título da página e a meta description
  useEffect(() => {
    document.title = `${pageTitle} | SOCRAM`;
    
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDescription);

    // Opcional: Limpar o título ao desmontar (embora a navegação geralmente substitua)
    return () => {
        document.title = "SOCRAM | Locação de Guindauto 5T e 10T (Caminhão Munck) em SP - Içamento de Cargas"; 
    };
  }, [pageTitle, metaDescription]);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link to="/" className="text-primary hover:text-secondary flex items-center gap-2 font-medium">
                <ArrowLeft size={18} /> Voltar para a Home
            </Link>
          </div>

          <header className="text-center mb-12 pt-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageSubtitle}
            </p>
          </header>

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl space-y-10">
            
            {sections.map((section, index) => (
              <section key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  {section.title}
                </h2>
                {section.isList && Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  // Se o conteúdo for uma string, envolvemos em <p>. Caso contrário, renderizamos diretamente em um div.
                  typeof section.content === 'string' ? (
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  ) : (
                    <div className="text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </div>
                  )
                )}
              </section>
            ))}

            {/* CTA Section */}
            <div className="pt-6 text-center bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-primary mb-4">
                    Pronto para Iniciar seu Projeto?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                    Fale diretamente com nossa equipe e solicite um orçamento rápido e detalhado para o seu serviço.
                </p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsappClick}
                >
                    <Button
                        size="lg"
                        className={cn(
                            "bg-secondary hover:bg-secondary/90 text-primary font-bold",
                            "px-3 py-2 text-sm sm:px-8 sm:py-6 sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg", // Ajustado para mobile
                            "flex items-center gap-2 mx-auto whitespace-normal text-center", // Adicionado whitespace-normal e text-center
                        )}
                    >
                        <MessageCircle size={24} /> Solicitar Orçamento via WhatsApp
                    </Button>
                </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailLayout;