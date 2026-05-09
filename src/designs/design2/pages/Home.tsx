import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Box, Database, Cpu, Mail, MapPin, Phone, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20">
      
      {/* --- Navigation --- */}
      <nav className="absolute top-0 w-full z-50 py-8">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0B96AC] flex items-center justify-center">
              <span className="font-bold text-lg text-white">LB</span>
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase text-white">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest uppercase text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
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

      {/* --- 1. Hero Section --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0B96AC]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=2000&auto=format&fit=crop" 
            alt="Robotic Manufacturing" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B96AC] via-[#0B96AC]/70 to-transparent"></div>
        </div>

        <div className="w-full px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 mb-8 border border-white/20">
               <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">ESTABLISHED 1994</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-8 tracking-tighter max-w-2xl">
              Engineering the Future of Automotive Components.
            </h1>
            <p className="text-[17px] text-slate-300 max-w-xl leading-relaxed mb-12 font-medium">
              Advanced sheet metal fabrication and precision manufacturing for global automotive leaders.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="bg-white text-[#0B96AC] px-10 py-4 font-bold text-[12px] tracking-widest hover:bg-slate-100 transition-all uppercase">
                Explore Solutions
              </button>
              <button className="border border-white/40 text-white px-10 py-4 font-bold text-[12px] tracking-widest hover:bg-white/10 transition-all uppercase">
                Technical Data
              </button>
            </div>
          </div>
        </div>

        {/* Floating Production Info */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="p-8 bg-[#1A1F26]/80 border border-white/10 shadow-2xl max-w-[320px] backdrop-blur-lg">
            <h4 className="text-[#0B96AC] font-bold text-[11px] uppercase tracking-widest mb-3">Live Production Feed</h4>
            <p className="text-[13px] text-white/70 leading-relaxed font-medium">
              L97 #6254 currently in Final Assembly. Quality Check: Passed.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Partners Strip --- */}
      <section className="bg-[#F8FAFC] border-y border-[#E5E9F0] py-10">
        <div className="w-full px-8 lg:px-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8E99AF] mb-8">Partners in Precision Engineering</p>
          <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-40">
             {['VOLT-AUTO', 'NEXUS-MOTORS', 'APEX-PARTS', 'TITAN-ENGINEERING', 'FLUX-DYNAMICS', 'CORE-TECH'].map((p) => (
               <span key={p} className="text-[16px] font-black tracking-widest text-[#191C1E]">{p}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. Core Capabilities --- */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 lg:px-20">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h4 className="text-[#0B96AC] font-bold text-[9px] uppercase tracking-[0.4em] mb-4">CORE CAPABILITIES</h4>
              <h2 className="text-[28px] font-bold tracking-tight text-[#1A1A1A]">Precision at Scale. Rigor at Volume.</h2>
            </div>
            <div className="hidden md:block text-[14px] font-bold tracking-widest text-[#8E99AF]">001 — 003</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "Sheet Metal Fabrication", 
                desc: "Our high-speed CNC pressing and automated folding lines handle complex geometries with tolerances within 0.05mm.",
                stats: [
                  { label: "CAPACITY", val: "100,000 UNITS" },
                  { label: "MATERIAL", val: "ALL GRADES CRCA" }
                ]
              },
              { 
                icon: Settings, 
                title: "Heavy Fabrication", 
                desc: "Specialized robotic welding cells for chassis components, engine mounts, and structural reinforcements.",
                stats: [
                  { label: "AUTOMATION", val: "100% ROBOTIC" },
                  { label: "COMPLIANCE", val: "ISO 9001:2015" }
                ]
              },
              { 
                icon: Box, 
                title: "Press Components", 
                desc: "Integrated clean-room capabilities for progressive die manufacturing and high-volume component stamping.",
                stats: [
                  { label: "PRODUCTION", val: "40,000 UNITS/DAY" },
                  { label: "MAX VOL", val: "PROG DIE + MANUAL" }
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-[#F8FAFC] border border-[#E5E9F0] hover:border-[#0B96AC] transition-all group rounded-sm shadow-sm">
                <div className="mb-8">
                  <item.icon className="w-6 h-6 text-[#0B96AC]" />
                </div>
                <h3 className="text-[18px] font-bold mb-4 text-[#1A1A1A] tracking-tight">{item.title}</h3>
                <p className="text-[#595959] text-[14px] leading-relaxed mb-10 font-medium">{item.desc}</p>
                
                <div className="pt-8 border-t border-slate-200 flex justify-between gap-4">
                  {item.stats.map((s, i) => (
                    <div key={i}>
                      <p className="text-[9px] font-bold text-[#8E99AF] tracking-widest mb-1 uppercase">{s.label}</p>
                      <p className="text-[12px] font-bold text-[#1A1A1A]">{s.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Mass Production Section --- */}
      <section className="bg-[#122A30] py-20 text-white">
        <div className="w-full px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight mb-10 text-white leading-tight">Mass Production Without Compromise.</h2>
            <div className="space-y-10">
              <div className="flex gap-8">
                <div className="w-10 h-10 bg-[#0B96AC]/20 border border-[#0B96AC]/40 flex items-center justify-center shrink-0">
                   <Settings className="w-5 h-5 text-[#0B96AC]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-2 uppercase tracking-tight">120,000 Sq Ft Facility</h4>
                  <p className="text-white/50 text-[14px] leading-relaxed font-medium">
                    Our main production hub operates 24/7 with three dedicated assembly lines.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-10 h-10 bg-[#0B96AC]/20 border border-[#0B96AC]/40 flex items-center justify-center shrink-0">
                   <Cpu className="w-5 h-5 text-[#0B96AC]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-2 uppercase tracking-tight">Smart Logic Integration</h4>
                  <p className="text-white/50 text-[14px] leading-relaxed font-medium">
                    MES Systems tracking every component from raw material to final shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
              alt="Laser Cutting" 
              className="w-full h-[450px] object-cover rounded-sm shadow-2xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Quality Control" 
              className="w-full h-[450px] object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- 5. Metrics Section --- */}
      <section className="bg-white py-20">
        <div className="w-full px-8 lg:px-20 text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B96AC] mb-4">LIVE OPERATIONAL METRICS</p>
          <h2 className="text-[28px] font-bold text-[#1A1A1A] mb-16 tracking-tight">Global Trust. Data-Driven Excellence.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "ANNUAL UNITS PRODUCED", value: "4.2M" },
              { label: "PPM DEFECT RATE", value: "0.02%" },
              { label: "ON-TIME DELIVERY", value: "100%" },
              { label: "COUNTRIES SERVED", value: "12+" }
            ].map((stat, i) => (
              <div key={i} className="border-l border-[#E5E9F0] pl-10">
                <h3 className="text-4xl font-black mb-2 text-[#1A1A1A] tracking-tighter">{stat.value}</h3>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#8E99AF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. Machinery Specification --- */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E5E9F0]">
        <div className="w-full px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/4">
              <h4 className="text-[10px] font-bold text-[#0B96AC] tracking-[0.3em] mb-10 uppercase">TECHNICAL CATEGORIES</h4>
              <ul className="space-y-4">
                {[
                  { name: "SHEET METAL", active: true },
                  { name: "FABRICATION", active: false },
                  { name: "PRESS COMPONENTS", active: false }
                ].map((cat, i) => (
                  <li key={i} className={`flex items-center gap-5 py-5 px-8 border rounded-sm transition-all cursor-pointer ${cat.active ? 'bg-white border-[#0B96AC] text-[#1A1A1A] shadow-md shadow-[#0B96AC]/5' : 'border-transparent text-[#8E99AF] hover:text-[#1A1A1A] hover:bg-white/50'}`}>
                    <div className={`w-2 h-2 rounded-full ${cat.active ? 'bg-[#0B96AC]' : 'bg-slate-300'}`}></div>
                    <span className="text-[12px] font-bold tracking-widest">{cat.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Table Area */}
            <div className="w-full lg:w-3/4">
              <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-10 tracking-tight">Machinery Specification</h2>
              <div className="overflow-hidden border border-[#E5E9F0] rounded-sm bg-white shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-[#122A30] text-white">
                    <tr>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">EQUIPMENT</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">CAPACITY</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">PRECISION</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">ORIGIN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "AMADA Fiber Laser", cap: "3000W / 4000W", prec: "±0.01mm", origin: "Japan" },
                      { name: "ABB Robotic Welders", cap: "6-Axis Sync", prec: "Sub-micron", origin: "Sweden" },
                      { name: "Seyi Power Press", cap: "200T - 1000T", prec: "High Speed", origin: "Taiwan" },
                      { name: "CMM Measuring", cap: "2000 x 1200mm", prec: "0.001mm", origin: "Germany" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-6 text-[15px] font-bold text-[#1A1A1A]">{row.name}</td>
                        <td className="p-6 text-[14px] text-[#595959] font-medium">{row.cap}</td>
                        <td className="p-6 text-[14px] text-[#595959] font-medium">{row.prec}</td>
                        <td className="p-6 text-[14px] text-[#1A1A1A] font-bold">{row.origin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
