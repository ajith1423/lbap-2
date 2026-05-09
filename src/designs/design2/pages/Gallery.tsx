import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Search, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Header Section --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="relative pl-10">
            <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#0B96AC]"></div>
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-4">LBAP Visual Documentation</h4>
              <h1 className="text-[32px] font-bold text-[#1A1A1A] mb-4 tracking-tight">The Precision Archive</h1>
              <p className="text-[15px] text-[#595959] max-w-2xl leading-relaxed">
                A curated visual record of our manufacturing prowess, from raw sheet metal fabrication to final assembly laboratory inspections. Each frame captures the clinical precision of our white-room standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Filter Bar --- */}
      <section className="py-8 border-b border-[#E5E9F0]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 pl-10">
             <button className="px-6 py-2 bg-[#0B96AC] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm">All Documentation</button>
             <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[11px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">Finished Parts</button>
             <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[11px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">Assembly Lines</button>
             <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[11px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">Lab Inspections</button>
          </div>
        </div>
      </section>

      {/* --- Image Grid --- */}
      <section className="py-1 border-b border-[#E5E9F0]">
        <div className="container-custom px-1 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 pl-10">
            <div className="h-[300px] lg:h-[400px]">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" alt="Machinery 1" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-[300px] lg:h-[400px]">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Machinery 2" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-[300px] lg:h-[400px]">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" alt="Machinery 3" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop" alt="Machinery 4" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt="Machinery 5" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-[400px] lg:h-[500px]">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop" alt="Machinery 6" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Feature/Video Cards --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-10">
            {/* Card 1 */}
            <div className="bg-[#FAFBFC] border border-[#E5E9F0] rounded-sm overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" alt="CNC Machining" className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white rounded-md flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-[#0B96AC] hover:border-[#0B96AC] transition-all">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#0B96AC] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Time-Lapse: 120 FPS
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">CNC Machining Operations</h3>
                <p className="text-[14px] text-[#595959] leading-relaxed mb-8">
                  Automated 5-axis milling process of high-strength alloy blocks. Demonstrating tool-path optimization and cooling efficiency.
                </p>
                <div className="pt-6 border-t border-[#E5E9F0] flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                  <span className="text-[#0B96AC]">DURATION: 04:22</span>
                  <button className="flex items-center gap-2 text-[#8E99AF] hover:text-[#1A1A1A] transition-colors uppercase">
                    DOWNLOAD LOGS <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFBFC] border border-[#E5E9F0] rounded-sm overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" alt="Press Shop" className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white rounded-md flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-[#0B96AC] hover:border-[#0B96AC] transition-all">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#0B96AC] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Technical: Press Cycle
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Press Shop Dynamics</h3>
                <p className="text-[14px] text-[#595959] leading-relaxed mb-8">
                  High-tonnage progressive die stamping for structural chassis components. Capturing impact precision and waste management.
                </p>
                <div className="pt-6 border-t border-[#E5E9F0] flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                  <span className="text-[#0B96AC]">DURATION: 03:45</span>
                  <button className="flex items-center gap-2 text-[#8E99AF] hover:text-[#1A1A1A] transition-colors uppercase">
                    DOWNLOAD LOGS <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Gallery;
