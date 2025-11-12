import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showSuccess, showError } from "@/utils/toast";
import { cn } from "@/lib/utils";

// Definição do Schema de Validação
const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  telefone: z.string().min(10, { message: "Telefone inválido." }),
  servico: z.string().min(1, { message: "Selecione um tipo de serviço." }),
  periodo: z.string().optional(),
  mensagem: z.string().max(500).optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  "Locacao de Guindauto 5T",
  "Movimentacao de Cargas",
  "Obras Civis",
  "Servicos Urbanos",
  "Outros",
];

const periodOptions = ["Diaria", "Semanal", "Mensal", "Outro"];

const ContactSection: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      periodo: "",
      mensagem: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // Simulação de envio para a API externa (SteinHQ)
    // Nota: Em um ambiente de produção real, esta chamada de API deve ser feita
    // por um backend para evitar expor chaves ou URLs sensíveis.
    const API_URL = 'https://api.steinhq.com/v1/storages/68a52414c088333365cfb6bd/clientes';
    
    const formData = {
        "nome ": values.nome,
        "email": values.email,
        "telefone": values.telefone,
        "tipoDeServico": values.servico,
        "locacao": values.periodo || "Não especificado",
        "mensagem": values.mensagem || "Nenhuma mensagem adicional",
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([formData])
        });

        if (response.ok) {
            showSuccess(`Mensagem enviada! Obrigado, ${values.nome}. Retornaremos em breve.`);
            form.reset();
        } else {
            // Tenta ler o erro da resposta, se disponível
            const errorText = await response.text();
            throw new Error(`Erro ao enviar: ${response.status} - ${errorText}`);
        }
    } catch (error) {
        console.error("Erro de submissão:", error);
        showError("Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.");
    }
  };

  // Função para aplicar máscara de telefone (simples)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);

    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 10) {
      value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
    form.setValue("telefone", value, { shouldValidate: true });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Solicite um orçamento ou tire suas dúvidas"
        />

        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-2xl border border-gray-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu.email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(11) 99999-9999"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handlePhoneChange(e);
                          }}
                          maxLength={15}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="servico"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Serviço</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="periodo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Período de Locação (Opcional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {periodOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Detalhe seu projeto ou dúvida..."
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className={cn(
                  "w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg transition-all duration-300",
                )}
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;