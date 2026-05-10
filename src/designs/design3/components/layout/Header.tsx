import { useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
    <nav className="bg-white border-b border-slate-100 py-3 px-6 sticky top-0 z-[100] font-['Outfit']">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
           <Logo />
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                currentPath === link.path ? 'text-[#0B96AC]' : 'hover:text-slate-900'
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20 hover:scale-105 transition-all">
          Request Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
