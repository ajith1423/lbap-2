import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Zap, BookOpen, Users, CheckCircle2, MapPin } from 'lucide-react';

const CSR = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC]">
      
      {/* --- Hero Section --- */}
      <section className="py-16 bg-white overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 mb-8">
                     <div className="w-4 h-px bg-[#0B96AC]"></div>
                     <h4 className="text-[#0B96AC] text-[10px] font-black uppercase tracking-[0.4em]">Corporate Social Responsibility</h4>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1]">
                     Engineering for <br />
                     Social Impact
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl font-medium">
                     At LBAP, we believe precision engineering extends beyond the assembly line. Our commitment to community empowerment and environmental stewardship is baked into our operational DNA.
                  </p>
                  <div className="flex flex-wrap gap-6">
                     <button className="bg-[#0B96AC] text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none shadow-xl shadow-[#0B96AC]/20 hover:scale-105 transition-all">Download 2024 Report</button>
                     <button className="border border-slate-200 text-slate-400 px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none hover:border-[#0B96AC] hover:text-[#0B96AC] transition-all">Our Vision</button>
                  </div>
               </div>
               <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                        alt="CSR Engineering" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2000ms]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-50">
         <div className="container-custom">
            <div className="mb-16">
               <div className="relative inline-block">
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-[#4A5568] mb-0">Environmental Stewardship</h2>
                  <div className="absolute -bottom-2 left-0 w-1/4 h-1.5 bg-[#0B96AC]"></div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: "Carbon Neutrality Roadmap", val: "42%", label: "CO2 REDUCTION VS 2020", desc: "Reducing our operational footprint through advanced thermokinetic recycling and renewable energy integration across all manufacturing centers.", icon: Leaf, isProgress: true },
                 { title: "Water Recycling", val: "89%", label: "RECYCLED WATER VOLUME", desc: "Closed-loop filtration systems in our cooling towers ensure maximum water recovery.", icon: Droplets },
                 { title: "Energy Efficiency", val: "12.5MW", label: "RENEWABLE GENERATION", desc: "Smart grid optimization for machinery uptime and on-site photovoltaic matrix expansion.", icon: Zap }
               ].map((item, idx) => (
                 <div key={idx} className="bg-[#F8FAFC] p-10 border border-slate-100 flex flex-col group transition-all duration-500">
                    <div className="flex items-center gap-3 mb-8">
                       <item.icon className="w-6 h-6 text-[#0B96AC]" />
                    </div>
                    <h3 className="text-[20px] font-black text-[#2D3748] tracking-tight mb-4">{item.title}</h3>
                    <p className="text-slate-400 text-[14px] leading-relaxed mb-10 font-medium">
                       {item.desc}
                    </p>
                    <div className="mt-auto">
                       <div className="flex justify-between items-end mb-4">
                          <span className="text-4xl font-black text-[#0B96AC] tracking-tighter">{item.val}</span>
                          <span className="text-[9px] font-black text-[#8E99AF] uppercase tracking-widest">{item.label}</span>
                       </div>
                       {item.isProgress ? (
                          <div className="w-full h-1.5 bg-slate-200 rounded-none overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }} 
                               whileInView={{ width: '42%' }} 
                               transition={{ duration: 1.5, ease: "easeOut" }} 
                               className="h-full bg-[#0B96AC]"
                             ></motion.div>
                          </div>
                       ) : (
                          <div className="w-full h-px bg-slate-100"></div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-20 bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="col-span-2 aspect-[16/9] overflow-hidden grayscale brightness-90 contrast-110">
                        <img 
                           src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                           alt="Community Meeting" 
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="aspect-[16/10] overflow-hidden grayscale brightness-75 contrast-110">
                        <img 
                           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
                           alt="Collaboration" 
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="aspect-[16/10] overflow-hidden grayscale brightness-75 contrast-110">
                        <img 
                           src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" 
                           alt="Discussion" 
                           className="w-full h-full object-cover"
                        />
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-6">
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 tracking-tighter">Empowering Local Communities</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                     Our CSR initiatives are localized to create measurable, sustainable impact. We focus on technical education as a catalyst for economic mobility.
                  </p>
                  <div className="space-y-12">
                     <div className="relative pl-12 py-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0B96AC]"></div>
                        <div className="flex flex-col">
                           <div className="flex items-center gap-3 mb-3">
                              <BookOpen className="w-5 h-5 text-[#0B96AC]" />
                              <h4 className="text-xl font-black text-slate-900 tracking-tight">Technical Education Grants</h4>
                           </div>
                           <p className="text-slate-400 text-[15px] leading-relaxed max-w-lg font-medium">
                              Annual scholarships for marginalized students pursuing precision engineering and advanced robotics.
                           </p>
                        </div>
                     </div>
                     <div className="relative pl-12 py-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0B96AC]"></div>
                        <div className="flex flex-col">
                           <div className="flex items-center gap-3 mb-3">
                              <Users className="w-5 h-5 text-[#0B96AC]" />
                              <h4 className="text-xl font-black text-slate-900 tracking-tight">Workforce Integration</h4>
                           </div>
                           <p className="text-slate-400 text-[15px] leading-relaxed max-w-lg font-medium">
                              A dedicated bridge program connecting local vocational graduates directly to LBAP's technical ecosystem.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-50">
         <div className="container-custom text-center mb-16">
            <h2 className="text-4xl font-black text-[#2D3748] mb-3 tracking-tighter">Impact Timeline</h2>
            <p className="text-slate-400 text-sm font-medium">Tracing our footprint of positive change since 2018.</p>
         </div>
         <div className="container-custom max-w-5xl relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block"></div>
            
            <div className="space-y-12">
               {[
                 { year: "2024", title: "CIRCULAR PARTS INITIATIVE", desc: "Successfully piloted a closed-loop recycling program for aluminum alloys used in automotive housings.", align: "left", subDesc: "Launch of the 'Circular Parts' initiative, achieving 95% recyclability for secondary chassis components." },
                 { year: "2022", title: "PRECISION TECH GRANTS", desc: "Awarded $1.2M in grants to technical institutes for advanced CNC training modules.", align: "right", subDesc: "Expansion of the technical grant program across 4 regional territories." },
                 { year: "2020", title: "GREEN MANUFACTURING 1.0", desc: "Initial deployment of solar-powered assembly cells in our primary facility, reducing dependency by 30%.", align: "left", subDesc: "Became the first regional manufacturer to achieve 30% solar-dependent operations." }
               ].map((item, idx) => (
                 <div key={idx} className={`relative flex items-center ${item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-0`}>
                    {/* Center Icon */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0B96AC] rounded-sm flex items-center justify-center z-10 hidden md:flex">
                       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    {/* Year Label Side */}
                    <div className={`md:w-1/2 flex flex-col items-center ${item.align === 'left' ? 'md:items-end md:pr-16' : 'md:items-start md:pl-16'} text-center md:text-right w-full mb-8 md:mb-0`}>
                       <span className="text-[#0B96AC] text-3xl font-black tracking-tighter">{item.year}</span>
                       <p className="text-slate-400 text-[13px] leading-relaxed max-w-[280px] mt-2 font-medium">
                          {idx === 0 ? item.subDesc : idx === 1 ? item.desc : item.subDesc.split(',')[0]}
                       </p>
                    </div>

                    {/* Content Box Side */}
                    <div className="md:w-1/2 w-full">
                       <div className={`bg-[#F8FAFC] p-10 border border-slate-100 ${item.align === 'left' ? 'md:ml-16' : 'md:mr-16'}`}>
                          <h3 className="text-xl font-black text-[#2D3748] uppercase tracking-tight mb-4">{item.title}</h3>
                          <p className="text-slate-400 text-[14px] leading-relaxed font-medium">
                             {idx === 0 ? item.desc : idx === 1 ? item.subDesc : item.subDesc}
                          </p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Partnership CTA --- */}
      <section className="py-20 bg-white">
         <div className="container-custom">
            <div className="bg-[#0B96AC] p-16 lg:p-24 relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
               <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tighter">Building the future of ethical engineering.</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                     Join our network of partners and educational institutions to drive local impact.
                  </p>
                  <button className="bg-white text-[#0B96AC] px-10 py-4 text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Inquire About Partnerships</button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default CSR;
