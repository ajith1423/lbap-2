import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Activity, Database, ShieldCheck, Thermometer, Droplets, Zap, Wind, Microscope, Crosshair, Gauge } from 'lucide-react';

const Machineries = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Hero Section --- */}
      <section className="py-16 bg-white border-b border-slate-50">
         <div className="container-custom flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="max-w-xl">
               <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-4">SHOP FLOOR V4.0</h4>
               <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 uppercase">Virtual Shop Floor</h1>
               <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Real-time machinery oversight for LBAP automotive manufacturing pipelines. Access technical specifications and maintenance metrics across all primary production clusters.
               </p>
            </div>
            <div className="flex gap-4">
               <div className="bg-slate-50 border border-slate-100 p-8 flex flex-col items-center justify-center min-w-[180px] shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Facility Status</span>
                  </div>
                  <span className="text-base font-black uppercase tracking-tighter text-slate-900">OPERATIONAL</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 p-8 flex flex-col items-center justify-center min-w-[180px] shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-[#0B96AC]">
                     <Zap className="w-4 h-4" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Efficiency</span>
                  </div>
                  <span className="text-3xl font-black text-slate-900 tracking-tighter">98.4%</span>
               </div>
            </div>
         </div>
      </section>

      {/* --- Virtual Monitor Dashboard --- */}
      <section className="py-12 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               
               {/* Zone A: Press Shop */}
               <div className="lg:col-span-8 flex flex-col border border-slate-100 shadow-sm overflow-hidden">
                  <div className="bg-[#1A2E35] text-white p-5 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-[#0B96AC]" />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">ZONE A: PRESS SHOP</span>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">High-Capacity Zone</span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                        alt="Press Shop" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2000ms]"
                     />
                     {/* Overlay Interactive Icon */}
                     <div className="absolute top-1/3 left-1/3 group cursor-pointer">
                        <div className="w-10 h-10 bg-[#0B96AC]/20 border border-[#0B96AC] rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                           <div className="w-3 h-3 bg-[#0B96AC] rounded-full animate-pulse"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Zone C: QC Lab Panel */}
               <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* QC Lab Status */}
                  <div className="border border-slate-100 p-10 flex flex-col h-full shadow-sm">
                     <div className="flex items-center gap-3 mb-12">
                        <Microscope className="w-6 h-6 text-[#0B96AC]" />
                        <span className="text-[12px] font-black uppercase tracking-widest text-slate-700">ZONE C: QC LAB</span>
                     </div>
                     
                     <div className="space-y-10">
                        {/* Dimensional Audit */}
                        <div className="relative pl-8 flex justify-between items-start">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0B96AC]"></div>
                           <div className="flex flex-col">
                              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">CMM STATION 04</span>
                              <span className="text-base font-black text-slate-900 tracking-tight">Dimensional Audit</span>
                           </div>
                           <div className="text-right">
                              <span className="text-2xl font-black text-[#0B96AC] block tracking-tighter">±0.002mm</span>
                              <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">WITHIN SPEC</span>
                           </div>
                        </div>

                        {/* Tensile Evaluation */}
                        <div className="relative pl-8 flex justify-between items-start">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0B96AC]"></div>
                           <div className="flex flex-col">
                              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">STRESS TEST RIG</span>
                              <span className="text-base font-black text-slate-900 tracking-tight">Tensile Evaluation</span>
                           </div>
                           <div className="text-right">
                              <span className="text-2xl font-black text-slate-900 block tracking-tighter">450 MPa</span>
                              <span className="text-[9px] font-black text-[#0B96AC] uppercase tracking-widest">SUCCESS</span>
                           </div>
                        </div>
                     </div>

                     <button className="mt-12 w-full py-4 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0B96AC] hover:border-[#0B96AC]/20 hover:bg-slate-50 transition-all">
                        View Calibration Logs
                     </button>
                  </div>

                  {/* Facility Telemetry */}
                  <div className="bg-[#1A2E35] p-10 flex flex-col text-white shadow-xl">
                     <div className="flex items-center gap-3 mb-10">
                        <Activity className="w-5 h-5 text-[#0B96AC]" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Facility Telemetry</span>
                     </div>
                     <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                        {[
                           { label: "Temp", val: "22.4°C" },
                           { label: "Humidity", val: "44%" },
                           { label: "Vibration", val: "0.02g" },
                           { label: "Ambient Noise", val: "84dB" }
                        ].map((stat, i) => (
                           <div key={i} className="flex flex-col">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">{stat.label}</span>
                              <span className="text-3xl font-black tracking-tighter text-[#0B96AC]">{stat.val}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Active Machineries Section --- */}
      <section className="py-12 bg-white">
         <div className="container-custom">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 mb-12">Active Machineries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { name: "H-frame Mechanical Press", type: "Throughput", val: "420 Parts/Hr", status: "Nominal", color: "bg-[#0B96AC]", progress: 85 },
                 { name: "Blanking Line SL-4", type: "Uptime", val: "99.8%", status: "Maintenance Due", color: "bg-orange-500", progress: 99 }
               ].map((item, idx) => (
                 <div key={idx} className="border border-slate-100 p-10 flex flex-col group hover:shadow-2xl transition-all duration-500 shadow-sm">
                    <div className="flex justify-between items-start mb-10">
                       <div>
                          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{item.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                             {item.type} <span className="text-slate-900">{item.val}</span>
                          </p>
                       </div>
                       <span className={`text-[9px] font-black uppercase tracking-widest ${item.color} text-white px-4 py-1.5 rounded-sm`}>{item.status}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-50 rounded-none overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.progress}%` }} transition={{ duration: 2 }} className={`h-full ${item.color}`}></motion.div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Zone B: Welding Cluster --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center">
                     <Settings className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">ZONE B: WELDING CLUSTER</h3>
               </div>
               <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">8 Robotic Arms Active</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">1 Offline for Rerouting</span>
                  </div>
               </div>
            </div>
            
            <div className="overflow-x-auto border border-slate-100 shadow-sm">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-[#1A2E35] text-white">
                        <th className="p-6 text-[11px] font-black uppercase tracking-widest text-white/70">Machine ID</th>
                        <th className="p-6 text-[11px] font-black uppercase tracking-widest text-white/70">Type</th>
                        <th className="p-6 text-[11px] font-black uppercase tracking-widest text-white/70">Status</th>
                        <th className="p-6 text-[11px] font-black uppercase tracking-widest text-white/70">Load %</th>
                     </tr>
                  </thead>
                  <tbody className="text-[14px] font-bold tracking-tight">
                     {[
                        { id: "ROB-WELD-01", type: "6-Axis Spot Welder", status: "Active", load: 78, color: "text-green-500", icon: ShieldCheck },
                        { id: "ROB-WELD-02", type: "Plasma Arc System", status: "Active", load: 91, color: "text-green-500", icon: ShieldCheck },
                        { id: "ROB-WELD-03", type: "Laser Seam Integration", status: "Offline", load: 0, color: "text-red-500", icon: Activity },
                        { id: "ROB-WELD-04", type: "6-Axis Spot Welder", status: "Active", load: 65, color: "text-green-500", icon: ShieldCheck }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                           <td className="p-6 text-slate-900 font-black">{item.id}</td>
                           <td className="p-6 text-slate-400 font-medium">{item.type}</td>
                           <td className="p-6">
                              <div className={`flex items-center gap-2 ${item.color}`}>
                                 {item.status === 'Active' ? <ShieldCheck className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                                 <span className="uppercase tracking-widest text-[11px] font-black">{item.status}</span>
                              </div>
                           </td>
                           <td className="p-6 w-1/4">
                              <div className="flex items-center gap-6">
                                 {item.load > 0 ? (
                                    <>
                                       <div className="flex-grow h-1.5 bg-slate-100 rounded-none overflow-hidden">
                                          <div className="h-full bg-[#0B96AC]" style={{ width: `${item.load}%` }}></div>
                                       </div>
                                       <span className="text-[12px] text-slate-400 font-black w-10">{item.load}%</span>
                                    </>
                                 ) : (
                                    <span className="text-[12px] text-slate-300 font-black">0%</span>
                                 )}
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Machineries;
