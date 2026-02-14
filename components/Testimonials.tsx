import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  handle: string;
  text: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jackson Groves",
    handle: "@JACKSON",
    text: "J'adore. Je suis très satisfait du logiciel, j'ai commencé à générer plus de leads pour mon entreprise et le processus est beaucoup plus fluide.",
    initials: "J",
    color: "bg-red-500"
  },
  {
    name: "Chelsea Boh",
    handle: "@CHELSEY",
    text: "Excellent produit et équipe encore meilleure. Il est si facile de former, lancer, faire des démos et vendre des IA. Ils ont un client à vie désormais.",
    initials: "C",
    color: "bg-emerald-500"
  },
  {
    name: "Aaron Perry",
    handle: "@AARON",
    text: "10/10 je recommande. C'est un logiciel solide ! Les fondateurs se soucient vraiment des utilisateurs et cherchent toujours à s'améliorer.",
    initials: "A",
    color: "bg-pink-500"
  },
  {
    name: "Jack Cl",
    handle: "@JACK",
    text: "Super produit - tout neuf mais va définitivement dans la bonne direction vu la vitesse de changement que je constate. Ça vaut chaque centime.",
    initials: "J",
    color: "bg-orange-500"
  },
  {
    name: "Majd",
    handle: "@MAJD",
    text: "Un service exceptionnel. Albert et son équipe vous guident pas à pas pour littéralement vous donner toutes les clés pour bâtir votre propre business IA.",
    initials: "M",
    color: "bg-teal-500"
  },
  {
    name: "Tristan Monahan",
    handle: "@TRISTAN",
    text: "Un véritable changement de donne. J'utilise NEXUS depuis un moment maintenant, et c'est de loin l'un des outils les plus efficaces pour l'ingénierie moderne.",
    initials: "T",
    color: "bg-blue-500"
  },
  {
    name: "Michael",
    handle: "@MICHAEL",
    text: "La meilleure plateforme. Très ergonomique, c'est la plus intuitive que j'ai utilisée pour ce type de travail. Extrêmement facile de créer et de lancer.",
    initials: "M",
    color: "bg-cyan-500"
  },
  {
    name: "Sarah Jenkins",
    handle: "@SARA_J",
    text: "J'ai décroché un contrat via leur marketplace. Je viens de signer une mission de conseil avec un client qui avait posté son offre ici.",
    initials: "S",
    color: "bg-purple-500"
  },
  {
    name: "David Chen",
    handle: "@DCHEN",
    text: "La vitesse d'exécution est bluffante. Nous sommes passés d'un croquis à un dashboard prêt pour la production en moins d'une semaine.",
    initials: "D",
    color: "bg-indigo-500"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-6 hover:border-nexusLime/30 transition-all duration-500 group select-none">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-white shadow-lg text-sm shrink-0`}>
        {testimonial.initials}
      </div>
      <div className="text-left overflow-hidden">
        <div className="text-sm font-bold text-white group-hover:text-nexusLime transition-colors truncate">{testimonial.name}</div>
        <div className="text-[9px] text-white/30 uppercase tracking-widest font-bold truncate">{testimonial.handle}</div>
      </div>
    </div>
    <p className="text-xs md:text-sm text-white/40 leading-relaxed italic text-left group-hover:text-white/60 transition-colors">
      "{testimonial.text}"
    </p>
  </div>
);

const InfiniteColumn: React.FC<{ items: Testimonial[]; duration: number; reverse?: boolean }> = ({ items, duration, reverse = false }) => {
  // Quadruple the list so that moving by 25% height is exactly one full set.
  // This creates a mathematically perfect loop that never shows a "gap" or "end".
  const columnItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className="relative h-[700px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <motion.div
        className="flex flex-col gap-6 py-6"
        animate={{ 
          y: reverse ? ["-25%", "0%"] : ["0%", "-25%"] 
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {columnItems.map((item, idx) => (
          <TestimonialCard key={idx} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  // Balanced distribution of testimonials
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section id="testimonials" className="py-32 relative bg-nexusBlack overflow-hidden">
      {/* Absolute clean center glow for atmosphere - no lines or grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-nexusLime/[0.015] blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
          >
            Preuve de Vélocité
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Ce que nos utilisateurs disent
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/20 text-base md:text-lg max-w-xl mx-auto font-medium"
          >
            Des milliers d'ingénieurs utilisent NEXUS pour livrer des produits à la vitesse de la lumière.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <InfiniteColumn items={col1} duration={35} />
          <div className="hidden md:block">
            <InfiniteColumn items={col2} duration={45} reverse />
          </div>
          <div className="hidden lg:block">
            <InfiniteColumn items={col3} duration={40} />
          </div>
        </div>
      </div>
    </section>
  );
};