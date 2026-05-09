import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Settings, Cpu, ShieldCheck, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Machineries = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="text-slate-900 transition-colors">Machineries</a>
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

      {/* --- Header Section --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex items-start gap-4 mb-6">
             <div className="w-1 h-20 bg-[#0B96AC]"></div>
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-4">Production Tier III</h4>
                <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Advanced Production Infrastructure.</h1>
                <p className="text-slate-500 max-w-2xl leading-relaxed">
                   A comprehensive showcase of our clinical-grade manufacturing environment, featuring high-precision robotics and synchronized assembly workflows.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- Interactive Factory Map --- */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
           <h3 className="text-2xl font-bold mb-12 tracking-tight">Interactive Factory Map</h3>
           <div className="relative aspect-[21/9] bg-slate-50 border border-slate-100 overflow-hidden group">
              {/* Schematic background pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0B96AC 0, #0B96AC 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
              
              {/* Zones */}
              <div className="absolute top-[10%] left-[5%] w-[25%] h-[40%] border border-dashed border-slate-300 p-6 group-hover:border-[#0B96AC]/50 transition-all">
                 <span className="text-[10px] font-bold text-[#0B96AC] uppercase block mb-2">Zone A</span>
                 <h4 className="text-lg font-bold text-slate-900">Stamping Hub</h4>
              </div>

              <div className="absolute top-[10%] left-[35%] w-[55%] h-[40%] border border-dashed border-slate-300 p-6 group-hover:border-[#0B96AC]/50 transition-all">
                 <span className="text-[10px] font-bold text-[#0B96AC] uppercase block mb-2">Zone B</span>
                 <h4 className="text-lg font-bold text-slate-900">Robotic Welding Cluster</h4>
                 <p className="text-[10px] text-slate-400 mt-2">Hover to see active machines</p>
              </div>

              <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] border border-dashed border-slate-300 p-6 group-hover:border-[#0B96AC]/50 transition-all">
                 <span className="text-[10px] font-bold text-[#0B96AC] uppercase block mb-2">Zone D</span>
                 <h4 className="text-lg font-bold text-slate-900">Metrology & QC Lab</h4>
              </div>

              <div className="absolute bottom-[10%] left-[65%] w-[30%] h-[35%] border border-dashed border-slate-300 p-6 group-hover:border-[#0B96AC]/50 transition-all">
                 <span className="text-[10px] font-bold text-[#0B96AC] uppercase block mb-2">Zone C</span>
                 <h4 className="text-lg font-bold text-slate-900">Final Assembly</h4>
              </div>

              <div className="absolute top-[45%] left-[45%] w-[10%] h-[10%] border border-dashed border-slate-200 flex items-center justify-center">
                 <span className="text-[9px] font-bold text-slate-300 uppercase italic tracking-widest">Logistics</span>
              </div>
           </div>
        </div>
      </section>

      {/* --- Equipment Reliability --- */}
      <section className="pb-16 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 bg-white border border-slate-100 p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-10">
                       <ShieldCheck className="text-[#0B96AC] w-5 h-5" />
                       <h4 className="text-sm font-bold text-slate-900 tracking-tight">Equipment Reliability</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Mean Time Between Failure (MTBF)</p>
                          <div className="flex items-baseline gap-2 mb-4">
                             <span className="text-5xl font-black text-[#0B96AC]">8,420</span>
                             <span className="text-xs font-bold text-slate-400 uppercase">Hours</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                             <div className="w-[85%] h-full bg-[#0B96AC]"></div>
                          </div>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Overall Equipment Effectiveness (OEE)</p>
                          <div className="flex items-baseline gap-2 mb-4">
                             <span className="text-5xl font-black text-[#0B96AC]">94.8</span>
                             <span className="text-xs font-bold text-slate-400 uppercase">%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                             <div className="w-[94%] h-full bg-[#0B96AC]"></div>
                          </div>
                       </div>
                    </div>
                  </div>
                  <div className="mt-12 flex justify-between items-center text-[10px] font-bold">
                     <span className="text-slate-400">Real time data synced from SCADA control.</span>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[#0B96AC] uppercase tracking-widest">Systems Nominal</span>
                     </div>
                  </div>
               </div>

               <div className="bg-[#0B96AC] p-12 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-6">Technical Resource</h4>
                    <h3 className="text-3xl font-black mb-6 leading-tight tracking-tight">Full Capacity Deck</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-8">
                       Download detailed specifications of all 150+ operational units and floor layouts.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 w-16 h-16 rounded-sm flex items-center justify-center mb-10">
                       <Download className="w-8 h-8" />
                    </div>
                    <button className="w-full bg-white text-[#0B96AC] py-4 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                       Download PDF (42MB) <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Machinery Asset List --- */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
           <h3 className="text-2xl font-bold mb-12 tracking-tight">Machinery Asset List</h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { 
                  name: "Schuler Servo 2000", 
                  type: "Press Line", 
                  desc: "High-speed servo-driven stamping press with precision...",
                  spec: "2,000 KN",
                  origin: "GERMANY",
                  img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
                },
                { 
                  name: "Matsuura H.Plus", 
                  type: "Machining", 
                  desc: "Multi-pallet horizontal machining center for 24/7...",
                  spec: "12,000 RPM",
                  origin: "JAPAN",
                  img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop"
                },
                { 
                  name: "Bystronic ByStar 10", 
                  type: "Fabrication", 
                  desc: "Fiber laser cutting system with ultra-high-speed processing of...",
                  spec: "10 KW",
                  origin: "SWISS",
                  img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
                },
                { 
                  name: "Zeiss Prismo VAST", 
                  type: "Quality Control", 
                  desc: "Global standard for high-speed scanning and sub-micron...",
                  spec: "0.1 µm",
                  origin: "GERMANY",
                  img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop"
                }
              ].map((machine, idx) => (
                <div key={idx} className="border border-slate-100 flex flex-col h-full group">
                   <div className="aspect-[4/3] overflow-hidden">
                      <img src={machine.img} alt={machine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                         <p className="text-[9px] font-bold text-[#0B96AC] uppercase tracking-widest mb-2">{machine.type}</p>
                         <h4 className="text-lg font-bold text-slate-900 mb-3">{machine.name}</h4>
                         <p className="text-[11px] text-slate-400 leading-relaxed mb-6">{machine.desc}</p>
                      </div>
                      <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                         <span className="text-[11px] font-bold text-slate-900">{machine.spec}</span>
                         <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{machine.origin}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>



    </div>
  );
};

export default Machineries;
