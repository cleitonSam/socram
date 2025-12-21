import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Guindauto5T from "@/pages/Guindauto5T";
import Guindauto10T from "@/pages/Guindauto10T";
import IcamentoMovimentacao from "@/pages/IcamentoMovimentacao";
import AboutUs from "@/pages/AboutUs";

// Variantes de animação para um efeito de deslizamento suave
const pageVariants = {
  initial: { 
    opacity: 0, 
    x: 50, // Começa 50px à direita
  },
  in: { 
    opacity: 1, 
    x: 0, // Desliza para a posição final
  },
  out: { 
    opacity: 0, 
    x: -50, // Desliza para fora 50px à esquerda
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const RouterContent: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/guindauto-5t" element={<Guindauto5T />} />
          <Route path="/guindauto-10t" element={<Guindauto10T />} />
          <Route path="/icamento-movimentacao" element={<IcamentoMovimentacao />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default RouterContent;