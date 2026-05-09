import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, FileText, Upload, CheckSquare, MessageSquare, ChevronRight, Activity } from 'lucide-react';

const Contact = () => {
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
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="text-[#0B96AC] transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-24 pb-16 bg-white overflow-hidden">
         <div className="container-custom">
            <div className="border-l-4 border-[#0B96AC] pl-10 mb-16">
               <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase">Technical Partnership Portal</h1>
               <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
                  Precision-engineered procurement channels for global OEM partners. Submit technical specifications, RFQs, and secure documentation for high-volume manufacturing projects.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               
               {/* Left: Advanced RFQ Intake System */}
               <div className="lg:col-span-8 bg-white border border-slate-100 p-12 group hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-12">
                     <FileText className="w-5 h-5 text-[#0B96AC]" />
                     <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Advanced RFQ Intake System</h2>
                  </div>

                  <form className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                           <input type="text" placeholder="Engineering Lead Name" className="w-full bg-slate-50 border border-slate-100 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Corporate Email</label>
                           <input type="email" placeholder="name@oem-partner.com" className="w-full bg-slate-50 border border-slate-100 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">OEM Organization</label>
                           <input type="text" placeholder="Company Legal Entity" className="w-full bg-slate-50 border border-slate-100 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Reference</label>
                           <input type="text" placeholder="Internal Project Code" className="w-full bg-slate-50 border border-slate-100 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all" />
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Documentation & CAD Files</label>
                        <div className="border-2 border-dashed border-slate-100 bg-slate-50 p-12 flex flex-col items-center justify-center group hover:border-[#0B96AC]/20 transition-all cursor-pointer">
                           <Upload className="w-8 h-8 text-[#0B96AC]/30 mb-4 group-hover:scale-110 transition-transform" />
                           <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Drag and drop technical specification files here</p>
                           <p className="text-[8px] font-bold text-slate-300 mt-2 tracking-widest uppercase">Accepted: .DWG, .STEP, .PDF (Max File Size: 100MB per file)</p>
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Requirements Summary</label>
                        <textarea 
                           rows={5} 
                           placeholder="Briefly describe manufacturing tolerances, material requirements, and expected production volume..."
                           className="w-full bg-slate-50 border border-slate-100 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#0B96AC]/20 transition-all resize-none"
                        ></textarea>
                     </div>

                     <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-6">
                        <label className="flex items-center gap-4 cursor-pointer group">
                           <input type="checkbox" className="w-5 h-5 border-2 border-slate-200 rounded-none checked:bg-[#0B96AC] transition-all" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Include Pre-Signed NDA in Documentation</span>
                        </label>
                        <button className="bg-[#0B96AC] text-white px-12 py-5 text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">Submit RFQ Package</button>
                     </div>
                  </form>
               </div>

               {/* Right: Regional Leads & Stats */}
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="border border-slate-100 p-10 flex flex-col group">
                     <h4 className="text-[10px] font-black text-[#0B96AC] uppercase tracking-[0.4em] mb-10">REGIONAL ENGINEERING SALES LEADS</h4>
                     <div className="space-y-10">
                        {[
                           { name: "Marcus Thorne", role: "EMEA LEAD - POWER TRAIN SYSTEMS", email: "m.thorne@lbap.tech" },
                           { name: "Dr. Elena Rodriguez", role: "AMERICAS LEAD - CHASSIS ENGINEERING", email: "e.rodriguez@lbap.tech" },
                           { name: "Chen Wei", role: "APAC LEAD - COMPONENT LOGISTICS", email: "c.wei@lbap.tech" }
                        ].map((lead, i) => (
                           <div key={i} className="flex gap-5 items-start group/lead">
                              <div className="w-12 h-12 bg-slate-100 overflow-hidden shrink-0 grayscale group-hover/lead:grayscale-0 transition-all">
                                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={lead.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                 <h5 className="text-[14px] font-black text-slate-900 uppercase tracking-tight mb-1">{lead.name}</h5>
                                 <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2">{lead.role}</p>
                                 <p className="text-[11px] font-bold text-[#0B96AC]">{lead.email}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Global Hubs Telemetry */}
                  <div className="bg-slate-900 p-10 flex flex-col text-white group">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-10">GLOBAL MANUFACTURING HUBS</h4>
                     <div className="space-y-6 mb-12">
                        {[
                           { hub: "HUB_ALPHA: STUTTGART", coord: "48.7758° N" },
                           { hub: "HUB_BETA: DETROIT", coord: "42.3314° N" },
                           { hub: "HUB_GAMMA: TOKYO", coord: "35.6762° N" }
                        ].map((hub, i) => (
                           <div key={i} className="flex justify-between items-center text-[11px] font-black tracking-widest uppercase">
                              <span className="text-white/60">{hub.hub}</span>
                              <span className="text-[#0B96AC]">{hub.coord}</span>
                           </div>
                        ))}
                     </div>
                     <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">NETWORK STATUS: OPERATIONAL</span>
                     </div>
                  </div>

                  {/* Global Map Widget */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop" 
                        alt="Global Map" 
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-all duration-[3000ms]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                     <button className="absolute bottom-6 right-6 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-all">
                        OPERATIONAL NODES
                     </button>
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

export default Contact;
