import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400" />
              <div className="text-left">
                <div className="text-white font-semibold leading-tight">Skyline Estates</div>
                <div className="text-xs text-blue-200/70 leading-tight">Real Estate Marketing</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:shadow-md transition-shadow">
                <Phone className="h-4 w-4" /> Book a call
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-3 py-2 font-medium">
                <Mail className="h-4 w-4" /> Contact us
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
