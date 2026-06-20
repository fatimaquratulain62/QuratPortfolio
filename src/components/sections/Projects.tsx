"use client";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const filters = ["All", "Flutter", "Web", "AI", "Firebase"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));

  return (
    <section id="projects" className="py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Featured Work</motion.h2>
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${active === f ? "bg-primary text-white" : "glass text-white/70 hover:text-white"}`}>{f}</button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="glass rounded-2xl overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <div className="mb-4"><span className="text-xs font-bold text-primary uppercase tracking-wider">Features</span><ul className="text-white/60 text-sm mt-1 list-disc list-inside">{project.features.map(f => <li key={f}>{f}</li>)}</ul></div>
                <div className="flex flex-wrap gap-2 mb-6">{project.tech.map(tech => <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tech}</span>)}</div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white/80 hover:text-primary"><FaGithub /> Code</a>
                
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
