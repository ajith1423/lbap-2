import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, RefreshCw, ArrowRight, Mail, Globe, MapPin, Phone, ShieldCheck, GraduationCap } from 'lucide-react';

const CSR = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      
      {/* --- Header Section --- */}

      {/* --- Header Section --- */}
      <section className="bg-white overflow-hidden border-b border-[#E5E9F0]">
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center bg-white">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-6 opacity-80">COMMITMENT TO THE FUTURE</h4>
            <h1 className="text-[32px] lg:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              Sustainable Engineering for a <br />
              <span className="text-[#8E99AF]">Greener Tomorrow.</span>
            </h1>
            <p className="text-[16px] text-[#595959] leading-relaxed mb-12 max-w-2xl font-medium">
              LBAP is redefining automotive manufacturing through a radical commitment to environmental stewardship. Our roadmap to 2030 is built on technical precision and measurable carbon reduction.
            </p>

            {/* Progress Card */}
            <div className="bg-white border border-[#F0F4F8] p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] max-w-2xl">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex flex-col border-r border-[#F0F4F8] pr-12">
                  <span className="text-[64px] font-black text-[#0B96AC]/20 leading-none">2,190</span>
                  <span className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-[0.2em] mt-3">DAYS TO ZERO</span>
                </div>
                <div className="flex-grow w-full">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-[0.2em]">CARBON NEUTRALITY PROGRESS</span>
                    <span className="text-[10px] font-bold text-[#0B96AC] tracking-widest">64% ACHIEVED</span>
                  </div>
                  <div className="w-full h-1 bg-[#F0F4F8] rounded-full overflow-hidden">
                    <div className="w-[64%] h-full bg-[#0B96AC]/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden bg-white">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Sustainability Symbol" 
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute bottom-10 left-10 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#8E99AF]" />
              <span className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-[0.2em]">LBAP GREEN HUB, SECTOR 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Green Factory Initiatives --- */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
           <h2 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">Green Factory Initiatives</h2>
           <p className="text-[#8E99AF] mb-20 text-sm">Our manufacturing sites operate as closed-loop ecosystems.</p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Zap, 
                  title: "Renewable Energy Autonomy", 
                  desc: "Integrating 12,000 sqm of photovoltaic arrays across all plant rooftops, generating 2.5MW of clean energy for precision fabrication.",
                  stat1: "85%", stat1Label: "Grid Independence", stat2: "1,200", stat2Label: "CO2 Tons Saved"
                },
                { 
                  icon: Droplets, 
                  title: "Zero Liquid Discharge", 
                  desc: "Advanced reverse osmosis systems recycle 98% of water used in sheet metal cleaning and cooling processes.",
                  tag: "Industrial Excellence"
                },
                { 
                  icon: RefreshCw, 
                  title: "Circular Metallurgy", 
                  desc: "100% of scrap aluminum and steel is reprocessed, sorted, and returned to our smelting partners for infinite loops.",
                  link: "View Logistics Map"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E5E9F0] p-10 flex flex-col justify-between h-full group overflow-hidden rounded-sm shadow-sm hover:border-[#0B96AC]/30 transition-all">
                   <div>
                      <div className="w-14 h-14 bg-[#0B96AC]/5 flex items-center justify-center text-[#0B96AC] rounded-sm mb-10 group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                         <item.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-6 tracking-tight">{item.title}</h3>
                      <p className="text-[14px] text-[#595959] leading-relaxed mb-10">{item.desc}</p>
                   </div>
                   
                   {item.stat1 ? (
                      <div className="grid grid-cols-2 gap-6 border-t border-[#F0F4F8] pt-8">
                         <div>
                            <p className="text-2xl font-black text-[#0B96AC]">{item.stat1}</p>
                            <p className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-widest">{item.stat1Label}</p>
                         </div>
                         <div>
                            <p className="text-2xl font-black text-[#1A1A1A]">{item.stat2}</p>
                            <p className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-widest">{item.stat2Label}</p>
                         </div>
                      </div>
                   ) : item.tag ? (
                      <div className="flex justify-between items-center pt-8 border-t border-[#F0F4F8]">
                         <span className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0B96AC] animate-pulse"></div> Operational Since 2012
                         </span>
                      </div>
                   ) : (
                      <div className="pt-8 border-t border-[#F0F4F8]">
                         <button className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            {item.link} <ArrowRight className="w-3 h-3" />
                         </button>
                      </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Precision Skills Section --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row gap-6 overflow-hidden rounded-sm">
              <div className="lg:w-1/2 bg-[#0B96AC] p-12 lg:p-20 flex flex-col justify-center shadow-lg">
                 <h4 className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/70 mb-8 uppercase">COMMUNITY IMPACT</h4>
                 <h2 className="text-[30px] lg:text-[42px] font-bold text-white mb-10 tracking-tight leading-[1.1]">
                    Precision Skills for <br />the Next Generation.
                 </h2>
                 <p className="text-white/80 text-[16px] leading-relaxed mb-12">
                    The LBAP Technical Institute provides fully-funded vocational training in CNC machining, robotic welding, and additive manufacturing for local youth.
                 </p>
                 
                 <div className="space-y-10 mb-16">
                    <div className="flex gap-6">
                       <GraduationCap className="w-8 h-8 text-white/50 shrink-0" />
                       <div>
                          <h4 className="text-[20px] font-bold text-white mb-2">Advanced Lab Facilities</h4>
                          <p className="text-white/60 text-[14px] leading-relaxed max-w-sm">
                             Students train on the same high-precision machines used in our main production line.
                          </p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <ShieldCheck className="w-8 h-8 text-white/50 shrink-0" />
                       <div>
                          <h4 className="text-[20px] font-bold text-white mb-2">92% Employment Rate</h4>
                          <p className="text-white/60 text-[14px] leading-relaxed max-w-sm">
                             Graduates are prioritized for entry-level engineering roles within LBAP and our partner network.
                          </p>
                       </div>
                    </div>
                 </div>

                 <button className="self-start px-12 py-4 border border-white text-white text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#0B96AC] transition-all rounded-sm">
                    READ IMPACT REPORT
                 </button>
              </div>
              <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-auto overflow-hidden bg-slate-100 rounded-sm">
                 <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                    alt="Precision Training" 
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                 />
                 <div className="absolute inset-0 bg-[#0B96AC]/10 mix-blend-overlay"></div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Metric Tracking --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
              <div>
                 <h3 className="text-[24px] font-bold text-[#8E99AF] tracking-tight uppercase mb-2">ENVIRONMENTAL METRIC TRACKING</h3>
                 <p className="text-[#8E99AF] text-[14px]">Live data feed from our Global Monitoring Center ensuring compliance with ISO 14001:2015 standards.</p>
              </div>
              <div className="flex gap-10">
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-widest mb-1">STATION ID</p>
                    <p className="text-[14px] font-bold text-[#595959]">LBAP-HQ-G1</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-[#8E99AF] uppercase tracking-widest mb-1">SYSTEM STATUS</p>
                    <p className="text-[14px] font-bold text-[#0B96AC] uppercase tracking-widest">OPTIMAL</p>
                 </div>
              </div>
           </div>
           
           <div className="overflow-hidden border border-[#E5E9F0] rounded-sm shadow-sm">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#D1E9ED] text-white">
                       <th className="p-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B96AC]">PARAMETER</th>
                       <th className="p-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B96AC]">UNIT</th>
                       <th className="p-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B96AC]">THRESHOLD</th>
                       <th className="p-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B96AC]">CURRENT VALUE</th>
                       <th className="p-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B96AC]">STATUS</th>
                    </tr>
                 </thead>
                 <tbody className="text-[14px]">
                    {[
                       { param: "Emission Intensity", unit: "kg CO2e / unit", threshold: "0.45", value: "0.28", status: "STABLE" },
                       { param: "Energy Consumption", unit: "MWh / month", threshold: "850", value: "712", status: "STABLE" },
                       { param: "Waste Diversion", unit: "% Total Mass", threshold: "95.00", value: "99.40", status: "SUPERIOR" }
                    ].map((row, i) => (
                       <tr key={i} className="border-b border-[#F0F4F8] hover:bg-[#FAFBFC] transition-all">
                          <td className="p-5 font-bold text-[#8E99AF]">{row.param}</td>
                          <td className="p-5 text-[#8E99AF] font-medium">{row.unit}</td>
                          <td className="p-5 text-[#8E99AF] font-medium">{row.threshold}</td>
                          <td className="p-5 text-[#0B96AC] font-bold">{row.value}</td>
                          <td className="p-5">
                             <span className="text-[10px] font-bold text-[#0B96AC] tracking-widest uppercase py-1 px-3 bg-[#EBF5FF] rounded-sm">
                                {row.status}
                             </span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>



    </div>
  );
};

export default CSR;
