import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, Cpu, Users, Search, Filter, CheckCircle2, ChevronRight } from 'lucide-react';

const Career = () => {
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
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="text-[#0B96AC] transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-50">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-6">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-8">CAREER FRAMEWORK MODEL 5</h4>
                  <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1] uppercase">
                     The Future of <br />
                     <span className="text-[#0B96AC]">Mobility</span> Begins Here.
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl font-medium">
                     Engineered for precision. Driven by innovation. LBAP is recruiting the next generation of automotive engineers to redefine high-performance manufacturing.
                  </p>
                  <div className="flex gap-6">
                     <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">View Open Roles</button>
                     <button className="border border-slate-200 text-slate-400 px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm hover:border-[#0B96AC] hover:text-[#0B96AC] transition-all">Engineering Philosophy</button>
                  </div>
               </div>
               <div className="lg:col-span-6 relative aspect-[16/9] bg-slate-50 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=1200&auto=format&fit=crop" 
                    alt="Robotics Lab" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 border-8 border-white/5 pointer-events-none"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Engineering Roadmap --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="mb-20">
               <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900 mb-6">Engineering Roadmap</h2>
               <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em] max-w-2xl">
                  Our structured trajectory for new hires ensures technical mastery within 24 months. Precision training for precision manufacturing.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div className="bg-slate-50 border border-slate-100 p-12 group hover:border-[#0B96AC]/20 transition-all">
                  <span className="text-[#0B96AC] text-[10px] font-black uppercase tracking-widest mb-6 block">01 — INITIAL INTEGRATION</span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">System Fundamentals</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-10">
                     Deep dive into LBAP proprietary manufacturing protocols, CNC precision standards, and automated assembly line architecture.
                  </p>
                  <div className="flex gap-4 opacity-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  </div>
               </div>
               <div className="bg-[#0B96AC] p-12 text-white group shadow-2xl shadow-[#0B96AC]/20">
                  <span className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-6 block">02 — MENTORSHIP</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Technical Shadowing</h3>
                  <p className="text-white/70 text-[13px] leading-relaxed mb-10">
                     Partner with a Senior Lead Engineer to optimize gut-check solving on the chassis production line.
                  </p>
                  <Users className="w-6 h-6 text-white/30" />
               </div>
               <div className="bg-slate-50 border border-slate-100 p-12 group hover:border-[#0B96AC]/20 transition-all">
                  <span className="text-[#0B96AC] text-[10px] font-black uppercase tracking-widest mb-6 block">03 — LAB</span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">R&D Sprint</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-10">
                     Propose and prototype a single-component optimization for existing drive-train assemblies.
                  </p>
                  <div className="flex gap-4 opacity-10">
                     <Target className="w-6 h-6 text-slate-400" />
                  </div>
               </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-12 flex flex-col md:flex-row justify-between items-center group">
               <div>
                  <span className="text-[#0B96AC] text-[10px] font-black uppercase tracking-widest mb-4 block">04 — SPECIALIZATION</span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Lead Systems Architect</h3>
               </div>
               <div className="flex items-center gap-20 mt-8 md:mt-0">
                  <div className="text-center">
                     <span className="text-4xl font-black text-slate-900 tracking-tighter block">24</span>
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">MONTHS TO REACH</span>
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[11px] font-bold text-slate-400 max-w-[240px] leading-relaxed">Graduation into full product ownership within the Advanced Mobility Division.</p>
                     <CheckCircle2 className="w-6 h-6 text-[#0B96AC]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Mentorship Section --- */}
      <section className="py-32 bg-[#F9FAFB] border-y border-slate-100">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-6 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                    alt="Mentorship Meeting" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
               </div>
               <div className="lg:col-span-6">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-10">KNOWLEDGE TRANSFER</h4>
                  <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-tight">Clinical Precision Mentorship</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-14 font-medium">
                     Our mentorship program is not an informal pairing. It is a documented technical curriculum where Senior Engineers transfer decades of automotive intellectual property.
                  </p>
                  <ul className="space-y-8">
                     {[
                        "Bi-weekly technical code reviews and schematic audits.",
                        "Direct access to the LBAP Global Patents database.",
                        "Quarterly rotations through Design, Production, and Logistics."
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-6 group">
                           <CheckCircle2 className="w-5 h-5 text-[#0B96AC] group-hover:scale-125 transition-transform" />
                           <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- Open Positions --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div>
                  <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900 mb-4">Open Positions</h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Filter by expertise and technical proficiency.</p>
               </div>
               <div className="flex gap-4 w-full lg:w-auto">
                  <div className="relative flex-grow lg:w-80">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                     <input type="text" placeholder="Search roles (e.g. CNC, Python)" className="w-full bg-slate-50 border border-slate-100 py-4 pl-12 pr-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all" />
                  </div>
                  <button className="px-8 py-4 bg-slate-50 border border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-4 hover:bg-slate-100 transition-all">
                     <Filter className="w-4 h-4" /> FILTERS
                  </button>
               </div>
            </div>
            
            <div className="overflow-x-auto border border-slate-100">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-[#0B96AC] text-white">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">ROLE ID</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">POSITION</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">DEPARTMENT</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">LOCATION</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">LEVEL</th>
                     </tr>
                  </thead>
                  <tbody className="text-[13px] font-bold text-slate-500 uppercase tracking-widest">
                     {[
                        { id: "LB-902", pos: "Automation Systems Engineer", dept: "Robotics", loc: "Stuttgart, DE", level: "L3 SENIOR" },
                        { id: "LB-415", pos: "Chassis Structural Analyst", dept: "Engineering", loc: "Detroit, US", level: "L2 MID" },
                        { id: "LB-203", pos: "Battery Cell Chemist", dept: "Mobility R&D", loc: "Seoul, KR", level: "L4 LEAD" },
                        { id: "LB-118", pos: "Junior Materials Engineer", dept: "Quality Control", loc: "Stuttgart, DE", level: "L1 JUNIOR" }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
                           <td className="p-6 text-slate-300 font-black">{item.id}</td>
                           <td className="p-6 text-slate-900 font-black">{item.pos}</td>
                           <td className="p-6">{item.dept}</td>
                           <td className="p-6">{item.loc}</td>
                           <td className="p-6 flex items-center justify-between">
                              <span>{item.level}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#0B96AC]" />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="flex justify-center mt-16">
               <button className="px-12 py-5 border border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0B96AC] hover:border-[#0B96AC]/20 transition-all">LOAD MORE OPPORTUNITIES</button>
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

export default Career;
