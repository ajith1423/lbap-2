import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, Activity, ShieldCheck, Cpu, Database, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="text-slate-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
            alt="Factory Background" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
         />
         <div className="relative z-10 container-custom">
            <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.6em] mb-8">Engineering Technical Superiority</motion.h4>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-tight max-w-4xl mx-auto">
               Engineering technical <br /> superiority with precision.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-white/60 text-lg max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
               LBAP redefines industrial automotive manufacture through precision engineering and scale, delivering components that support global technical protocols.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center gap-6">
               <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">Explore Solutions</button>
               <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/20 transition-all">Watch the Process</button>
            </motion.div>
         </div>
      </section>

      {/* --- Manufacturing Pulse --- */}
      <section className="py-12 bg-white border-b border-slate-100">
         <div className="container-custom">
            <div className="flex items-center gap-2 mb-10">
               <Activity className="w-4 h-4 text-[#0B96AC]" />
               <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Manufacturing Pulse</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { label: "Industrial Precision (Stamping)", val: "98.4%", change: "+12%", color: "text-green-500" },
                 { label: "3.5MW Photovoltaic Matrix", val: "74.2%", change: "Achieved", color: "text-[#0B96AC]" },
                 { label: "Supply Chain Flow", val: "154,000", change: "Parts/Month", color: "text-slate-400" },
                 { label: "Annual Production Scale", val: "42M", change: "+8%", color: "text-green-500" }
               ].map((item, i) => (
                 <div key={i} className="bg-slate-50 border border-slate-100 p-8 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{item.label}</p>
                    <div className="flex items-baseline gap-3">
                       <span className="text-3xl font-black text-slate-900 tracking-tighter">{item.val}</span>
                       <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.change}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Core Matrix Section --- */}
      <section className="py-32 bg-white overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
               <div className="lg:col-span-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Technical Excellence in Focus</h4>
                  <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">The engineering core matrix.</h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-16 max-w-2xl">
                     Technical precision built into the digitized application of structural steel fabrication. We don't just assemble parts; we engineer performance systems that withstand the most demanding automotive environments.
                  </p>
                  <div className="relative aspect-video bg-slate-100 overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" 
                        alt="Drill" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                     />
                     <div className="absolute top-8 left-8">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                           <Cpu className="w-5 h-5 text-white" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4">
                  <div className="bg-[#E1F3F5] p-12 h-full flex flex-col justify-between">
                     <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0B96AC] mb-10">Technical Standard Monitoring</h4>
                        <div className="mb-12">
                           <span className="text-6xl font-black text-slate-900 tracking-tighter">0.02%</span>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2">Reject Threshold</p>
                        </div>
                        <div className="mb-12">
                           <span className="text-4xl font-black text-slate-900 tracking-tighter">24/7</span>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2">Automated Monitoring</p>
                        </div>
                     </div>
                     <button className="bg-white text-[#0B96AC] px-8 py-4 text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#0B96AC]/5 hover:bg-slate-900 hover:text-white transition-all">
                        Download Standards
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Production Flow --- */}
      <section className="pb-32 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 border border-slate-200">
               <div className="p-16 bg-white flex flex-col justify-between">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-10">
                     <Settings className="w-6 h-6 text-[#0B96AC]" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Clinical Production Flow</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10">
                     Real-time digitization of our manufacturing shop floors prevents material bottlenecks and dynamic workflow obstructions.
                  </p>
                  <button className="self-start text-[10px] font-black uppercase tracking-widest text-[#0B96AC] flex items-center gap-2 group">
                     Read Process Paper <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
               <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-slate-900 group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Map" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 p-16 flex flex-col justify-end text-white">
                     <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Global Supply Chain</h3>
                     <p className="text-white/50 text-sm max-w-sm mb-10 leading-relaxed font-medium">
                        Proprietary department manages global shipments to ensure zero downtime in production lines.
                     </p>
                     <button className="self-start text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 group">
                        Track Delivery <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Partners Bar --- */}
      <section className="py-20 bg-white border-y border-slate-100">
         <div className="container-custom">
            <h4 className="text-[10px] font-black text-center text-slate-300 uppercase tracking-[0.5em] mb-12">Trusted Partners</h4>
            <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale">
               {['AUTO-CORE', 'GEAR-PRO', 'EV-TECH', 'METAL-FORGE', 'NEXUS-DRIVE'].map((partner) => (
                 <div key={partner} className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-slate-900 rounded-sm"></div>
                    <span className="text-[12px] font-black tracking-widest">{partner}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Technical Specs Section --- */}
      <section className="bg-[#0B96AC] py-32 overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h4 className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-10">System Specifications</h4>
                  <div className="space-y-12 mb-16">
                     {[
                        { label: "Automated Feedback", val: "ANALYTICS" },
                        { label: "Technical Reliability", val: "94.8%" },
                        { label: "Cycle Time", val: "42 SEC" },
                        { label: "Material Integrity", val: "HIGH" },
                        { label: "Operational Status", val: "NOMINAL" }
                     ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/20 pb-4">
                           <span className="text-[11px] font-black uppercase tracking-widest text-white/70">{spec.label}</span>
                           <span className="text-2xl font-black text-white tracking-tighter">{spec.val}</span>
                        </div>
                     ))}
                  </div>
                  <button className="px-10 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
                     Download Data Matrix
                  </button>
               </div>
               <div className="relative">
                  <div className="bg-slate-900 p-2 overflow-hidden rounded-sm shadow-2xl">
                     <div className="relative aspect-video overflow-hidden">
                        <img 
                           src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=1200&auto=format&fit=crop" 
                           alt="Engine Analysis" 
                           className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                           <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                              <Activity className="w-6 h-6 text-white" />
                           </div>
                           <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Feed Analysis</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-white/10 rounded-full"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-24 bg-white text-slate-900 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
             <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                      <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
                   </div>
                   <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-xs">
                  We are pleased to introduce ourselves as one of the leading manufacture and supply Pressed Components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for nearly leading automotive customers.
                </p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Mail className="w-4 h-4" />
                   </div>
                   <div className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Globe className="w-4 h-4" />
                   </div>
                </div>
             </div>
             
             <div className="md:col-span-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Quick Links</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                   <li><a href="/" className="hover:text-[#0B96AC] transition-colors">Home</a></li>
                   <li><a href="/about" className="hover:text-[#0B96AC] transition-colors">About Us</a></li>
                   <li><a href="/product" className="hover:text-[#0B96AC] transition-colors">Product</a></li>
                   <li><a href="/career" className="hover:text-[#0B96AC] transition-colors">Career</a></li>
                   <li><a href="#" className="hover:text-[#0B96AC] transition-colors">Client</a></li>
                   <li><a href="/contact" className="hover:text-[#0B96AC] transition-colors">Contact Us</a></li>
                </ul>
             </div>

             <div className="md:col-span-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Contact</h4>
                <ul className="space-y-6 text-sm font-medium text-slate-600">
                   <li className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu</span>
                   </li>
                   <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>jallreellbalaji@gmail.com</span>
                   </li>
                   <li className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>+91 93643 97522 / +91 97910 85511</span>
                   </li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">QR Code</h4>
                <div className="w-32 h-32 bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                   <div className="w-full h-full border border-slate-100 bg-white flex items-center justify-center text-[10px] font-black uppercase text-slate-300 tracking-widest">
                      QR Code
                   </div>
                </div>
             </div>
          </div>
          <div className="pt-10 border-t border-slate-50 text-[11px] font-bold text-slate-300 uppercase tracking-widest text-center">
             COPYRIGHT © 2024 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
