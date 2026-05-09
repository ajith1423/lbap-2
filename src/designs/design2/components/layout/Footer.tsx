import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Ash Line */}
      <div className="h-[1px] bg-slate-200 w-full"></div>
      
      <div className="bg-[#F8FAFC] pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* ABOUT US */}
            <div className="space-y-6">
              <h4 className="text-[15px] font-bold text-[#191C1E] tracking-wider uppercase">About Us</h4>
              <p className="text-[13px] text-[#595959] leading-[1.8] font-normal max-w-sm">
                We are pleased to introduce ourselves as one of the sterling Manufacture and supply Pressed components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for many leading automotive customers.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="space-y-6">
              <h4 className="text-[15px] font-bold text-[#191C1E] tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {['HOME', 'ABOUT US', 'PRODUCT', 'CAREER', 'CLIENT', 'CONTACT US'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#595959] hover:text-[#00A3FF] transition-colors font-normal uppercase">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* QR CODE */}
            <div className="space-y-6 flex flex-col items-start">
              <h4 className="text-[15px] font-bold text-[#191C1E] tracking-wider uppercase">QR Code</h4>
              <div className="bg-white p-2 border border-slate-200 shadow-sm">
                <img 
                  src="/footer_qr_code_1778314288081.png" 
                  alt="QR Code" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-6">
              <h4 className="text-[15px] font-bold text-[#191C1E] tracking-wider uppercase">Contact</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#595959] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[#595959] leading-normal font-normal">
                    Plot No. 16-C, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#595959] shrink-0" />
                  <span className="text-[13px] text-[#595959] font-normal">
                    jotheeslbap@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#595959] shrink-0" />
                  <span className="text-[13px] text-[#595959] font-normal">
                    +91 99943 97522 / +91 97900 05516
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-[#595959] shrink-0" />
                  <span className="text-[13px] text-[#595959] font-normal">
                    Mon - Sat: 10AM - 6PM
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F8FAFC] py-8 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-[11px] md:text-[12px] font-bold text-[#8E99AF] tracking-[0.1em] uppercase">
            COPYRIGHT @ 2025 <span className="text-[#595959] border-b border-[#595959]">LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD.</span> ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
