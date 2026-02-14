import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NexusService } from '../services/nexusService';
import { FormStatus, AuditFormData } from '../types';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const LeadMagnet: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState<AuditFormData>({
    companyName: '',
    email: '',
    currentVelocity: 'medium',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      await NexusService.submitAudit(formData);
      setStatus(FormStatus.SUCCESS);
    } catch (error) {
      setStatus(FormStatus.ERROR);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="audit" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-nexusCard border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nexusLime/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-display font-semibold text-4xl md:text-5xl mb-6 text-white">
                Bâtissez des produits <br/> 
                fonctionnels avec <span className="text-nexusLime">l'IA</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-md">
                Créez rapidement des composants réactifs et faites évoluer votre infrastructure. Rejoignez le futur de l'ingénierie.
              </p>

              <div className="flex gap-12">
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">29B+</div>
                   <div className="text-sm text-white/40">Appels API / semaine</div>
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                   <div className="text-sm text-white/40">Disponibilité garantie</div>
                 </div>
              </div>
            </div>

            <div className="bg-[#050505] p-8 rounded-2xl border border-white/5 shadow-2xl">
              {status === FormStatus.SUCCESS ? (
                <div className="text-center py-12">
                   <CheckCircle className="text-nexusLime w-12 h-12 mx-auto mb-4" />
                   <h3 className="text-xl font-bold text-white mb-2">Demande Reçue</h3>
                   <p className="text-white/50">Nos architectes vous contacteront sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-medium mb-4">Lancez votre Audit Flux</h3>
                  <div>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="Email professionnel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-nexusLime transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      required
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Nom de l'entreprise"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-nexusLime transition-colors"
                    />
                  </div>
                  <div>
                    <select 
                      name="currentVelocity"
                      value={formData.currentVelocity}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-nexusLime transition-colors appearance-none"
                    >
                      <option value="medium">Vélocité actuelle : Moyenne</option>
                      <option value="low">Vélocité actuelle : Basse</option>
                      <option value="high">Vélocité actuelle : Haute</option>
                    </select>
                  </div>
                  
                  <button 
                    disabled={status === FormStatus.SUBMITTING}
                    className="w-full bg-nexusLime text-nexusBlack font-bold py-3 rounded-lg hover:bg-nexusLime/90 transition-colors flex items-center justify-center gap-2"
                  >
                    {status === FormStatus.SUBMITTING ? 'Traitement...' : 'Réserver un appel'} <ArrowRight size={16} />
                  </button>
                  {status === FormStatus.ERROR && <p className="text-red-400 text-xs text-center">Erreur lors de l'envoi du formulaire.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};