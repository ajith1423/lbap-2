import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, Camera, Eye, Database, Search } from 'lucide-react';

const Gallery = () => {
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
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="text-[#0B96AC] transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-24 pb-16 bg-white overflow-hidden">
         <div className="container-custom">
            <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-8">MODEL 4 REPOSITORY</h4>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1] uppercase">
               The Precision Lens
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-20 max-w-2xl font-medium">
               A definitive visual archive of LBAP's engineering excellence. High-fidelity documentation of our manufacturing processes, facilities, and the structural integrity of Model 4 components.
            </p>

            {/* Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               <div className="lg:col-span-8 relative aspect-[16/9] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                    alt="Factory Wide" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md border border-white/20">
                     <Camera className="w-4 h-4 text-white" />
                  </div>
               </div>
               <div className="lg:col-span-4 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" 
                    alt="Gears Detail" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
               </div>
               <div className="lg:col-span-4 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" 
                    alt="Welding Sparks" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
               </div>
               <div className="lg:col-span-4 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                    alt="Product Pedestal" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
               </div>
               <div className="lg:col-span-4 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" 
                    alt="CAD Monitor" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* --- Blueprint to Reality --- */}
      <section className="py-24 bg-white border-t border-slate-50">
         <div className="container-custom">
            <div className="flex justify-between items-end mb-20">
               <div className="flex flex-col gap-4">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em]">PROCESS TRANSPARENCY</h4>
                  <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Blueprint to Reality</h2>
               </div>
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">PHASE VERIFICATION: PASS</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: "Digital Synthesis", desc: "Every component begins as a high-density CAD model, stress-tested in virtual environments before a single atom is moved.", img: "https://images.unsplash.com/photo-1581092580460-705886616447?q=80&w=800&auto=format&fit=crop" },
                 { title: "Material Transformation", desc: "Our 5-axis CNC arrays translate digital coordinates into physical geometry with a tolerance of less than 0.002mm.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
                 { title: "Physical Integrity", desc: "The final part is a perfect realization of the original blueprint, verified by our laser interferometry QC system.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" }
               ].map((step, idx) => (
                 <div key={idx} className="flex flex-col group">
                    <div className="relative aspect-square overflow-hidden mb-8 border border-slate-100">
                       <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                       <div className="absolute top-4 left-4 bg-[#0B96AC] text-white text-[8px] font-black uppercase tracking-widest px-2 py-1">
                          {idx === 0 ? "01 | CAD DESIGN" : idx === 1 ? "02 | MACHINING" : "03 | FINAL CHECK"}
                       </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{step.title}</h3>
                    <p className="text-slate-400 text-[13px] leading-relaxed max-w-xs font-medium">
                       {step.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Archive Stats --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
         <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { label: "REPOSITORY STATUS", value: "8K / RAW ARCHIVE" },
                 { label: "NETWORK LOCATIONS", value: "6 GLOBAL NODES" },
                 { label: "ASSET COUNT", value: "1,240+ ENTRIES" },
                 { label: "LAST UPDATE", value: "24.05.2024" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col border-l border-slate-200 pl-8">
                    <span className="text-[9px] font-black text-[#0B96AC] uppercase tracking-[0.4em] mb-3">{stat.label}</span>
                    <span className="text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">{stat.value}</span>
                 </div>
               ))}
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

export default Gallery;
