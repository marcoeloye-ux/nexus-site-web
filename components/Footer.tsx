import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-nexusBlack text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-nexusLime"></div>
            <span className="font-bold text-white">NEXUS</span>
          </div>
          <p className="text-white/40 mb-6 max-w-xs">
            Créez des expériences web intelligentes avec des outils IA conçus pour l'ingénierie moderne.
          </p>
          <div className="text-white/20 text-xs">
            © 2026 NEXUS Studio. Tous droits réservés.
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Produit</h4>
          <ul className="space-y-3 text-white/50">
            <li><a href="#" className="hover:text-nexusLime transition-colors">Fonctionnalités</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Intégrations</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Tarifs</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Journal des modifs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Entreprise</h4>
          <ul className="space-y-3 text-white/50">
            <li><a href="#" className="hover:text-nexusLime transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Carrières</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-nexusLime transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
           <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
             <h4 className="font-bold text-white mb-2">Prêt à construire ?</h4>
             <p className="text-white/40 text-xs mb-4">Générez du code propre et fonctionnel instantanément.</p>
             <a href="#audit" className="block text-center w-full py-2 rounded-lg bg-nexusLime text-nexusBlack font-bold text-xs hover:bg-nexusLime/90">
               Démarrer
             </a>
           </div>
        </div>

      </div>
    </footer>
  );
};