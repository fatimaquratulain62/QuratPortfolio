"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</motion.h2>
      
      <div className="glass p-8 md:p-12 rounded-2xl text-center">
        <p className="text-white/70 text-lg mb-10">I'm currently available for freelance work and full-time positions. Let's build something amazing together!</p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a href={PERSONAL_INFO.socials.email} whileHover={{ scale: 1.05 }} className="flex items-center gap-4 glass p-4 rounded-xl hover:border-primary/50 transition-colors text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0"><FaEnvelope /></div>
            <div className="overflow-hidden"><p className="text-xs text-white/50">Email Me At</p><p className="text-white text-sm font-medium truncate">{PERSONAL_INFO.email}</p></div>
          </motion.a>
          
          <motion.a href={`tel:${PERSONAL_INFO.phone}`} whileHover={{ scale: 1.05 }} className="flex items-center gap-4 glass p-4 rounded-xl hover:border-primary/50 transition-colors text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0"><FaPhone /></div>
            <div><p className="text-xs text-white/50">Call Me At</p><p className="text-white text-sm font-medium">{PERSONAL_INFO.phone}</p></div>
          </motion.a>
          
          <motion.a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-4 glass p-4 rounded-xl hover:border-primary/50 transition-colors text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0"><FaGithub /></div>
            <div><p className="text-xs text-white/50">GitHub</p><p className="text-white text-sm font-medium">@fatimaquratulain62</p></div>
          </motion.a>
          
          <motion.a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-4 glass p-4 rounded-xl hover:border-primary/50 transition-colors text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0"><FaLinkedin /></div>
            <div><p className="text-xs text-white/50">LinkedIn</p><p className="text-white text-sm font-medium">@quratulain-fatimaa</p></div>
          </motion.a>
        </div>

        <div className="flex items-center gap-2 justify-center text-white/60 mt-10 text-sm">
          <FaMapMarkerAlt /> {PERSONAL_INFO.location}
        </div>
      </div>
    </section>
  );
}
