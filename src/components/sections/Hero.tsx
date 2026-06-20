"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useMagnetic } from "@/hooks/useMagnetic";
import ParticleSphere from "@/components/three/ParticleSphere";
import { PERSONAL_INFO } from "@/constants/data";
import Image from "next/image";

export default function Hero() {
  const magneticBtn = useMagnetic(0.3);
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden aurora-bg py-20 pt-32">
      <ParticleSphere />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-[1]" />
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-4 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 glass">
            <Image src={PERSONAL_INFO.image} alt="Profile" fill className="object-cover" priority />
          </div>
        </motion.div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-sans text-4xl md:text-6xl font-bold mb-4">{PERSONAL_INFO.name}</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-2xl font-light text-white/80 mb-6">
            <Typewriter words={["Flutter Developer", "Full-Stack Developer", "Software Engineering Student"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-white/60 max-w-lg mb-8 text-base">{PERSONAL_INFO.bio}</motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex gap-6 flex-wrap justify-center">
            <div ref={magneticBtn.ref} onMouseMove={magneticBtn.handleMouseMove} onMouseLeave={magneticBtn.handleMouseLeave} style={{ x: magneticBtn.position.x, y: magneticBtn.position.y }} className="relative">
              <a href={PERSONAL_INFO.resumeUrl} download="Qurat-ul-Ain-Fatima-CV.pdf" className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:scale-105 transition-transform block">Download CV</a>
            </div>
            <div className="flex gap-4 items-center glass rounded-full px-6 py-4">
              <a href={PERSONAL_INFO.socials.github} className="hover:text-primary text-xl"><FaGithub /></a>
              <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-primary text-xl"><FaLinkedin /></a>
              <a href={PERSONAL_INFO.socials.email} className="hover:text-primary text-xl"><FaEnvelope /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
