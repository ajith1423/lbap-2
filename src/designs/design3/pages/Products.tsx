import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, Settings, Activity, Cpu, Database, ChevronRight } from 'lucide-react';

const Products = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Hero Section --- */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-6">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-8">MODEL SERIES 7 / 2024</h4>
                  <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1] uppercase">
                     Precision- <br />
                     Engineered <br />
                     Structural <br />
                     Matrices
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md font-medium">
                     Zero-tolerance manufacturing for high-impact automotive components. Designed for thermal stability and structural integrity.
                  </p>
                  <div className="flex gap-16">
                     <div>
                        <p className="text-2xl font-black text-[#0B96AC] tracking-tighter mb-1">0.002mm</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">TOLERANCE</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-[#0B96AC] tracking-tighter mb-1">UHSS-250</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">MATERIAL GRADE</p>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" 
                        alt="Metal Matrix" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Component Catalog --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Component Catalog</h2>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">SHOWING 24 OF 142 COMPONENTS</p>
            </div>
            
            <div className="overflow-x-auto border border-slate-100">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-[#0B96AC] text-white">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">PART ID</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">GEOMETRY</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">MATERIAL</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">THICKNESS</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">TENSILE</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">ACTION</th>
                     </tr>
                  </thead>
                  <tbody className="text-[13px] font-bold text-slate-600 uppercase tracking-widest">
                     {[
                        { id: "LBAP-004-X", geo: "Cross-Beam Matrix", mat: "UHSS/Phase 2", thick: "1.80mm", tens: "980 MPa" },
                        { id: "LBAP-102-Y", geo: "Pillar Reinforcement", mat: "Boron Steel G3", thick: "2.10 mm", tens: "1200 MPa" },
                        { id: "LBAP-909-Z", geo: "Chassis Node", mat: "Al-6061-T6", thick: "4.50 mm", tens: "310 MPa" },
                        { id: "LBAP-507-A", geo: "Roof Rail Segment", mat: "DP600 Steel", thick: "0.60 mm", tens: "600 MPa" },
                        { id: "LBAP-902-B", geo: "Front Subframe", mat: "UHSS/Phase 3", thick: "3.20 mm", tens: "1100 MPa" }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                           <td className="p-6 text-slate-900 font-black">{item.id}</td>
                           <td className="p-6 flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#0B96AC]"></div>
                              {item.geo}
                           </td>
                           <td className="p-6">{item.mat}</td>
                           <td className="p-6">{item.thick}</td>
                           <td className="p-6">{item.tens}</td>
                           <td className="p-6">
                              <button className="text-[#0B96AC] flex items-center gap-2 hover:gap-4 transition-all group">
                                 <ChevronRight className="w-4 h-4" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* --- Visual Analysis Gallery --- */}
      <section className="pb-32 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 relative aspect-square lg:aspect-auto h-full overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
                    alt="Detail Analysis" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-widest text-white/50">
                     CODE: R07XL/MATRIX-X @ 0.002mm
                  </div>
               </div>
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="aspect-square relative overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
                        alt="Measurement" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
                  <div className="aspect-square relative overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" 
                        alt="Robotic Welding" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Products;
