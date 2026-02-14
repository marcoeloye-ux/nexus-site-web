import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  LayoutGrid, 
  BarChart3, 
  FolderKanban, 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Moon, 
  ChevronRight 
} from 'lucide-react';

type Tab = 'dashboard' | 'analytics' | 'projects' | 'messages' | 'settings';

export const InteractiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [toggles, setToggles] = useState({
    '2fa': true,
    'login-notify': false,
    'encryption': true,
    'dark-mode': true,
    'compact': false
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const toggleSwitch = (id: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, title: 'Dashboard', subtitle: 'Vue globale' },
    { id: 'analytics', icon: BarChart3, title: 'Analyses', subtitle: 'Métriques' },
    { id: 'projects', icon: FolderKanban, title: 'Projets', subtitle: 'Activités' },
    { id: 'messages', icon: MessageSquare, title: 'Messages', subtitle: 'Chat' },
    { id: 'settings', icon: Settings, title: 'Paramètres', subtitle: 'Config' },
  ];

  return (
    <div 
      className="perspective-[1000px] w-full flex justify-center py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        ref={containerRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-4xl mx-auto bg-nexusBlack/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row min-h-[460px] shadow-2xl relative group/dashboard transition-shadow duration-500 hover:shadow-nexusLime/5"
      >
        {/* Decorative Glow */}
        <div className="absolute -inset-1 bg-nexusLime/5 blur-3xl opacity-0 group-hover/dashboard:opacity-100 transition-opacity pointer-events-none" />

        {/* Sidebar Navigation - Compressed by ~30% */}
        <nav className="w-full md:w-56 border-r border-white/5 bg-black/40 p-3 flex flex-col gap-1 relative z-10">
          <div className="px-3 py-4 border-b border-white/5 mb-3 text-left">
            <h2 className="text-white font-bold text-base tracking-tight">Centre de Contrôle</h2>
            <p className="text-nexusLime text-[9px] uppercase tracking-widest font-bold mt-1">Premium OS v2.4 Live</p>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left group ${
                activeTab === item.id 
                  ? 'bg-nexusLime/10 border border-nexusLime/20' 
                  : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                activeTab === item.id ? 'bg-nexusLime text-nexusBlack' : 'bg-white/5 text-white/40'
              }`}>
                <item.icon size={16} />
              </div>
              <div className="flex-1">
                <div className={`text-xs font-bold ${activeTab === item.id ? 'text-white' : 'text-white/60'}`}>{item.title}</div>
                <div className="text-[9px] text-white/30 uppercase tracking-wider">{item.subtitle}</div>
              </div>
              {activeTab === item.id && (
                <motion.div layoutId="active-arrow">
                  <ChevronRight size={12} className="text-nexusLime" />
                </motion.div>
              )}
            </button>
          ))}
        </nav>

        {/* Content Area - Optimized for reduced scale */}
        <main className="flex-1 p-6 md:p-8 relative z-10 overflow-hidden min-h-[400px] text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -5 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <header>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-nexusLime/10 border border-nexusLime/20 text-nexusLime text-[9px] font-bold uppercase tracking-widest mb-3">Vue d'ensemble</span>
                    <h1 className="text-3xl font-display font-bold text-white mb-1">Dashboard</h1>
                    <p className="text-white/40 text-sm max-w-sm">Surveillance des clusters de performance en temps réel.</p>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: 'Utilisateurs', value: '12.5K', growth: '+12%' },
                      { label: 'Revenus', value: '$84K', growth: '+4.5%' },
                      { label: 'Uptime', value: '98.5%', growth: 'Stable' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-nexusLime/30 transition-colors">
                        <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</span>
                          <span className="text-[9px] text-nexusLime font-bold">{stat.growth}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} className="text-nexusLime" />
                      <h3 className="text-white text-sm font-bold">Métriques de Croissance</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-white/60">
                        <span>Objectif de Déploiement</span>
                        <span className="text-nexusLime">78%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          className="h-full bg-nexusLime"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <header>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-nexusLime/10 border border-nexusLime/20 text-nexusLime text-[9px] font-bold uppercase tracking-widest mb-3">Analyses</span>
                    <h1 className="text-3xl font-display font-bold text-white mb-1">Performances</h1>
                  </header>

                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                    <Clock size={18} className="text-nexusLime" />
                    <div>
                      <h3 className="text-white text-sm font-bold">Flux Temps Réel</h3>
                      <p className="text-[11px] text-white/50">2.4M de pages indexées.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {['Visiteurs', 'Leads', 'Ventes'].map((label, i) => (
                        <div key={label} className="space-y-1">
                          <div className="flex justify-between text-[9px] text-white/40 uppercase font-bold">
                            <span>{label}</span>
                            <span>{[100, 45, 12][i]}%</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${[100, 45, 12][i]}%` }}
                              className="h-full bg-white/20"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center border border-white/5 rounded-xl bg-black/20 p-2">
                      <BarChart3 className="text-nexusLime opacity-10" size={60} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <header>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-nexusLime/10 border border-nexusLime/20 text-nexusLime text-[9px] font-bold uppercase tracking-widest mb-3">Workspace</span>
                    <h1 className="text-3xl font-display font-bold text-white mb-1">Projets en cours</h1>
                  </header>
                  <div className="space-y-2">
                    {[
                      { name: 'Nexus Engine', status: '75%' },
                      { name: 'Migration Cloud', status: 'Revue' },
                      { name: 'Audit Sécurité', status: 'Terminé' },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg">
                        <span className="text-xs text-white/80 font-medium">{p.name}</span>
                        <span className="text-[9px] font-bold uppercase text-nexusLime">{p.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <header>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-nexusLime/10 border border-nexusLime/20 text-nexusLime text-[9px] font-bold uppercase tracking-widest mb-3">Configuration</span>
                    <h1 className="text-3xl font-display font-bold text-white mb-1">Paramètres</h1>
                  </header>
                  <div className="space-y-3">
                    {[
                      { id: '2fa', icon: ShieldCheck, title: 'Auth 2FA' },
                      { id: 'encryption', icon: Zap, title: 'Chiffrement' },
                      { id: 'dark-mode', icon: Moon, title: 'Contraste élevé' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-lg group hover:border-nexusLime/20 transition-colors cursor-pointer" onClick={() => toggleSwitch(item.id as keyof typeof toggles)}>
                        <div className="flex items-center gap-3">
                          <item.icon size={14} className="text-white/40 group-hover:text-nexusLime" />
                          <span className="text-xs font-bold text-white">{item.title}</span>
                        </div>
                        <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${toggles[item.id as keyof typeof toggles] ? 'bg-nexusLime' : 'bg-white/10'}`}>
                          <motion.div 
                            animate={{ x: toggles[item.id as keyof typeof toggles] ? 16 : 0 }}
                            className="w-3 h-3 bg-white rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3 py-6">
                  <div className="p-4 bg-nexusLime/10 text-nexusLime rounded-full">
                    <MessageSquare size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Communications</h3>
                  <p className="text-white/40 text-xs max-w-[200px]">Ligne sécurisée active. 12 notifications en attente.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
};