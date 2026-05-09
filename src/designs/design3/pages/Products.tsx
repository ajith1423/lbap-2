import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, Settings, Activity, Cpu, Database, ChevronRight } from 'lucide-react';

const Products = () => {
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
            <a href="/product" className="text-[#0B96AC] transition-colors">Product</a>
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
                        <p className="text-2xl font-black text-slate-900 tracking-tighter mb-1">0.002mm</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#0B96AC]">TOLERANCE</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-slate-900 tracking-tighter mb-1">UHSS-250</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#0B96AC]">MATERIAL GRADE</p>
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

export default Products;
