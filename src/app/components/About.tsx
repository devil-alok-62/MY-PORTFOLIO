"use client";
import React from "react";
import { EXPERIENCES } from "../../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Experience Timeline */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 font-heading">
              The Journey So Far
            </h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-indigo-500/30"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-indigo-500"></div>
                  <span className="text-indigo-400 text-sm font-bold mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Philosophy */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Skills */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Next.js",
                  "Node.js",
                  "D3.js",
                  "Framer Motion",
                  "Gemini API",
                  "PostgreSQL",
                  "Docker",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "I believe that code is a medium for art. Every pixel should
                have a purpose, and every interaction should feel natural and
                intuitive. Efficiency is not just about speed, but about making
                the user's life simpler."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
