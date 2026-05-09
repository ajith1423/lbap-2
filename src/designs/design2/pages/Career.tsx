import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Briefcase, ArrowRight, Play, Mail, Globe, Phone } from 'lucide-react';

const Career = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      
      {/* --- Hero Section --- */}

      {/* --- Hero Section --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Career Hero" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-[#0B96AC]/5 mix-blend-overlay"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
               Join the <span className="text-[#0B96AC]">Engineering Elite.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">
               LBAP is not just a factory; it's a precision laboratory. We are looking for the next generation of engineers to define the future of automotive excellence.
            </p>
            <div className="flex flex-wrap gap-5">
               <button className="bg-[#0B96AC] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">Explore Openings</button>
               <button className="border border-white/20 text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Our Culture</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Life at LBAP --- */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Testimonial Box */}
            <div className="lg:col-span-7 bg-[#F4F7FA] p-12 lg:p-16 lg:pb-24 rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-[#0B96AC] mb-8">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17.5C0 7.83502 7.83502 0 17.5 0V12.5C17.5 15.2614 15.2614 17.5 12.5 17.5H0ZM22.5 17.5C22.5 7.83502 30.335 0 40 0V12.5C40 15.2614 37.7614 17.5 35 17.5H22.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-[28px] lg:text-[32px] font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
                  "From Junior Intern to Lead Tool Designer in 4 years."
                </h3>
                <p className="text-[#595959] text-[15px] lg:text-[16px] leading-relaxed mb-10 italic font-medium max-w-xl">
                  "The mentorship program here is unparalleled. At LBAP, you don't just work on parts; you understand the soul of the machine. Every micron matters."
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#0B96AC] shadow-lg shadow-[#0B96AC]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                      alt="Rahul Sharma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1A1A1A] uppercase tracking-tight">RAHUL SHARMA</h4>
                    <p className="text-[13px] font-bold text-[#0B96AC] uppercase tracking-widest">LEAD TOOLING ENGINEER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* R&D Sandbox Box */}
            <div className="lg:col-span-5 bg-[#0D121F] p-12 lg:p-16 lg:pb-32 rounded-sm flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">The R&D Sandbox</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-10">
                Our Quality Control lab uses real-time AI analytics. We don't just fix errors; we predict them before they happen.
              </p>
              <div className="mt-auto rounded-sm overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                  alt="R&D Lab" 
                  className="w-full h-auto grayscale brightness-75 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Collaborative Culture */}
            <div className="lg:col-span-4 bg-white border border-[#E5E9F0] p-10 flex flex-col items-center text-center rounded-sm">
              <div className="text-[#0B96AC] mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-4">Collaborative Culture</h4>
              <p className="text-[14px] text-[#595959] leading-relaxed max-w-[240px]">
                Cross-functional teams that bridge the gap between design and physical fabrication.
              </p>
            </div>

            {/* Retention Rate */}
            <div className="lg:col-span-8 bg-white border border-[#E5E9F0] p-10 flex flex-col md:flex-row items-center gap-10 rounded-sm">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-7xl font-black text-[#0B96AC] leading-none mb-2">98%</span>
                <span className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-widest">Retention Rate</span>
              </div>
              <div className="hidden md:block w-px h-24 bg-[#E5E9F0]"></div>
              <p className="text-[18px] text-[#595959] leading-relaxed max-w-md">
                Our commitment to employee growth means our talent stays. We build careers, not just fill seats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Growth Pathway --- */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Growth Pathway</h2>
              <p className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-[0.4em]">Structural Advancement for Junior Engineers</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Foundations", desc: "6-months focus on material science and plant floor physics.", active: false },
                { step: "02", title: "Specialization", desc: "Mastering Tech-II & III Level precision tools and robotic leadership.", active: false },
                { step: "03", title: "Operational Lead", desc: "Managing multi-functional lines with high availability targets.", active: false },
                { step: "04", title: "Chief Engineer", desc: "Driving innovation logic across global scale manufacturing hubs.", active: true }
              ].map((item, idx) => (
                <div key={idx} className={`p-10 border transition-all ${item.active ? 'bg-[#0B96AC] border-[#0B96AC] text-white shadow-2xl' : 'bg-white border-slate-100 text-slate-900'}`}>
                   <span className={`text-[10px] font-bold uppercase tracking-widest block mb-10 ${item.active ? 'text-white/50' : 'text-[#0B96AC]'}`}>{item.step}</span>
                   <h4 className="text-lg font-bold mb-6 tracking-tight">{item.title}</h4>
                   <p className={`text-sm leading-relaxed ${item.active ? 'text-white/70' : 'text-slate-400'}`}>{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Available Positions --- */}
      <section className="py-12 bg-[#F8F9FB]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 className="text-[40px] font-bold text-[#1A1A1A] mb-2 tracking-tight">Available Positions</h2>
              <p className="text-[16px] text-[#595959] font-medium">Precision roles for precision talent.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-[#0B96AC] text-white text-[12px] font-bold uppercase tracking-widest rounded-sm">ALL</button>
              <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">R&D</button>
              <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">QUALITY CONTROL</button>
              <button className="px-6 py-2 bg-white border border-[#E5E9F0] text-[#595959] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:border-[#0B96AC]/50 transition-all">TOOL & DIE</button>
            </div>
          </div>

          <div className="bg-white border border-[#E5E9F0] rounded-sm overflow-hidden shadow-sm">
            {/* Search and Location Bar */}
            <div className="p-6 border-b border-[#E5E9F0] flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-[#8E99AF]" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search by role or keyword..." 
                  className="w-full bg-[#FAFBFC] border border-[#E5E9F0] py-3 pl-12 pr-4 text-[15px] font-medium text-[#1A1A1A] outline-none focus:border-[#0B96AC]/50 transition-all"
                />
              </div>
              <div className="md:w-64 relative">
                <select className="w-full bg-white border border-[#E5E9F0] py-3 px-4 pr-10 text-[15px] font-medium text-[#1A1A1A] outline-none appearance-none focus:border-[#0B96AC]/50 transition-all cursor-pointer">
                  <option>Work Location</option>
                  <option>Gurgaon Plant</option>
                  <option>Pune HQ</option>
                  <option>Hosur Unit</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#8E99AF" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="divide-y divide-[#E5E9F0]">
              {[
                { 
                  title: "Precision Tool Designer", 
                  type: "FULL TIME", 
                  loc: "Gurgaon Plant", 
                  role: "Tool & Die", 
                  posted: "Posted 2d ago" 
                },
                { 
                  title: "QA Metrology Specialist", 
                  type: "FULL TIME", 
                  loc: "Pune HQ", 
                  role: "Quality Control", 
                  posted: "Posted 4d ago" 
                },
                { 
                  title: "Fabrication Process Engineer", 
                  type: "FULL TIME", 
                  loc: "Gurgaon Plant", 
                  role: "R&D", 
                  posted: "Posted 1w ago" 
                }
              ].map((job, idx) => (
                <div key={idx} className="p-8 lg:p-10 hover:bg-[#FAFBFC] transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-[22px] font-bold text-[#1A1A1A]">{job.title}</h3>
                        <span className="px-3 py-1 bg-[#EBF5FF] text-[#0066FF] text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#8E99AF]">
                          <MapPin className="w-4 h-4" /> {job.loc}
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#8E99AF]">
                          <Briefcase className="w-4 h-4" /> {job.role}
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#8E99AF]">
                          <Clock className="w-4 h-4" /> {job.posted}
                        </div>
                      </div>
                    </div>
                    <button className="whitespace-nowrap px-10 py-3 border border-[#0B96AC] text-[#0B96AC] text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#0B96AC] hover:text-white transition-all rounded-sm">
                      APPLY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Career;
