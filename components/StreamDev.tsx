import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Eye, Rocket } from 'lucide-react';

export const StreamDev: React.FC = () => {
  return (
    <section id="stream" className="py-24 bg-gradient-to-b from-transparent to-nexusCard/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Steps */}
          <div className="relative space-y-12">
            {/* Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-nexusLime/50 via-white/10 to-transparent"></div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-nexusCard border border-white/10 flex items-center justify-center text-nexusLime z-10">
                <Code size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Planifier. Générer. Lancer.</h3>
              <p className="text-white/50">Transformez vos idées en réalité avec une génération de code assistée par IA de pointe.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-nexusCard border border-white/10 flex items-center justify-center text-white z-10 group-hover:text-nexusLime">
                <Eye size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Coder. Visualiser. Déployer.</h3>
              <p className="text-white/50">Créez plus intelligemment, testez plus vite et lancez en toute confiance sur une plateforme unique.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-nexusCard border border-white/10 flex items-center justify-center text-white z-10">
                <Rocket size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Penser. Construire. Expédier.</h3>
              <p className="text-white/50">Du concept au code final, optimisez votre workflow en seulement quelques clics.</p>
            </motion.div>
          </div>

          {/* Right Side: Copy */}
          <div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl mb-8 leading-tight">
              Transformez vos <br/>
              idées en code en <br/>
              <span className="text-white border-b-4 border-nexusLime">quelques secondes</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Décrivez votre concept, laissez NEXUS générer un code propre instantanément, puis prévisualisez, affinez et déployez avec aisance. Nous livrons la destination finale, pas seulement le voyage.
            </p>
            <a href="#audit" className="inline-flex items-center gap-2 text-nexusLime font-bold hover:text-white transition-colors">
              Commencer à bâtir <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};