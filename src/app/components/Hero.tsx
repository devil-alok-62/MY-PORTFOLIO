"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open for New Projects
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Crafting Digital <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Experiences
            </span>{" "}
            With <br />
            Precision.
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            I'm a Frontend Engineer specializing in building modern, scalable,
            and AI-driven web applications that push the boundaries of what's
            possible on the web.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
            >
              Read Story
            </a>
          </div>
        </div>

        {/* Image / Profile */}
        <div className="relative hidden md:block">
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass animate-float">
            <img
              src="/hero.JPG"
              alt="Developer Profile"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
          </div>

          {/* Decorative Blurs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
