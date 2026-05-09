import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, Globe, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20">
      
      {/* --- Navigation --- */}
      <nav className="absolute top-0 w-full z-50 py-8">
        <div className="w-full px-8 lg:px-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase text-white">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-white transition-colors">About Us</a>
            <a href="/product" className="hover:text-white transition-colors">Product</a>
            <a href="/machineries" className="hover:text-white transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-white transition-colors">CSR</a>
            <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="/career" className="hover:text-white transition-colors">Career</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#097b8e] transition-all">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Factory Interior" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent"></div>
        </div>

        <div className="w-full px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#0B96AC] px-3 py-1 mb-6">
               <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">STRATEGIC SCALE</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter max-w-2xl">
              Engineering the Future of an Unprecedented Magnitude.
            </h1>
            <p className="text-[17px] text-slate-300 max-w-2xl leading-relaxed font-medium">
              LBAP leads the automotive manufacturing sector through a synergy of massive industrial footprint and clinical engineering precision. Our infrastructure is designed for limitless growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F8FAFC]">
        <div className="w-full px-8 lg:px-20">
          <div className="mb-12">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-4 bg-[#0B96AC]"></div>
                <h4 className="text-[14px] font-bold text-[#1A1A1A] uppercase tracking-tight">Global Infrastructure</h4>
             </div>
             <p className="text-[15px] text-slate-400 font-medium">A technical breakdown of our manufacturing ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: Total Footprint */}
            <div className="lg:col-span-8 bg-white border border-[#E5E9F0] p-12 shadow-sm rounded-sm">
               <h4 className="text-[#0B96AC] font-bold text-[11px] uppercase tracking-[0.2em] mb-10">TOTAL FOOTPRINT</h4>
               <div className="flex items-baseline gap-3 mb-16">
                  <span className="text-7xl lg:text-8xl font-black text-[#1A1A1A] tracking-tighter">2.4M</span>
                  <span className="text-[14px] font-bold text-[#8E99AF] pb-4">SQ. FT.</span>
               </div>
               
               <div className="grid grid-cols-3 border-t border-slate-50 pt-10 gap-8">
                  <div>
                     <p className="text-[#0B96AC] font-bold text-[15px] mb-2 tracking-tight">28</p>
                     <p className="text-[12px] font-bold text-[#8E99AF] uppercase tracking-wider leading-tight">Primary Assembly</p>
                  </div>
                  <div className="px-4 border-x border-slate-50">
                     <p className="text-[#0B96AC] font-bold text-[15px] mb-2 tracking-tight">04</p>
                     <p className="text-[12px] font-bold text-[#8E99AF] uppercase tracking-wider leading-tight">Press Component Hub</p>
                  </div>
                  <div>
                     <p className="text-[#0B96AC] font-bold text-[15px] mb-2 tracking-tight">05</p>
                     <p className="text-[12px] font-bold text-[#8E99AF] uppercase tracking-wider leading-tight">R&D Laboratory</p>
                  </div>
               </div>
            </div>

            {/* Right Side Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               <div className="bg-[#0B96AC] p-10 text-white rounded-sm shadow-lg shadow-[#0B96AC]/10 flex flex-col justify-center">
                  <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-70">ACTIVE LOCATIONS</h4>
                  <span className="text-6xl font-black mb-4">12</span>
                  <p className="text-[14px] opacity-80 leading-relaxed font-medium">Strategic manufacturing plants across three continents.</p>
               </div>
               <div className="bg-white border border-[#E5E9F0] p-10 rounded-sm shadow-sm flex flex-col justify-center">
                  <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-[#8E99AF]">WORKFORCE SCALE</h4>
                  <span className="text-5xl font-black text-[#1A1A1A] mb-4">4,500+</span>
                  <p className="text-[14px] text-[#595959] leading-relaxed font-medium">Engineers and specialists dedicated to precision.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Timeline Section --- */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E9F0]">
        <div className="w-full px-8 lg:px-20">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h4 className="text-[#1A1A1A] font-bold text-[15px] mb-2">30 Years of Excellence</h4>
              <p className="text-[14px] text-slate-400 font-medium">Tracing our evolution from a single unit to a global powerhouse.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-[#E5E9F0] flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
                <ArrowRight className="rotate-180 w-4 h-4 text-[#8E99AF]" />
              </button>
              <button className="w-10 h-10 border border-[#E5E9F0] flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#8E99AF]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { year: "1994", title: "Founding Vision", desc: "LBAP was established with a singular focus on linear metal precision components for domestic Tier-1 suppliers." },
               { year: "2005", title: "Facility Expansion", desc: "Commissioned our second facility, expanding total floor space by 400% to meet surging automotive demand." },
               { year: "2014", title: "Global Integration", desc: "Secured first international export contract with a European EV manufacturer, launching our global footprint." },
               { year: "2024", title: "Autonomous Era", desc: "Implementation of AI-driven quality control and 100% automated robotics across all primary lines." }
             ].map((item, idx) => (
               <div key={idx} className="p-8 bg-white border border-[#E5E9F0] shadow-sm hover:border-[#0B96AC]/30 transition-all group">
                  <span className="text-[28px] font-black text-[#0B96AC] block mb-6">{item.year}</span>
                  <h4 className="text-[16px] font-bold text-[#1A1A1A] mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-[#595959] leading-relaxed font-medium">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- Strategic Reach Section --- */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <h4 className="text-[#0B96AC] font-bold text-[12px] uppercase tracking-[0.4em] mb-4">STRATEGIC REACH</h4>
             <h2 className="text-[32px] font-bold text-[#1A1A1A] mb-6 tracking-tight">Localized Presence, Universal Standards.</h2>
             <p className="text-[#595959] text-[16px] leading-relaxed mb-10 font-medium">
               Our multi-plant network ensures just-in-time delivery for global OEMs, reducing logistics friction and environmental impact.
             </p>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-tight">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> APAC Region: 8 Plants
               </li>
               <li className="flex items-center gap-3 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-tight">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> EMEA Region: 2 Plants
               </li>
               <li className="flex items-center gap-3 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-tight">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> Americas: 1 Regional Hub
               </li>
             </ul>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
               alt="World Map" 
               className="w-full h-auto grayscale opacity-50"
             />
             <div className="absolute top-[40%] left-[25%] w-2 h-2 bg-[#0B96AC] rounded-full shadow-[0_0_10px_#0B96AC]"></div>
             <div className="absolute top-[45%] left-[65%] w-2 h-2 bg-[#0B96AC] rounded-full shadow-[0_0_10px_#0B96AC]"></div>
             <div className="absolute top-[68%] left-[78%] w-2 h-2 bg-[#0B96AC] rounded-full shadow-[0_0_10px_#0B96AC]"></div>
          </div>
        </div>
      </section>

      {/* --- Visionary Leadership Section --- */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E5E9F0]">
        <div className="w-full px-8 lg:px-20">
          <div className="text-center mb-16">
            <h4 className="text-[#1A1A1A] font-bold text-[16px] mb-2 uppercase tracking-tight">Visionary Leadership</h4>
            <p className="text-[14px] text-slate-400 font-medium">Led by industry veterans who pioneered precision manufacturing standards across the subcontinent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { name: "Vikram Malhotra", role: "CHAIRMAN & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
               { name: "Ananya Singh", role: "CHIEF OPERATIONS OFFICER", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
               { name: "Dr. Rajesh Iyer", role: "CHIEF TECHNOLOGY OFFICER", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
             ].map((leader, i) => (
               <div key={i} className="relative group h-[500px] overflow-hidden rounded-sm shadow-lg">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <h4 className="text-[#0B96AC] font-bold text-[10px] tracking-[0.2em] mb-2 uppercase">{leader.role}</h4>
                     <h3 className="text-[20px] font-bold text-white mb-6 uppercase tracking-tight leading-none">{leader.name}</h3>
                     <button className="flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                        <div className="w-2 h-2 bg-white rounded-full"></div> WATCH INTRODUCTION
                     </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#0B96AC] py-16">
         <div className="w-full px-8 lg:px-20 text-center">
            <h4 className="text-white/70 font-bold text-[12px] uppercase tracking-[0.2em] mb-4">Ready to scale with LBAP?</h4>
            <p className="text-white/60 text-[14px] mb-10 max-w-2xl mx-auto font-medium">Join our ecosystem of world-class automotive partners and leverage our massive strategic infrastructure.</p>
            <div className="flex justify-center gap-4">
               <button className="bg-white text-[#0B96AC] px-10 py-4 font-bold uppercase text-[11px] tracking-widest shadow-xl hover:bg-slate-900 hover:text-white transition-all">
                  PARTNER WITH US
               </button>
               <button className="border border-white/50 text-white px-10 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-[#0B96AC] transition-all">
                  VIEW FACILITIES
               </button>
            </div>
         </div>
      </section>



    </div>
  );
};

export default About;
