import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, Cpu, Users, Search, Filter, CheckCircle2, ChevronRight, BadgeCheck } from 'lucide-react';
import roboticsLab from '../../../assets/images/robotics-lab.png';

const Career = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">

      {/* --- Hero Section --- */}
      <section className="py-16 bg-white overflow-hidden border-b border-slate-50">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-6">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-8">CAREER FRAMEWORK MODEL 5</h4>
                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1]">
                     The Future of <br />
                     <span className="text-[#0B96AC]">Mobility</span> Begins Here.
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl font-medium">
                     Engineered for precision. Driven by innovation. LBAP is recruiting the next generation of automotive engineers to redefine high-performance manufacturing.
                  </p>
                  <div className="flex gap-6">
                     <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">View Open Roles</button>
                     <button className="border border-slate-200 text-slate-400 px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm hover:border-[#0B96AC] hover:text-[#0B96AC] transition-all">Engineering Philosophy</button>
                  </div>
               </div>
               <div className="lg:col-span-6 relative aspect-[16/9] bg-slate-50 overflow-hidden group">
                  <img 
                    src={roboticsLab} 
                    alt="Robotics Lab" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 border-8 border-white/5 pointer-events-none"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Engineering Roadmap --- */}
      <section className="py-16 bg-white">
         <div className="container-custom">
            <div className="mb-12">
               <h2 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase text-slate-900 mb-6">Engineering Roadmap</h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-medium">
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
             <div className="bg-slate-50 border border-slate-100 p-10 flex flex-col lg:flex-row justify-between items-center group gap-8">
                <div className="lg:w-1/3">
                   <span className="text-[#0B96AC] text-[10px] font-black uppercase tracking-widest mb-4 block">04 — SPECIALIZATION</span>
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Lead Systems Architect</h3>
                </div>
                
                <div className="flex-grow flex flex-col md:flex-row items-center justify-end gap-0 md:gap-10 w-full lg:w-2/3">
                   <div className="text-center min-w-[120px]">
                      <span className="text-4xl font-black text-slate-900 tracking-tighter block">24</span>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mt-1">MONTHS TO REACH</span>
                   </div>
                   
                   <div className="hidden md:block w-px h-10 bg-slate-200"></div>
                   
                   <div className="max-w-[300px] text-center md:text-left mt-4 md:mt-0">
                      <p className="text-[13px] font-medium text-slate-400 leading-relaxed">Graduation into full product ownership within the Advanced Mobility Division.</p>
                   </div>
                   
                   <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-auto">
                      <BadgeCheck className="w-10 h-10 text-[#0B96AC]" />
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* --- Mentorship Section --- */}
      <section className="py-16 bg-[#F9FAFB] border-y border-slate-100">
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
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-tight">Clinical Precision Mentorship</h2>
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
      <section className="py-16 bg-white">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-4">Open Positions</h2>
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

    </div>
  );
};

export default Career;
