import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, Settings, Activity, Cpu, Database, ShieldCheck, Thermometer, Droplets, Zap, Wind } from 'lucide-react';

const Machineries = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase text-slate-900">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="text-[#0B96AC] transition-colors">Machineries</a>
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
      <section className="py-20 bg-white border-b border-slate-50">
         <div className="container-custom flex justify-between items-start">
            <div className="max-w-xl">
               <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-4">SHOP FLOOR V4.0</h4>
               <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 uppercase">VIRTUAL SHOP FLOOR</h1>
               <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Real-time machinery oversight for LBAP automotive manufacturing pipelines. Access technical specifications and maintenance metrics across all primary production clusters.
               </p>
            </div>
            <div className="flex gap-4">
               <div className="bg-slate-50 border border-slate-100 p-6 flex flex-col items-center justify-center min-w-[160px]">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Facility Status</span>
                  </div>
                  <span className="text-sm font-black uppercase tracking-tighter text-slate-900">OPERATIONAL</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 p-6 flex flex-col items-center justify-center min-w-[160px]">
                  <div className="flex items-center gap-2 mb-2 text-[#0B96AC]">
                     <Zap className="w-3 h-3" />
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Efficiency</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">98.4%</span>
               </div>
            </div>
         </div>
      </section>

      {/* --- Virtual Monitor Dashboard --- */}
      <section className="py-16 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* Zone A: Press Shop */}
               <div className="lg:col-span-8 flex flex-col border border-slate-100 group">
                  <div className="bg-[#0B96AC] text-white p-4 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 text-white" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">ZONE A: PRESS SHOP</span>
                     </div>
                     <span className="text-[9px] font-black text-white uppercase tracking-widest px-3 py-1 bg-white/20 border border-white/30 rounded-full">High-Capacity Zone</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                        alt="Press Shop" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2000ms]"
                     />
                     <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center animate-ping opacity-25"></div>
                  </div>
               </div>

               {/* Zone C: QC Lab Panel */}
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="border border-slate-100 p-10 flex flex-col h-full group hover:border-[#0B96AC]/20 transition-all">
                     <div className="flex items-center gap-3 mb-12">
                        <Activity className="w-5 h-5 text-[#0B96AC]" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">ZONE C: QC LAB</span>
                     </div>
                     <div className="space-y-10 mb-auto">
                        <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                           <div className="flex flex-col">
                              <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">CALIBRATION ID</span>
                              <span className="text-sm font-black uppercase text-slate-900 tracking-tight">Dimensional Audit</span>
                           </div>
                           <span className="text-lg font-black text-[#0B96AC] tracking-tighter">±0.002mm</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                           <div className="flex flex-col">
                              <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">STRESS TEST NO</span>
                              <span className="text-sm font-black uppercase text-slate-900 tracking-tight">Tensile Evaluation</span>
                           </div>
                           <span className="text-lg font-black text-slate-900 tracking-tighter">450 MPa</span>
                        </div>
                     </div>
                     <button className="mt-12 w-full py-4 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0B96AC] hover:border-[#0B96AC]/20 hover:bg-slate-50 transition-all">
                        View Calibration Logs
                     </button>
                  </div>

                  {/* Facility Telemetry */}
                  <div className="bg-[#0B96AC] p-10 flex flex-col text-white group">
                     <div className="flex items-center gap-2 mb-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Facility Telemetry</span>
                     </div>
                     <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                        {[
                           { label: "TEMP", val: "22.4°C", icon: Thermometer },
                           { label: "HUMIDITY", val: "44%", icon: Droplets },
                           { label: "VIBRATION", val: "0.02g", icon: Activity },
                           { label: "AMBIENT NOISE", val: "84dB", icon: Wind }
                        ].map((stat, i) => (
                           <div key={i} className="flex flex-col">
                              <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                              <span className="text-2xl font-black tracking-tighter text-white">{stat.val}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Active Machineries Cards --- */}
      <section className="py-12 bg-white">
         <div className="container-custom">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">Active Machineries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="border border-slate-100 p-10 flex flex-col group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-start mb-10">
                     <div>
                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">H-frame Mechanical Press</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                           Throughput <span className="text-slate-900">420 Parts/Hr</span>
                        </p>
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-[#0B96AC] bg-[#0B96AC]/10 px-3 py-1 rounded-sm">Nominal</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-[#0B96AC]"></motion.div>
                  </div>
               </div>
               <div className="border border-slate-100 p-10 flex flex-col group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-start mb-10">
                     <div>
                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">Blanking Line SL-4</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                           Uptime <span className="text-slate-900">99.8%</span>
                        </p>
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-sm">Maintenance Due</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '99%' }} transition={{ duration: 2 }} className="h-full bg-orange-500"></motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Zone B: Welding Cluster Table --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-center mb-10">
               <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-[#0B96AC]" />
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">ZONE B: WELDING CLUSTER</h3>
               </div>
               <div className="flex gap-8">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-[#0B96AC]"></div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">8 Robotic Arms Active</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">1 Offline for Servicing</span>
                  </div>
               </div>
            </div>
            
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-[#0B96AC] text-white">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/70">Machine ID</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/70">Type</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/70">Status</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/70">Load %</th>
                     </tr>
                  </thead>
                  <tbody className="text-[13px] font-bold uppercase tracking-widest">
                     {[
                        { id: "ROB-WELD-01", type: "6-Axis Spot Welder", status: "Active", load: 75, color: "text-green-500" },
                        { id: "ROB-WELD-02", type: "Plasma Arc System", status: "Active", load: 91, color: "text-green-500" },
                        { id: "ROB-WELD-03", type: "Laser Seam Integration", status: "Offline", load: 0, color: "text-red-500" },
                        { id: "ROB-WELD-04", type: "6-Axis Spot Welder", status: "Active", load: 65, color: "text-green-500" }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                           <td className="p-6 text-slate-900 font-black">{item.id}</td>
                           <td className="p-6 text-slate-400">{item.type}</td>
                           <td className="p-6 flex items-center gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span className={item.color}>{item.status}</span>
                           </td>
                           <td className="p-6 w-1/3">
                              <div className="flex items-center gap-4">
                                 <div className="flex-grow h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0B96AC]" style={{ width: `${item.load}%` }}></div>
                                 </div>
                                 <span className="text-[11px] text-slate-400 w-8">{item.load}%</span>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-24 bg-white text-slate-900 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
             <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-10 text-[#0B96AC]">
                   <div className="w-10 h-10 rounded-none border-2 border-[#0B96AC] flex items-center justify-center p-1">
                      <div className="w-full h-full bg-[#0B96AC] rounded-none"></div>
                   </div>
                   <span className="font-black text-xl tracking-tighter uppercase text-slate-900">Laxmi Balaji</span>
                </div>
                <p className="text-[15px] text-slate-400 leading-relaxed mb-10 max-w-xs">
                  We are pleased to introduce ourselves as one of the leading manufacture and supply Pressed Components, Fabricated Parts, Assemblies, etc.
                </p>
                <div className="flex gap-5">
                   <div className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Mail className="w-5 h-5" />
                   </div>
                   <div className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Globe className="w-5 h-5" />
                   </div>
                </div>
             </div>
             
             <div className="md:col-span-3 lg:ml-10">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">QUICK LINKS</h4>
                <ul className="space-y-5 text-sm font-bold text-slate-500 uppercase tracking-widest">
                   <li><a href="/" className="hover:text-[#0B96AC] transition-colors">Home</a></li>
                   <li><a href="/about" className="hover:text-[#0B96AC] transition-colors">About Us</a></li>
                   <li><a href="/product" className="hover:text-[#0B96AC] transition-colors">Product</a></li>
                   <li><a href="/career" className="hover:text-[#0B96AC] transition-colors">Career</a></li>
                   <li><a href="/contact" className="hover:text-[#0B96AC] transition-colors">Contact Us</a></li>
                </ul>
             </div>

             <div className="md:col-span-3">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">OFFICE HUB</h4>
                <ul className="space-y-8 text-sm font-bold text-slate-500">
                   <li className="flex items-start gap-5">
                      <MapPin className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span className="leading-relaxed">Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126</span>
                   </li>
                   <li className="flex items-start gap-5">
                      <Mail className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>jallreellbalaji@gmail.com</span>
                   </li>
                   <li className="flex items-start gap-5">
                      <Phone className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>+91 93643 97522</span>
                   </li>
                </ul>
             </div>

             <div className="md:col-span-2 flex flex-col items-end">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">SYNC PROFILE</h4>
                <div className="w-36 h-36 bg-slate-50 border border-slate-100 p-3">
                   <div className="w-full h-full bg-white flex items-center justify-center p-2 shadow-inner">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://laxmibalaji.com')}`} 
                        alt="QR Code" 
                        className="w-full h-full grayscale opacity-20"
                      />
                   </div>
                </div>
             </div>
          </div>
          <div className="pt-12 border-t border-slate-50 text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] text-center">
             COPYRIGHT © 2024 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Machineries;
