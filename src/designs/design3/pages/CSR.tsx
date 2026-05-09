import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Mail, MapPin, Phone, ShieldCheck, Zap, Award, Target, Leaf, Droplets, BookOpen, Users, Clock } from 'lucide-react';

const CSR = () => {
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
            <a href="/csr" className="text-[#0B96AC] transition-colors">CSR</a>
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
               <div className="lg:col-span-7">
                  <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em] mb-8">Corporate Social Responsibility</h4>
                  <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1] uppercase">
                     Engineering for <br />
                     Social Impact
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl font-medium">
                     At LBAP, we believe precision engineering extends beyond the assembly line. Our commitment to community empowerment and environmental stewardship is baked into our operational DNA.
                  </p>
                  <div className="flex gap-6">
                     <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">Download CSR Report</button>
                     <button className="border border-slate-200 text-slate-400 px-10 py-4 text-[11px] font-black uppercase tracking-widest rounded-sm hover:border-[#0B96AC] hover:text-[#0B96AC] transition-all">Our Vision</button>
                  </div>
               </div>
               <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                        alt="CSR Engineer" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2000ms]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Environmental Stewardship --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
         <div className="container-custom">
            <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900 mb-20">Environmental Stewardship</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: "Carbon Neutrality Roadmap", val: "42%", label: "NET REDUCTION VS 2020", desc: "Reducing our operational footprint through advanced thermokinetic recycling and renewable energy integration across all manufacturing centers.", icon: Leaf, isProgress: true },
                 { title: "Water Recycling", val: "89%", label: "RECYCLED VOLUME RECOVERY", desc: "Closed-loop filtration systems in our cooling towers ensure maximum water recovery and zero industrial wastewater discharge.", icon: Droplets },
                 { title: "Energy Efficiency", val: "12.5MW", label: "RENEWABLE GENERATION", desc: "Smart grid optimization for machinery uptime and on-site photovoltaic matrix expansion powering our primary assembly lines.", icon: Zap }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-12 border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center gap-3 mb-10">
                       <item.icon className="w-5 h-5 text-[#0B96AC]" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-12 h-20">
                       {item.desc}
                    </p>
                    <div className="mt-auto">
                       <div className="flex justify-between items-end mb-4">
                          <span className="text-4xl font-black text-slate-900 tracking-tighter">{item.val}</span>
                          <span className="text-[8px] font-black text-[#0B96AC] uppercase tracking-widest">{item.label}</span>
                       </div>
                       {item.isProgress && (
                          <div className="w-full h-1 bg-slate-100 overflow-hidden">
                             <motion.div initial={{ width: 0 }} whileInView={{ width: '42%' }} transition={{ duration: 2 }} className="h-full bg-[#0B96AC]"></motion.div>
                          </div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Empowering Communities --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-6 relative aspect-video lg:aspect-square overflow-hidden group border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                    alt="Community Meeting" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
               </div>
               <div className="lg:col-span-6">
                  <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight">Empowering Local <br /> Communities</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-16 font-medium">
                     Our CSR initiatives are localized to create measurable, sustainable impact. We focus on technical education as a catalyst for economic mobility.
                  </p>
                  <div className="space-y-12">
                     <div className="flex gap-8 group">
                        <div className="w-16 h-16 bg-[#E1F3F5] shrink-0 flex items-center justify-center group-hover:bg-[#0B96AC] transition-colors">
                           <BookOpen className="w-6 h-6 text-[#0B96AC] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Technical Education Grants</h4>
                           <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                              Annual scholarships for marginalized students pursuing graduation engineering and advanced robotics vocations.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-8 group">
                        <div className="w-16 h-16 bg-[#E1F3F5] shrink-0 flex items-center justify-center group-hover:bg-[#0B96AC] transition-colors">
                           <Users className="w-6 h-6 text-[#0B96AC] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Workforce Integration</h4>
                           <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                              A dedicated bridge program connecting local vocational graduates directly to LBAP's technical ecosystem.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Impact Timeline --- */}
      <section className="py-32 bg-[#F9FAFB] border-y border-slate-100">
         <div className="container-custom text-center mb-24">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Impact Timeline</h2>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">Tracing our footprint of positive change since 2010.</p>
         </div>
         <div className="container-custom max-w-5xl relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#0B96AC]/20 hidden md:block"></div>
            
            <div className="space-y-24">
               {[
                 { year: "2024", title: "CIRCULAR PARTS INITIATIVE", desc: "Launch of the 'Ghost Parts' initiative, achieving 95% recyclability for secondary chassis components.", align: "left" },
                 { year: "2022", title: "PRECISION TECH GRANTS", desc: "Awarded $0.2M in grants to technical institutes for advanced CNC training modules.", align: "right" },
                 { year: "2020", title: "GREEN MANUFACTURING 1.0", desc: "Initial deployment of solar-powered assembly cells in our primary facility, reducing grid dependency by 30%.", align: "left" }
               ].map((item, idx) => (
                 <div key={idx} className={`relative flex items-center ${item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12`}>
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                       <span className="text-[#0B96AC] text-[11px] font-black uppercase tracking-[0.4em] mb-4">{item.year}</span>
                       <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#0B96AC] hidden md:block"></div>
                    <div className="md:w-1/2"></div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Partnership CTA --- */}
      <section className="py-32 bg-white">
         <div className="container-custom">
            <div className="bg-[#0B96AC] p-24 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
               <div className="relative z-10 max-w-2xl">
                  <h2 className="text-4xl font-black text-white mb-8 tracking-tighter leading-tight">Building the future of <br /> ethical engineering.</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-12 font-medium">
                     Join our network of partners and educational institutions to drive local impact.
                  </p>
                  <button className="bg-white text-[#0B96AC] px-12 py-5 text-[11px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Inquire About Partnership</button>
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

export default CSR;
