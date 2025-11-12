import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonialsData = [
  {
    name: "João Silva",
    company: "Engenharia ABC",
    avatar: "JS",
    testimonial:
      "A SOCRAM foi fundamental para nossa obra. O serviço de içamento foi pontual, seguro e o operador demonstrou grande expertise. Recomendo fortemente!",
  },
  {
    name: "Mariana Costa",
    company: "Construtora Horizonte",
    avatar: "MC",
    testimonial:
      "Contratamos a locação mensal do guindauto e estamos muito satisfeitos. Equipamento de qualidade e um atendimento ao cliente que realmente resolve.",
  },
  {
    name: "Carlos Pereira",
    company: "Gerente de Projetos",
    avatar: "CP",
    testimonial:
      "Precisão e agilidade definem o serviço da SOCRAM. Eles entenderam nossa necessidade e entregaram uma solução perfeita para a movimentação de cargas sensíveis.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="O Que Nossos Clientes Dizem"
          subtitle="A satisfação de quem confia em nosso trabalho é nossa maior conquista."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Quote className="text-secondary w-8 h-8 mb-4" />
                <p className="text-gray-600 italic mb-6 flex-grow">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${testimonial.name}`} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mt-4 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-5 h-5" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;