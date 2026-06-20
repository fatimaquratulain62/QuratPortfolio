import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div><h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Qurat.dev</h3><p className="text-white/40 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p></div>
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.socials.github} className="text-white/60 hover:text-primary text-xl"><FaGithub /></a>
          <a href={PERSONAL_INFO.socials.linkedin} className="text-white/60 hover:text-primary text-xl"><FaLinkedin /></a>
          <a href={PERSONAL_INFO.socials.email} className="text-white/60 hover:text-primary text-xl"><FaEnvelope /></a>
        </div>
        <p className="text-white/40 text-sm">Built with Next.js, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
