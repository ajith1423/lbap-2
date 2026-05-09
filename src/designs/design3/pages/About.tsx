import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/about" className="text-[#0B96AC] transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
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
      <section className="pt-32 pb-24 bg-white relative">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
               <div className="lg:col-span-8">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-10">ESTABLISHED 1994</h4>
                  <h1 className="text-6xl lg:text-[100px] font-black text-slate-900 tracking-tighter mb-14 uppercase leading-[0.85]">
                     30 Years of <br />
                     Precision Engineering
                  </h1>
                  <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
                     LBAP Automotive Manufacturing defines the global standard for high-performance chassis components. For three decades, we have operated with clinical precision, delivering excellence through rigorous engineering and total quality control.
                  </p>
               </div>
               <div className="lg:col-span-4 border-l-4 border-[#0B96AC]/40 pl-12 pb-6 relative">
                  <span className="text-[140px] font-black text-slate-900 tracking-tighter leading-none block">30</span>
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-300 mt-2">Years of Excellence</p>
               </div>
            </div>
            
            {/* Signature Pink Divider */}
            <div className="flex justify-center mt-32">
               <div className="w-48 h-1.5 bg-[#F472B6]"></div>
            </div>
         </div>
      </section>

      {/* --- Operational Timeline --- */}
      <section className="py-24 bg-white">
         <div className="container-custom">
            <div className="flex justify-between items-center mb-24">
               <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Operational Timeline</h2>
               <div className="flex gap-4">
                  <button className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-300"><ChevronLeft className="w-6 h-6" /></button>
                  <button className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-300"><ChevronRight className="w-6 h-6" /></button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { year: "1994", title: "FOUNDATION", desc: "LBAP is established in a 3,000 sq.ft facility, focusing on specialized welding solutions for luxury European manufacturers.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
                 { year: "2005", title: "GLOBAL PIVOT", desc: "Acquisition of first robotic assembly line from Japan, marking our entry into high-volume global automotive supply chains.", img: "https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=800&auto=format&fit=crop" },
                 { year: "2018", title: "ELECTRIC ERA", desc: "Inauguration of the dedicated EV Platform division, achieving IATF 16949 certification for next-generation mobility components.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white border border-slate-100 p-12 flex flex-col group hover:shadow-xl transition-all duration-500">
                    <span className="text-[#0B96AC] text-[11px] font-black uppercase tracking-[0.4em] mb-4">{item.year}</span>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">{item.title}</h3>
                    <p className="text-slate-400 text-[15px] leading-relaxed mb-12 h-24 overflow-hidden">
                       {item.desc}
                    </p>
                    <div className="relative aspect-video overflow-hidden">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                 </div>
               ))}
            </div>

            {/* Signature Pink Divider */}
            <div className="flex justify-center mt-32">
               <div className="w-48 h-1.5 bg-[#F472B6]"></div>
            </div>
         </div>
      </section>

      {/* --- Leadership Philosophy --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-6">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-10">CORE VALUES</h4>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-12 tracking-tighter leading-tight uppercase">
                     Leadership <br /> Philosophy
                  </h2>
                  <p className="text-slate-400 text-xl leading-relaxed mb-16 font-medium">
                     "Engineering is not just about the final product; it's about the relentless pursuit of perfection in the process. We don't just manufacture parts; we engineer reliability for the road ahead."
                  </p>
                  <div className="mb-14">
                     <p className="text-[11px] font-black uppercase tracking-widest text-[#0B96AC]/50 mb-3">FOUNDER & CEO</p>
                     <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Dr. Marcus Vance</p>
                  </div>
                  <button className="flex items-center gap-6 group">
                     <div className="w-14 h-14 bg-[#0B96AC] text-white flex items-center justify-center rounded-none shadow-xl shadow-[#0B96AC]/20 group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current" />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">WATCH VIDEO INTERVIEW</span>
                  </button>
               </div>
               <div className="lg:col-span-6 relative aspect-square overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Marcus Vance" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-current" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Signature Pink Divider */}
            <div className="flex justify-center mt-32">
               <div className="w-48 h-1.5 bg-[#F472B6]"></div>
            </div>
         </div>
      </section>

      {/* --- Global Standards --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="text-center mb-24">
               <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.5em] mb-8">QUALITY FIRST</h4>
               <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">Global Standards & Compliance</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {[
                 { title: "IATF 16949:2016", desc: "International standard for automotive quality management systems. Our core operating protocol across all plants.", icon: ShieldCheck },
                 { title: "ISO 14001", desc: "Environmental management system certification, reflecting our commitment to sustainable manufacturing and reduced carbon footprint.", icon: Globe },
                 { title: "ISO 9001:2015", desc: "Foundation of our quality management principles, ensuring consistent product excellence and continuous improvement.", icon: Award }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-20 border border-slate-100 flex flex-col items-center text-center group hover:border-[#0B96AC]/20 hover:shadow-2xl transition-all duration-500">
                    <div className="w-24 h-24 bg-[#E1F3F5] rounded-none flex items-center justify-center mb-12 group-hover:bg-[#0B96AC] transition-colors">
                       <item.icon className="w-10 h-10 text-[#0B96AC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">{item.title}</h3>
                    <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs">
                       {item.desc}
                    </p>
                 </div>
               ))}
            </div>

            {/* Signature Pink Divider */}
            <div className="flex justify-center mt-32">
               <div className="w-48 h-1.5 bg-[#F472B6]"></div>
            </div>
         </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row border border-slate-100 overflow-hidden shadow-2xl shadow-slate-100">
               <div className="lg:w-[40%] bg-[#0B96AC] p-24 flex flex-col justify-center text-white">
                  <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-12">MANUFACTURING CAPACITY</h4>
                  <span className="text-[80px] font-black tracking-tighter mb-8 leading-none">12,000,000+</span>
                  <p className="text-white/80 text-xl leading-relaxed font-medium">
                     Units delivered globally across 4 continents.
                  </p>
               </div>
               <div className="lg:w-[60%] bg-white p-24 relative">
                  <div className="absolute top-12 right-12 opacity-10">
                     <Globe className="w-20 h-20 text-slate-400" />
                  </div>
                  <h4 className="text-slate-300 text-[10px] font-black uppercase tracking-[0.4em] mb-20">GLOBAL FOOTPRINT</h4>
                  <div className="grid grid-cols-2 gap-20">
                     {[
                        { label: "PLANTS", value: "12" },
                        { label: "STRATEGIC HUBS", value: "28" },
                        { label: "SPECIALISTS", value: "4,500" },
                        { label: "ERROR RATE", value: "0.001%" }
                     ].map((stat, i) => (
                        <div key={i}>
                           <span className="text-5xl font-black text-slate-900 tracking-tighter block mb-4">{stat.value}</span>
                           <span className="text-[10px] font-black text-[#0B96AC] uppercase tracking-[0.5em]">{stat.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            
            {/* Recruitment Banner */}
            <div className="mt-20 p-12 bg-slate-50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
               <p className="text-sm font-black text-slate-500 uppercase tracking-[0.3em]">Currently Recruiting: Precision Engineers for our Stuttgart Innovation Center</p>
               <button className="text-[11px] font-black uppercase tracking-widest text-[#0B96AC] flex items-center gap-5 group">
                  VIEW CAREERS <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
               </button>
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
                   <div className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] hover:border-[#0B96AC] transition-all cursor-pointer group">
                      <Mail className="w-5 h-5" />
                   </div>
                   <div className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] hover:border-[#0B96AC] transition-all cursor-pointer group">
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
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10 text-right">SYNC PROFILE</h4>
                <div className="w-36 h-36 bg-slate-50 border border-slate-100 p-3 shadow-inner">
                   <div className="w-full h-full bg-white flex items-center justify-center p-2">
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

export default About;
