"use client";

import type React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.() ;
    }
  };

  return (
    <div
      onClick={onClick}  
      onKeyDown={handleKeyDown}  
      tabIndex={0}  
      className="cursor-pointer border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      role="button"  
    >
      <h3 className="text-2xl font-semibold text-gray-800 pb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;