import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Machineries', path: '/machineries' },
    { name: 'CSR', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-[100] py-4 bg-white border-b border-slate-100 shadow-sm">
      <div className="w-full px-8 lg:px-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
          </div>
          <span className="font-bold text-lg tracking-tight uppercase text-slate-900">Laxmi Balaji</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `transition-all duration-300 pb-1 ${
                  isActive 
                    ? 'text-[#0B96AC] border-b-2 border-[#0B96AC]' 
                    : 'text-slate-400 hover:text-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button className="bg-[#0B96AC] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#097b8e] transition-all">
          Request Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
