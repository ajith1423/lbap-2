import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Globe, Award, ChevronLeft, ChevronRight, Microscope } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Hero Section --- */}
      <section className="pt-20 pb-16 bg-white border-b border-slate-50">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-8">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-6">ESTABLISHED 1994</h4>
                  <h1 className="text-5xl lg:text-[64px] font-black text-slate-900 tracking-tighter mb-10 uppercase leading-none">
                     30 Years of <br />
                     Precision Engineering.
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
                     LBAP Automotive Manufacturing defines the global standard for high-performance chassis components. For three decades, we have operated with clinical precision, delivering excellence through rigorous engineering and total quality control.
                  </p>
               </div>
               <div className="lg:col-span-4 flex justify-end">
                  <div className="border-l-[6px] border-[#0B96AC] pl-10 py-2">
                     <span className="text-[100px] font-black text-slate-900 tracking-tighter leading-none block">30</span>
                     <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Years of Excellence</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Operational Timeline --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-center mb-16">
               <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Operational Timeline</h2>
               <div className="flex gap-3">
                  <button className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400">
                     <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400">
                     <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { year: "1994", title: "FOUNDATION", desc: "LBAP is established in a 3,000 sq.ft facility, focusing on specialized welding solutions for luxury European manufacturers.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
                 { year: "2005", title: "GLOBAL PIVOT", desc: "Acquisition of first robotic assembly line from Japan, marking our entry into high-volume global automotive supply chains.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
                 { year: "2018", title: "ELECTRIC ERA", desc: "Inauguration of the dedicated EV Platform division, achieving IATF 16949 certification for next-generation mobility components.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white border border-slate-100 p-10 flex flex-col group hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-col mb-8">
                       <span className="text-[#0B96AC] text-[13px] font-black uppercase tracking-widest mb-1">{item.year}</span>
                       <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-[14px] leading-relaxed mb-10 h-20">
                       {item.desc}
                    </p>
                    <div className="relative aspect-video overflow-hidden">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Leadership Philosophy --- */}
      <section className="py-24 bg-white border-t border-slate-50">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-5">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-6">CORE VALUES</h4>
                  <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase">
                     Leadership <br /> Philosophy
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium italic">
                     "Engineering is not just about the final product; it's about the relentless pursuit of perfection in the process. We don't just manufacture parts; we engineer reliability for the road ahead."
                  </p>
                  <div className="mb-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">FOUNDER & CEO</p>
                     <p className="text-xl font-black text-slate-900 tracking-tight uppercase">Dr. Marcus Vance</p>
                  </div>
                  <button className="flex items-center gap-4 group">
                     <div className="w-10 h-10 bg-[#0B96AC] text-white flex items-center justify-center rounded-sm shadow-lg shadow-[#0B96AC]/20 group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current" />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">WATCH VIDEO INTERVIEW</span>
                  </button>
               </div>
               <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Marcus Vance" 
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-white fill-current" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Global Standards & Compliance --- */}
      <section className="py-24 bg-[#F8FAFC]">
         <div className="container-custom text-center">
            <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-6">QUALITY FIRST</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-20">Global Standards & Compliance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               {[
                 { title: "IATF 16949:2016", desc: "International standard for automotive quality management systems. Our core operating protocol across all plants.", icon: ShieldCheck },
                 { title: "ISO 14001", desc: "Environmental management system certification, reflecting our commitment to sustainable manufacturing and reduced carbon footprint.", icon: Globe },
                 { title: "ISO 9001:2015", desc: "Foundation of our quality management principles, ensuring consistent product excellence and continuous improvement.", icon: Award }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-12 border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 flex items-center justify-center mb-10 group-hover:bg-[#0B96AC] transition-colors">
                       <item.icon className="w-8 h-8 text-[#0B96AC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">{item.title}</h3>
                    <p className="text-slate-400 text-[14px] leading-relaxed max-w-xs">
                       {item.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Manufacturing Capacity --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row border border-slate-100 overflow-hidden shadow-sm">
               <div className="lg:w-[40%] bg-[#0B96AC] p-16 flex flex-col justify-center text-white">
                  <h4 className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-10">MANUFACTURING CAPACITY</h4>
                  <span className="text-[72px] font-black tracking-tighter mb-6 leading-none">12,000,000+</span>
                  <p className="text-white/80 text-lg leading-relaxed font-medium">
                     Units delivered annually across 4 continents.
                  </p>
               </div>
               <div className="lg:w-[60%] bg-white p-16 relative">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-16">GLOBAL FOOTPRINT</h4>
                  <div className="grid grid-cols-2 gap-12">
                     {[
                        { label: "PLANTS", value: "12" },
                        { label: "LOGISTICS HUBS", value: "28" },
                        { label: "EMPLOYEES", value: "4,500" },
                        { label: "DEFECT RATE", value: "0.001%" }
                     ].map((stat, i) => (
                        <div key={i}>
                           <span className="text-4xl font-black text-slate-900 tracking-tighter block mb-2">{stat.value}</span>
                           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{stat.label}</span>
                        </div>
                     ))}
                  </div>
                  <div className="absolute top-10 right-10 opacity-5">
                     <Globe className="w-20 h-20 text-slate-900" />
                  </div>
               </div>
            </div>
            
            {/* Recruitment Bar */}
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Currently Recruiting: Precision Engineers for our Stuttgart Innovation Center</p>
               <button className="text-[11px] font-black uppercase tracking-widest text-[#0B96AC] flex items-center gap-4 group">
                  VIEW CAREERS <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
