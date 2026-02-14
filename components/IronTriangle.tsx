import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Database, Palette, Target } from 'lucide-react';

const FeatureCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay: number;
}> = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 rounded-2xl bg-nexusCard border border-white/5 hover:border-white/10 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-nexusLime/10 transition-colors">
      <Icon className="text-white group-hover:text-nexusLime transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const IronTriangle: React.FC = () => {
  const features = [
    {
      title: "Interfaces Web Premium",
      description: "Sites vitrines et Landing pages à effet \"wow\". Un design minimaliste, des temps de chargement instantanés et une structure conçue pour convertir vos visiteurs en clients.",
      icon: Monitor
    },
    {
      title: "Applications & Dashboards SaaS",
      description: "Digitalisez vos opérations. Nous construisons des logiciels sur mesure, sécurisés et évolutifs pour gérer votre logistique, vos finances ou vos processus internes.",
      icon: Database
    },
    {
      title: "Identité & Expérience Utilisateur",
      description: "L'esthétique de la précision. Nous créons des identités visuelles et des interfaces (Swiss Tech Design) qui positionnent immédiatement votre marque dans le haut de gamme.",
      icon: Palette
    },
    {
      title: "Systèmes d'Acquisition Intelligents",
      description: "Automatisation de vos flux de vente, intégration d'outils analytiques pointus et préparation de votre infrastructure aux technologies de demain.",
      icon: Target
    }
  ];

  return (
    <section id="vision" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-nexusLime animate-pulse"></div>
          <span className="text-[10px] font-bold text-nexusLime uppercase tracking-[0.15em]">NOS SOLUTIONS</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-semibold text-3xl md:text-5xl mb-6 text-white max-w-3xl"
        >
          L'architecture de votre croissance digitale.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          Nous concevons des écosystèmes complets, du site vitrine ultra-performant aux applications métiers complexes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};