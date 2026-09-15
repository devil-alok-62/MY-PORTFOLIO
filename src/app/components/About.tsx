"use client";
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES, SKILLS } from "../../constants";

const SKILL_GROUPS = [
  { title: "Frontend", key: "frontend" as const },
  { title: "Backend", key: "backend" as const },
  { title: "Tools", key: "tools" as const },
];

const STATS = [
  { value: "3+", label: "Years Coding" },
  { value: `${SKILLS.length}`, label: "Technologies" },
  { value: `${EXPERIENCES.length}`, label: "Roles" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen py-28 overflow-hidden">
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-5"
            >
              About Me
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4"
            >
              Turning ideas into{" "}
              <span className="text-gradient bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                digital products
              </span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-gray-400 leading-relaxed"
            >
              Full-Stack Developer building seamless digital experiences with
              powerful backends, intuitive interfaces, and scalable solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-2xl px-5 py-4 min-w-[100px] text-center hover:border-indigo-500/30 transition-colors"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Philosophy */}
          <motion.div
            className="lg:col-span-5 glass rounded-3xl p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="absolute top-4 right-6 text-7xl font-serif text-indigo-500/10 leading-none select-none"
              animate={{ opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "
            </motion.div>
            <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-4">
              Philosophy
            </p>
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              I believe code is a medium for art. Every pixel should have
              purpose, every interaction should feel natural — efficiency means
              making the user&apos;s life simpler.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </motion.div>

          {/* Experience */}
          <motion.div
            className="lg:col-span-7 glass rounded-3xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-6">
              Experience
            </p>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: 6, borderColor: "rgba(99,102,241,0.3)" }}
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/8 transition-colors"
                >
                  <motion.div
                    className="shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h3 className="font-bold text-white">{exp.role}</h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          {SKILL_GROUPS.map((group, groupIndex) => {
            const skills = SKILLS.filter((s) => s.category === group.key);
            return (
              <motion.div
                key={group.key}
                className="lg:col-span-4 glass rounded-3xl p-6 hover:border-indigo-500/20 transition-colors"
                custom={groupIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-5">
                  {group.title}
                </p>
                <div className="space-y-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: skillIndex * 0.04,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-300">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-[11px] font-bold text-indigo-400"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + skillIndex * 0.04 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.15 + skillIndex * 0.05,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
