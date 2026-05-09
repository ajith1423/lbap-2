import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Cpu, Box, Settings, ArrowRight, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Products = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      
      {/* --- Header Section --- */}

      {/* --- Header Section --- */}
      <section className="py-12 bg-white border-b border-[#E5E9F0]">
        <div className="w-full px-8 lg:px-20">
          <h1 className="text-[36px] font-black text-[#1A1A1A] mb-4 tracking-tight">Component Engineering Catalog</h1>
          <p className="text-[#595959] max-w-2xl leading-relaxed text-[15px] font-medium">
            Precision-manufactured automotive solutions engineered for peak performance and structural integrity. Explore our technical specifications and material grades.
          </p>
        </div>
      </section>

      {/* --- Explorer Tool Section --- */}
      <section className="py-12 bg-white">
        <div className="w-full px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Categories */}
            <div className="lg:w-64 shrink-0">
               <div className="bg-[#F8FAFC] border border-[#E5E9F0] p-8 rounded-sm shadow-sm">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B96AC] mb-10">TECHNICAL CATEGORIES <br/><span className="text-slate-400 opacity-60">ENGINEERING SPECS</span></h4>
                  <div className="space-y-3">
                     <button className="w-full flex items-center gap-4 px-5 py-4 bg-white border border-[#0B96AC]/30 text-[#0B96AC] text-[11px] font-bold uppercase tracking-widest shadow-sm">
                        <div className="w-1 h-4 bg-[#0B96AC] absolute left-0"></div>
                        <Cpu className="w-4 h-4" /> SHEET METAL
                     </button>
                     <button className="w-full flex items-center gap-4 px-5 py-4 text-[#8E99AF] text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
                        <Settings className="w-4 h-4" /> FABRICATION
                     </button>
                     <button className="w-full flex items-center gap-4 px-5 py-4 text-[#8E99AF] text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
                        <Box className="w-4 h-4" /> PRESS COMPONENTS
                     </button>
                  </div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow">
               {/* Technical Specification Explorer */}
               <div className="bg-[#F8FAFC] border border-[#E5E9F0] p-10 rounded-sm mb-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                     <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B96AC] mb-2">EXPLORER TOOL</h4>
                        <h3 className="text-[24px] font-bold text-[#1A1A1A] tracking-tight">Technical Specification Explorer</h3>
                     </div>
                     <div className="flex gap-2">
                        <button className="px-5 py-2 bg-[#0B96AC] text-white text-[10px] font-bold uppercase tracking-widest">CRCA</button>
                        <button className="px-5 py-2 bg-white border border-[#E5E9F0] text-[#8E99AF] text-[10px] font-bold uppercase tracking-widest hover:border-[#0B96AC]/50">HR</button>
                        <button className="px-5 py-2 bg-white border border-[#E5E9F0] text-[#8E99AF] text-[10px] font-bold uppercase tracking-widest hover:border-[#0B96AC]/50">SS</button>
                     </div>
                  </div>

                  <div className="overflow-hidden border border-[#E5E9F0] rounded-sm bg-white">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-[#0B96AC] text-white">
                              <th className="p-5 text-[10px] font-bold uppercase tracking-widest">GRADE CODE</th>
                              <th className="p-5 text-[10px] font-bold uppercase tracking-widest">THICKNESS (MM)</th>
                              <th className="p-5 text-[10px] font-bold uppercase tracking-widest">TOLERANCE</th>
                              <th className="p-5 text-[10px] font-bold uppercase tracking-widest">YIELD STRENGTH</th>
                              <th className="p-5 text-[10px] font-bold uppercase tracking-widest">APPLICATION</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px]">
                           {[
                              { grade: "ST12 / DC01", thickness: "0.50 — 2.00", tolerance: "± 0.05mm", yield: "280 MPa", app: "Body Panels" },
                              { grade: "ST14 / DC04", thickness: "0.80 — 3.50", tolerance: "± 0.03mm", yield: "210 MPa", app: "Deep Drawing" },
                              { grade: "SPCC", thickness: "1.00 — 4.00", tolerance: "± 0.08mm", yield: "240 MPa", app: "Brackets" }
                           ].map((row, i) => (
                              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all">
                                 <td className="p-5 font-bold text-[#1A1A1A]">{row.grade}</td>
                                 <td className="p-5 text-[#595959]">{row.thickness}</td>
                                 <td className="p-5 text-[#595959]">{row.tolerance}</td>
                                 <td className="p-5 text-[#595959]">{row.yield}</td>
                                 <td className="p-5 text-[#1A1A1A] font-semibold">{row.app}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>

               {/* Product Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      id: "CH-9830",
                      name: "Chassis Brackets", 
                      desc: "High-tensile steel brackets designed for structural reinforcement with ±0.1mm tolerance levels.",
                      material: "HR 4.0mm",
                      process: "Stamping",
                      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
                      bestSeller: true
                    },
                    { 
                      id: "DF-4412",
                      name: "Door Internal Frames", 
                      desc: "Ultra-lightweight DC04 deep-draw components for passenger safety and door alignment integrity.",
                      material: "DC04 0.8mm",
                      process: "Prog-Die",
                      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                    },
                    { 
                      id: "TH-1022",
                      name: "Transmission Housing", 
                      desc: "Precision-machined fabrication for heavy-duty commercial vehicle transmission mounts.",
                      material: "SS304 6.0mm",
                      process: "Fabrication",
                      img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
                    },
                    { 
                      id: "SA-3310",
                      name: "Suspension Arms", 
                      desc: "Safety-critical suspension components featuring robotic welding and ultrasonic testing certification.",
                      material: "HR 12.0mm",
                      process: "Welding",
                      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop"
                    }
                  ].map((product, idx) => (
                    <div key={idx} className="bg-white border border-[#E5E9F0] flex flex-col h-full group overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all">
                       <div className="relative h-64 overflow-hidden">
                          <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          {product.bestSeller && (
                             <div className="absolute top-4 left-4 bg-[#0B67FF] px-4 py-1.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">BEST SELLER</div>
                          )}
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </div>
                       <div className="p-8 flex flex-col justify-between flex-grow">
                          <div>
                             <div className="flex justify-between items-start mb-6">
                                <h3 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight leading-tight">{product.name}</h3>
                                <span className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-widest pt-1">#{product.id}</span>
                             </div>
                             <p className="text-[14px] text-[#595959] leading-relaxed mb-10 font-medium">
                                {product.desc}
                             </p>
                             
                             <div className="flex gap-10 mb-10 border-t border-slate-50 pt-8">
                                <div>
                                   <p className="text-[9px] font-bold text-[#8E99AF] uppercase tracking-widest mb-2">MATERIAL</p>
                                   <p className="text-[12px] font-bold text-[#1A1A1A]">{product.material}</p>
                                </div>
                                <div>
                                   <p className="text-[9px] font-bold text-[#8E99AF] uppercase tracking-widest mb-2">PROCESS</p>
                                   <p className="text-[12px] font-bold text-[#1A1A1A]">{product.process}</p>
                                </div>
                             </div>
                          </div>
                          <button className="w-full py-4 bg-[#0B96AC] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2">
                             ADD TO RFQ LIST
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Products;
