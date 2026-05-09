import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone, ArrowRight, Settings, Cpu, ShieldCheck, Headphones, ShoppingCart, Truck } from 'lucide-react';

const Contact = () => {
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
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Header Section --- */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-4">Communication Protocol</h4>
             <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Connect with Our Sales Engineers.</h1>
             <p className="text-slate-500 text-lg leading-relaxed">
                Our technical specialists are ready to discuss complex manufacturing requirements, from initial sheet metal prototyping to full-scale press component production.
             </p>
          </div>
        </div>
      </section>

      {/* --- Form & Sidebar Section --- */}
      <section className="pb-32 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Sidebar */}
              <div className="lg:col-span-3 space-y-8">
                 <div className="bg-slate-50 border border-slate-100 p-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">Specialized Divisions</h4>
                    <ul className="space-y-6">
                       <li className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#0B96AC] transition-colors">
                          Technical Support <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                       </li>
                       <li className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#0B96AC] transition-colors">
                          Procurement <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                       </li>
                       <li className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#0B96AC] transition-colors">
                          Compliance <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                       </li>
                    </ul>
                 </div>

                 <div className="p-8 border border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B96AC] mb-6">Global Reach</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed">
                       LBAP operates from 12 strategic hubs across the Asia-Pacific region, ensuring logistical efficiency and direct engineering oversight.
                    </p>
                 </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-9 bg-white border border-slate-100 p-12 shadow-sm">
                 <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tight">Global Inquiry Hub</h2>
                 
                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Select Region</label>
                          <select className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-medium outline-none focus:border-[#0B96AC]/50 transition-colors appearance-none">
                             <option>South East Asia (HQ)</option>
                             <option>EMEA Region</option>
                             <option>Americas</option>
                          </select>
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Technical Requirement</label>
                          <select className="w-full bg-slate-50 border border-slate-100 p-4 text-sm font-medium outline-none focus:border-[#0B96AC]/50 transition-colors appearance-none">
                             <option>Sheet Metal Fabrication</option>
                             <option>Heavy Pressing</option>
                             <option>Robotic Assembly</option>
                          </select>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                          <input type="text" placeholder="Engineering Lead / Manager" className="w-full bg-white border border-slate-200 p-4 text-sm font-medium outline-none focus:border-[#0B96AC]/50 transition-colors" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Corporate Email</label>
                          <input type="email" placeholder="sales@company.com" className="w-full bg-white border border-slate-200 p-4 text-sm font-medium outline-none focus:border-[#0B96AC]/50 transition-colors" />
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Technical Specifications / Project Scope</label>
                       <textarea rows={6} placeholder="Detail the dimensions, material grades, and estimated annual volume..." className="w-full bg-white border border-slate-200 p-4 text-sm font-medium outline-none focus:border-[#0B96AC]/50 transition-colors resize-none"></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                       <button className="bg-[#0B96AC] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-[#0B96AC]/20 hover:bg-slate-900 transition-all">
                          Submit RFQ
                       </button>
                       <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                          Typical response time: <span className="text-[#0B96AC]">4.2 hours</span>
                       </span>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="pb-32 bg-white">
        <div className="container-custom">
           <div className="relative aspect-[21/9] bg-slate-900 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
                alt="World Map" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Pins */}
              <div className="absolute top-[40%] left-[20%] w-3 h-3 bg-[#0B96AC] rounded-full animate-ping"></div>
              <div className="absolute top-[45%] left-[65%] w-3 h-3 bg-[#0B96AC] rounded-full animate-ping"></div>
              <div className="absolute top-[60%] left-[75%] w-3 h-3 bg-[#0B96AC] rounded-full animate-ping"></div>
              
              <div className="absolute bottom-10 left-10 bg-white p-6 shadow-2xl border-l-4 border-[#0B96AC]">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B96AC] mb-2">Manufacturing HQ</h4>
                 <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">Industrial Zone Sector 2 Greater Hub</h3>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Coordinates: 20.5937° N, 78.9629° E</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- Support Cards --- */}
      <section className="pb-32 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-slate-100 p-10 group hover:border-[#0B96AC]/30 transition-all">
                 <Headphones className="text-[#0B96AC] w-6 h-6 mb-8" />
                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Technical Support</h3>
                 <p className="text-sm text-slate-500 leading-relaxed mb-10">
                    Dedicated line for existing production assembly issues and engineering queries.
                 </p>
                 <a href="#" className="text-[10px] font-black text-[#0B96AC] uppercase tracking-[0.2em]">+1 (800) LBAP-TECH</a>
              </div>

              <div className="border border-slate-100 p-10 group hover:border-[#0B96AC]/30 transition-all">
                 <ShoppingCart className="text-[#0B96AC] w-6 h-6 mb-8" />
                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Procurement</h3>
                 <p className="text-sm text-slate-500 leading-relaxed mb-10">
                    Supply chain management and raw material sourcing protocols.
                 </p>
                 <a href="#" className="text-[10px] font-black text-[#0B96AC] uppercase tracking-[0.2em]">procurement@lbap.com</a>
              </div>

              <div className="border border-slate-100 p-10 group hover:border-[#0B96AC]/30 transition-all">
                 <Truck className="text-[#0B96AC] w-6 h-6 mb-8" />
                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Machinery Sales</h3>
                 <p className="text-sm text-slate-500 leading-relaxed mb-10">
                    Direct acquisition of LBAP certified sheet metal and press machinery.
                 </p>
                 <a href="#" className="text-[10px] font-black text-[#0B96AC] uppercase tracking-[0.2em]">+1 (800) LBAP-MACH</a>
              </div>
           </div>
        </div>
      </section>



    </div>
  );
};

export default Contact;
