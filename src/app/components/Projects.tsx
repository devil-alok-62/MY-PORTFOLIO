"use client";
import React from "react";
import { PROJECTS } from "../../constants";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-white/5 flex items-center"
    >
      <div className="container mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Featured Works
            </h2>
            <p className="text-gray-400 max-w-md">
              Selection of projects that showcase my technical skills and design
              thinking.
            </p>
          </div>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2 group transition-all"
          >
            View All Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-white/20"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm font-semibold"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-rose-400 transition-colors flex items-center gap-2 text-sm font-semibold"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
