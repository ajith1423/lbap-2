import { Mail, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#F8FAFC] text-slate-600 border-t border-slate-100 font-['Outfit']">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* --- About Us --- */}
          <div className="lg:col-span-4">
            <Logo className="mb-8" />
            <p className="text-[14px] leading-relaxed text-slate-500 font-medium">
              We are pleased to introduce ourselves as one of the sterling Manufacture and supply Pressed components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for many leading automotive customers.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div className="lg:col-span-2 lg:ml-10">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">QUICK LINKS</h4>
            <ul className="space-y-4 text-[13px] font-bold text-slate-400 uppercase tracking-widest">
              <li><a href="/" className="hover:text-[#0B96AC] transition-colors">HOME</a></li>
              <li><a href="/about" className="hover:text-[#0B96AC] transition-colors">ABOUT US</a></li>
              <li><a href="/product" className="hover:text-[#0B96AC] transition-colors">PRODUCT</a></li>
              <li><a href="/career" className="hover:text-[#0B96AC] transition-colors">CAREER</a></li>
              <li><a href="/client" className="hover:text-[#0B96AC] transition-colors">CLIENT</a></li>
              <li><a href="/contact" className="hover:text-[#0B96AC] transition-colors">CONTACT US</a></li>
            </ul>
          </div>

          {/* --- QR Code --- */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">QR CODE</h4>
            <div className="w-32 h-32 bg-white p-2 shadow-sm border border-slate-100">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://laxmibalaji.com" 
                 alt="QR Code" 
                 className="w-full h-full opacity-80"
               />
            </div>
          </div>

          {/* --- Contact --- */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">CONTACT</h4>
            <ul className="space-y-6 text-[13px] font-medium text-slate-500">
              <li className="flex items-start gap-4">
                <Navigation className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Plot No. 16-C, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>jotheeslbap@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+91 99943 97522 / +91 97900 05516</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon - Sat: 10AM - 6PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-6 border-t border-slate-200/60 text-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            COPYRIGHT @ 2025 <span className="underline decoration-slate-300 underline-offset-4 cursor-pointer hover:text-slate-600 transition-colors">LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD.</span> ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
