import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "Guindautos Munck", href: "#guindauto" },
  { name: "Contato", href: "#contato" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection({
    sectionIds: navItems.map(item => item.href.substring(1)), // Remove '#' from href
  });

  // URL do logo fornecida pelo usuário
  const logoUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/Logo%20SOCRAM%20(cor%20azul%20e%20amarelo)%20.png";

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo - Usando URL externa */}
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt="SOCRAM - Locação de Guindauto"
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-gray-700 font-medium hover:text-primary transition-colors text-lg",
                    activeSection === item.href.substring(1) && "text-primary border-b-2 border-primary"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block text-lg text-gray-700 font-medium hover:text-primary transition-colors py-2 border-b border-gray-100",
                    activeSection === item.href.substring(1) && "text-primary border-l-4 border-primary pl-2"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;