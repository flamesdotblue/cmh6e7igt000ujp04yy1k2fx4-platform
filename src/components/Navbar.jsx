import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education-blogs' },
  { label: 'Blogs', href: '#education-blogs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-black/40 opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-[#7DF9FF] font-semibold tracking-wide" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>Future Black</a>
        <nav className="hidden md:flex items-center gap-6" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#A9A9A9] hover:text-[#7DF9FF] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#projects"
            className="ml-2 px-4 py-2 rounded-md bg-[#7DF9FF] text-black font-medium hover:bg-[#00FFFF] transition-colors"
          >
            Explore
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md border border-[#1E1E1E] text-[#7DF9FF]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1E1E1E] bg-black/80">
          <div className="px-4 py-3 flex flex-col gap-3" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#A9A9A9] hover:text-[#7DF9FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
