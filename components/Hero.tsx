import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight } from 'lucide-react';
import { InteractiveDashboard } from './InteractiveDashboard';

const LogoBand = () => {
  // Using simplified SVG paths for common tech logos to ensure they look high-end
  const logos = [
    { name: 'Figma', color: '#F24E1E', path: 'M12 2C9.79086 2 8 3.79086 8 6C8 7.05437 8.4093 8.01314 9.07925 8.72412L8 9.5V13.5L9.07925 14.2759C8.4093 14.9869 8 15.9456 8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17C16 15.9456 15.5907 14.9869 14.9208 14.2759L16 13.5V9.5L14.9208 8.72412C15.5907 8.01314 16 7.05437 16 6C16 3.79086 14.2091 2 12 2Z' },
    { name: 'X', color: '#FFFFFF', path: 'M18.901 3H21.68l-6.069 6.936L22.754 21h-5.592l-4.38-5.74L7.776 21H5l6.49-7.417L4.246 3h5.735l3.958 5.232L18.901 3zm-.975 16.347h1.54L8.345 5.228H6.692l11.234 14.119z' },
    { name: 'Slack', color: '#ECB22E', path: 'M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-1a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0v-5zm3-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1-3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0v-5zm5-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a2 2 0 1 0 4 0V2a2 2 0 1 0-4 0v5zm-3 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-1 3a2 2 0 1 0 4 0V9a2 2 0 1 0-4 0v5z' },
    { name: 'WhatsApp', color: '#25D366', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.035c0 2.123.554 4.197 1.606 6.034L0 24l6.105-1.603a11.83 11.83 0 005.94 1.597h.005c6.634 0 12.032-5.396 12.035-12.034a11.81 11.81 0 00-3.417-8.397' },
    { name: 'Telegram', color: '#0088cc', path: 'M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.703h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z' },
    { name: 'Teams', color: '#6264A7', path: 'M18.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM20 12h-3a3 3 0 0 0-3 3v2h8v-2a3 3 0 0 0-3-3zM7.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM9 11H6a2.5 2.5 0 0 0-2.5 2.5V15h8v-1.5A2.5 2.5 0 0 0 9 11z' },
    { name: 'Messenger', color: '#00B2FF', path: 'M12 2C6.477 2 2 6.145 2 11.258c0 2.908 1.442 5.503 3.693 7.324V22l3.235-1.775c.983.273 2.023.42 3.102.42 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.03 12.352l-2.573-2.747-5.023 2.747 5.523-5.867 2.645 2.747 4.953-2.747-5.525 5.867z' },
  ];

  // Double the logos for seamless scroll
  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <div className="mt-20 pt-10 border-t border-white/5 w-full overflow-hidden">
      <p className="text-center text-[10px] text-white/30 mb-10 font-bold uppercase tracking-[0.2em]">
        S'intègre parfaitement à vos outils favoris
      </p>
      
      <div className="relative flex items-center">
        {/* Gradients for soft edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-nexusBlack to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-nexusBlack to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {scrollingLogos.map((logo, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 transition-all duration-500 filter grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100"
                  fill="currentColor"
                  style={{ '--hover-color': logo.color } as React.CSSProperties}
                >
                  <path 
                    d={logo.path} 
                    className="group-hover:fill-[var(--hover-color)]" 
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-nexusLime animate-pulse"></div>
          <span className="text-[10px] font-bold text-nexusLime uppercase tracking-[0.15em]">STUDIO TECHNOLOGIQUE NOUVELLE GÉNÉRATION</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
        >
          Déployez votre plateforme <br className="hidden md:block" /> 
          digitale <span className="text-nexusLime">10x plus vite</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
        >
          NEXUS transforme vos processus complexes en interfaces intuitives et performantes. 
          Landing pages premium, SaaS et outils métiers construits avec une précision absolue 
          et une rapidité d'exécution inédite sur le marché.
        </motion.p>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mx-auto mb-20"
        >
           <a 
            href="#audit"
            className="w-full sm:w-auto flex-1 whitespace-nowrap px-8 py-4 rounded-full bg-nexusLime text-nexusBlack font-bold text-base hover:bg-nexusLime/90 transition-all shadow-[0_0_30px_rgba(191,245,73,0.3)] flex items-center justify-center gap-2 group"
           >
             Lancer mon produit <Zap size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
           </a>
           <a 
            href="#stream"
            className="w-full sm:w-auto flex-1 whitespace-nowrap px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
           >
             Explorer nos services <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </motion.div>

        {/* Interactive Dashboard Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full relative"
        >
          <InteractiveDashboard />
        </motion.div>

        <LogoBand />

      </div>
    </section>
  );
};