import React, { useState } from "react";
import { Menu, X, ChevronDown, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/", isAnchor: false }, // Link para a Home
  { name: "Sobre Nós", href: "/sobre-nos", isAnchor: false }, // Novo link
  { name: "Guindautos Munck", href: "#guindauto", isAnchor: true },
  { name: "Contato", href: "#contato", isAnchor: true },
];

const serviceItems = [
  { name: "Guindauto 5T", href: "/guindauto-5t", icon: <Truck size={16} /> },
  { name: "Guindauto 10T", href: "/guindauto-10t", icon: <Truck size={16} /> },
  { name: "Içamento de Cargas", href: "/icamento-movimentacao", icon: <Wrench size={16} /> },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Usamos apenas as âncoras para o rastreamento de seção ativa na Home
  const anchorIds = navItems.filter(item => item.isAnchor).map(item => item.href.substring(1));
  const activeSection = useActiveSection({ sectionIds: anchorIds });

  const logoUrl = "https://raw.githubusercontent.com/cleitonSam/img-socram/refs/heads/main/Logo%20SOCRAM%20(cor%20azul%20e%20amarelo)%20.png";

  const renderLink = (item: { name: string; href: string; isAnchor: boolean }) => {
    // Verifica se o link é a rota atual (apenas para links não-âncora)
    const isCurrentPage = !item.isAnchor && window.location.pathname === item.href;
    const isActiveAnchor = item.isAnchor && activeSection === item.href.substring(1);
    
    const baseClasses = "text-gray-700 font-medium hover:text-secondary transition-colors text-lg";
    const activeClasses = "text-primary border-b-2 border-primary";

    if (item.isAnchor) {
      return (
        <a
          href={item.href}
          className={cn(baseClasses, isActiveAnchor && activeClasses)}
        >
          {item.name}
        </a>
      );
    } else {
      return (
        <Link
          to={item.href}
          className={cn(baseClasses, isCurrentPage && activeClasses)}
        >
          {item.name}
        </Link>
      );
    }
  };

  const renderMobileLink = (item: { name: string; href: string; isAnchor: boolean }) => {
    const isCurrentPage = !item.isAnchor && window.location.pathname === item.href;
    const isActiveAnchor = item.isAnchor && activeSection === item.href.substring(1);
    
    const baseClasses = "block text-lg text-gray-700 font-medium hover:text-primary transition-colors py-2 border-b border-gray-100";
    const activeClasses = "text-primary border-l-4 border-primary pl-2";

    const handleClick = () => {
        // Fecha o menu móvel ao clicar em qualquer link
        setIsMenuOpen(false);
    };

    if (item.isAnchor) {
      return (
        <a
          href={item.href}
          onClick={handleClick}
          className={cn(baseClasses, isActiveAnchor && activeClasses)}
        >
          {item.name}
        </a>
      );
    } else {
      return (
        <Link
          to={item.href}
          onClick={handleClick}
          className={cn(baseClasses, isCurrentPage && activeClasses)}
        >
          {item.name}
        </Link>
      );
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoUrl}
              alt="SOCRAM - Locação de Guindauto"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                {renderLink(item)}
              </li>
            ))}
            
            {/* Dropdown Menu for Services */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-lg font-medium text-gray-700 hover:text-secondary transition-colors h-auto px-0 py-0">
                    Serviços <ChevronDown size={18} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="flex items-center gap-2 cursor-pointer">
                        {item.icon} {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
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
          "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300",
          isMenuOpen ? "max-h-[calc(100vh - 64px)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {renderMobileLink(item)}
              </li>
            ))}
            
            {/* Mobile Service Links */}
            <li className="pt-2">
                <span className="block text-sm font-bold text-primary/80 mb-2 pl-2">Nossos Serviços</span>
                {serviceItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 text-lg text-primary hover:text-secondary transition-colors py-2 pl-4 border-b border-gray-100" // Alterado text-gray-700 para text-primary
                    >
                        {item.icon} {item.name}
                    </Link>
                ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;