import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, Activity, ShieldCheck, Cpu, Database, Settings, Zap, Microscope, LayoutGrid, Radio } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
            alt="Factory Background" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
         />
         <div className="relative z-10 container-custom text-left ml-0 lg:ml-20">
            <motion.h4 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.6em] mb-8">NEXT-GEN AUTOMOTIVE MANUFACTURING</motion.h4>
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-3xl lg:text-[40px] font-black text-white mb-10 tracking-tighter leading-tight max-w-none uppercase">
               Engineering the Future of Mobility with Precision.
            </motion.h1>
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-white/70 text-lg max-w-2xl mb-14 leading-relaxed font-medium">
               LBAP combines robotic automation with elite human expertise to deliver Tier-1 automotive components that redefine industry standards.
            </motion.p>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex justify-start gap-6">
               <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">Explore Solutions</button>
               <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all">Watch the Process</button>
            </motion.div>
         </div>
      </section>

      {/* --- Manufacturing Pulse --- */}
      <section className="py-16 bg-white border-b border-slate-50">
         <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#0B96AC]" />
                  <h3 className="text-[12px] font-black uppercase tracking-widest text-slate-900">Manufacturing Pulse</h3>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">LIVE FEED: FACTORY 01</span>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { label: "Overall Equipment Effectiveness", val: "98.4%", change: "+1.2%", color: "text-green-500" },
                 { label: "Units Produced (24h)", val: "14,202", change: "/ 15k Target", color: "text-slate-400" },
                 { label: "Quality Yield Rate", val: "99.98%", change: "Nominal", color: "text-[#0B96AC]" },
                 { label: "Active Robotic Cells", val: "156", change: "NOMINAL", color: "text-[#0B96AC]" }
               ].map((item, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-8 border border-slate-100 flex flex-col justify-between h-40">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{item.label}</p>
                     <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-slate-900 tracking-tighter">{item.val}</span>
                        <span className={`text-[9px] font-black uppercase tracking-widest ${item.color}`}>{item.change}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- The Engineering-First Culture --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="mb-20">
               <h4 className="text-slate-300 text-[11px] font-black uppercase tracking-[0.4em] mb-6">The Engineering-First Culture</h4>
               <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                  Our philosophy is built on the rigorous application of physics and precision. We don't just assemble parts; we engineer performance systems that withstand the most demanding automotive environments.
               </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 border border-slate-100 p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-10">
                     <Microscope className="w-5 h-5 text-[#0B96AC]" />
                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Metrology & Validation</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-12 max-w-md">
                     Every component undergoes sub-micron inspection using coordinate measuring machines (CMM) and laser scanning to ensure absolute adherence to CAD specifications.
                  </p>
                  <div className="relative aspect-[21/9] overflow-hidden bg-slate-100 mt-auto">
                     <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" 
                        alt="Metrology" 
                        className="w-full h-full object-cover grayscale brightness-90"
                     />
                  </div>
               </div>

               <div className="lg:col-span-4 bg-[#D0E7E9] p-16 flex flex-col text-[#1A2E35]">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0B96AC] mb-12">6-Sigma Operational Excellence</h4>
                  <div className="mb-14">
                     <span className="text-7xl font-black tracking-tighter">0.02%</span>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-50">Defect Tolerance</p>
                  </div>
                  <div className="mb-auto">
                     <span className="text-5xl font-black tracking-tighter">24/7</span>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-50">Automated Monitoring</p>
                  </div>
                  <button className="mt-12 w-full py-4 bg-white text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0B96AC] transition-all">
                     Download Standards
                  </button>
               </div>
            </div>

            {/* Smart Factory IoT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
               <div className="lg:col-span-4 border border-slate-100 p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-10">
                     <Radio className="w-5 h-5 text-[#0B96AC]" />
                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Smart Factory IoT</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10">
                     Real-time digital twins of our manufacturing floor allow for predictive maintenance and dynamic workflow optimization.
                  </p>
               </div>
               <div className="lg:col-span-8 relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Supply Chain" 
                    className="w-full h-[280px] object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 p-12 flex flex-col justify-center text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-3 italic font-serif">AI-Driven Supply Chain</span>
                     <p className="text-white/80 text-sm max-w-sm mb-8 leading-relaxed font-medium italic">
                        Proprietary algorithms manage our tier structure logistics to ensure zero downtime in production cycles.
                     </p>
                     <button className="self-start text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-3 group">
                        Read Research Paper <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Strategic Alliances --- */}
      <section className="py-24 bg-white border-t border-slate-50">
         <div className="container-custom text-center">
            <h4 className="text-[#0B96AC] text-[11px] font-black uppercase tracking-[0.5em] mb-6">STRATEGIC ALLIANCES</h4>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-20">Trusted by Global Tier-1 Manufacturers</h3>
            <div className="flex flex-wrap justify-center items-center gap-20 opacity-40 grayscale">
               {[
                 { name: 'AUTO-CORE', icon: Database },
                 { name: 'GEAR-PRO', icon: Settings },
                 { name: 'EV-TECH', icon: Zap },
                 { name: 'METAL-FORGE', icon: Cpu },
                 { name: 'NEXUS-DRIVE', icon: LayoutGrid }
               ].map((partner) => (
                 <div key={partner.name} className="flex flex-col items-center gap-4">
                    <partner.icon className="w-8 h-8" />
                    <span className="text-[11px] font-black tracking-widest uppercase">{partner.name}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- System Specifications --- */}
      <section className="bg-[#0B96AC] py-24 overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h4 className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-12">System Specifications</h4>
                  <div className="space-y-10 mb-16">
                     {[
                        { label: "HYDRAULIC PRESSURE", val: "4500 PSI" },
                        { label: "TORQUE ACCURACY", val: "+/- 0.05 MM" },
                        { label: "CYCLE TIME", val: "42 SEC" },
                        { label: "THERMAL VARIANCE", val: "< 0.1° C" },
                        { label: "ISO COMPLIANCE", val: "9001:2015" }
                     ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/20 pb-4">
                           <span className="text-[11px] font-black uppercase tracking-widest text-white/70">{spec.label}</span>
                           <span className="text-2xl font-black text-white tracking-tighter">{spec.val}</span>
                        </div>
                     ))}
                  </div>
                  <button className="px-10 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-all">
                     REQUEST FULL SCHEMATICS
                  </button>
               </div>
               <div className="relative p-1 bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-sm">
                  <div className="relative aspect-video overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" 
                        alt="Live Render" 
                        className="w-full h-full object-cover opacity-60"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Cpu className="w-12 h-12 text-[#0B96AC] mb-4 animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Render Engine</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
