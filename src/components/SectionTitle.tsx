import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="text-center mb-12 pt-10">
      <h2 className="text-3xl font-bold text-primary relative inline-block pb-3">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;