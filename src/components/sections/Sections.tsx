"use client";
import { motion } from "framer-motion";
import { ABOUT_ME, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, SERVICES, TESTIMONIALS, BLOGS } from "@/constants/data";
import { FaMobile, FaPaintBrush, FaDatabase, FaServer, FaLaptop, FaQuoteLeft } from "react-icons/fa";

const iconMap = { FaMobile, FaPaintBrush, FaDatabase, FaServer, FaLaptop };

export const About = () => (
  <section id="about" className="py-32 px-4 max-w-5xl mx-auto">
    <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">About Me</motion.h2>
    <div className="glass p-8 md:p-12 rounded-2xl space-y-6 text-white/70 text-lg">
      <p>{ABOUT_ME.journey}</p>
      <div><span className="text-primary font-semibold">Interests: </span>{ABOUT_ME.interests}</div>
      <div><span className="text-primary font-semibold">Career Goals: </span>{ABOUT_ME.goals}</div>
    </div>
  </section>
);

export const Skills = () => (
  <section id="skills" className="py-32 px-4 max-w-7xl mx-auto">
    <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Tech Stack & Skills</motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SKILLS.map((cat, i) => (
        <motion.div key={cat.category} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-white">{cat.category}</h3>
          <div className="space-y-4">
            {cat.items.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 text-sm"><span>{skill.name}</span><span className="text-white/50">{skill.level}%</span></div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Experience & Education</motion.h2>
      <div className="relative border-l-2 border-primary/30 ml-4 space-y-12">
        {EXPERIENCE.map((item, i) => (
          <motion.div key={`exp-${i}`} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="pl-8 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            <div className="glass p-6 rounded-xl">
              <span className="text-sm text-primary font-semibold">{item.duration}</span>
              <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
              {item.company && <p className="text-white/60 mb-2">{item.company}</p>}
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
        
        {EDUCATION.map((item, i) => (
          <motion.div key={`edu-${i}`} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="pl-8 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            <div className="glass p-6 rounded-xl">
              <span className="text-sm text-primary font-semibold">{item.duration}</span>
              <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
              <p className="text-white/60 mb-2">{item.institution}</p>
              <p className="text-white/70 text-sm">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Achievements = () => {
  if ((!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) && (!CERTIFICATIONS || CERTIFICATIONS?.length === 0)) return null;
  
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Achievements & Certifications</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {ACHIEVEMENTS?.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-6 rounded-xl flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 text-xl">🏆</div>
              <div><h3 className="font-bold text-white">{a.title}</h3><p className="text-white/60 text-sm mt-1">{a.description}</p></div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-6">
          {CERTIFICATIONS?.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-6 rounded-xl flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 text-xl">📜</div>
              <div><h3 className="font-bold text-white">{c.title}</h3><p className="text-white/60 text-sm mt-1">{c.issuer} - {c.year}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services = () => (
  <section className="py-32 px-4 max-w-7xl mx-auto">
    <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Services I Offer</motion.h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((s, i) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap] || FaMobile;
        return (
          <motion.div key={s.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-6 rounded-2xl text-center hover:border-primary/50 transition-colors group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl text-primary mb-4 group-hover:scale-110 transition-transform">
              <Icon />
            </div>
            <h3 className="font-bold text-white mb-2">{s.title}</h3>
            <p className="text-white/50 text-sm">{s.description}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export const Testimonials = () => {
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Testimonials</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-2xl relative">
            <FaQuoteLeft className="text-4xl text-primary/20 absolute top-6 right-6" />
            <p className="text-white/80 mb-6 italic relative z-10">"{t.quote}"</p>
            <div><h4 className="font-bold text-white">{t.name}</h4><p className="text-sm text-primary">{t.role}</p></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Blog = () => {
  if (!BLOGS || BLOGS.length === 0) return null;
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Latest Articles</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {BLOGS.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-48 overflow-hidden"><img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
            <div className="p-6"><span className="text-xs text-primary">{b.date}</span><h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-primary transition-colors">{b.title}</h3><p className="text-white/60 text-sm">{b.excerpt}</p></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
