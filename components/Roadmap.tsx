import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Video, ArrowUpRight } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-12 max-w-7xl mx-auto px-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
         {/* Card 1 */}
         <motion.div 
           whileHover={{ y: -4 }}
           className="group relative bg-nexusCard border border-white/5 rounded-3xl p-8 overflow-hidden"
         >
           <div className="flex justify-between items-start mb-8">
             <div className="p-3 bg-white/5 rounded-lg">
               <Bot className="text-nexusLime" size={24} />
             </div>
             <span className="text-xs font-mono py-1 px-3 rounded-full bg-white/5 text-white/40">ACCÈS BÊTA</span>
           </div>
           
           <h3 className="text-2xl font-bold text-white mb-3">Clones IA Interactifs</h3>
           <p className="text-white/50 mb-8">
             Agents autonomes formés sur votre base de connaissances pour un support client 24/7 indiscernable de l'humain.
           </p>

           {/* Visual mock inside card */}
           <div className="bg-[#050505] rounded-xl p-4 border border-white/5 font-mono text-xs text-white/40">
             <div className="flex gap-2 mb-2">
               <span className="text-nexusLime">IA:</span> Comment puis-je vous aider aujourd'hui ?
             </div>
             <div className="flex gap-2">
               <span className="text-white">User:</span> J'ai besoin de réinitialiser ma clé API.
             </div>
           </div>
         </motion.div>

         {/* Card 2 */}
         <motion.div 
           whileHover={{ y: -4 }}
           className="group relative bg-nexusCard border border-white/5 rounded-3xl p-8 overflow-hidden"
         >
           <div className="flex justify-between items-start mb-8">
             <div className="p-3 bg-white/5 rounded-lg">
               <Video className="text-nexusLime" size={24} />
             </div>
             <span className="text-xs font-mono py-1 px-3 rounded-full bg-white/5 text-white/40">Q3 2026</span>
           </div>
           
           <h3 className="text-2xl font-bold text-white mb-3">Moteur de Production Vidéo</h3>
           <p className="text-white/50 mb-8">
             Générez du contenu vidéo marketing à l'échelle industrielle via des modèles génératifs multimodaux.
           </p>

           {/* Visual mock inside card */}
           <div className="bg-[#050505] rounded-xl p-4 border border-white/5 flex items-center justify-center h-20 group-hover:bg-white/5 transition-colors">
             <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
               <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-1"></div>
             </div>
           </div>
         </motion.div>

       </div>
    </section>
  );
};