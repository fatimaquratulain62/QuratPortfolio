"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" }, { name: "About", href: "#about" }, { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" }, { name: "Experience", href: "#experience" }, { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Qurat.dev</a>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map(l => <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-primary transition-colors relative group">{l.name}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></a>)}
          <a href="#contact" className="px-5 py-2 bg-primary rounded-full text-sm font-medium hover:scale-105 transition-transform">Hire Me</a>
        </div>

        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass overflow-hidden">
            <div className="flex flex-col p-6 gap-4">
              {links.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-primary">{l.name}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
