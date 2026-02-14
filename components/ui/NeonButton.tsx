import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-display font-bold tracking-wider uppercase text-sm transition-all duration-300 border backdrop-blur-sm group overflow-hidden";
  
  const variants = {
    primary: "border-nexusLime text-nexusLime hover:bg-nexusLime/10 shadow-[0_0_15px_rgba(191,245,73,0.1)] hover:shadow-[0_0_25px_rgba(191,245,73,0.4)]",
    secondary: "border-white/20 text-white hover:border-white hover:bg-white/5"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Glare effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
    </motion.button>
  );
};