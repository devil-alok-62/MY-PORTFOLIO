"use client";
import React from "react";
import { CONTACT_INFO } from "./../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden border-t border-white/5 glass">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/logo.JPG" alt="" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tighter">
                DEV PORTFOLIO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the next generation of digital experiences with modern
              web technologies and AI integration.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm block"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm block"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Remote / Globally Available
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Socials
            </h4>
            <div className="flex gap-4">
              {[
                {
                  name: "GitHub",
                  href: CONTACT_INFO.github,
                  svg: (
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: CONTACT_INFO.linkedin,
                  svg: (
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: CONTACT_INFO.instagram,
                  svg: (
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.981-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.2-4.353-2.612-6.78-6.981-6.981C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 text-center md:text-left">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} All rights reserved.
            <span className="mx-2 hidden md:inline">|</span>
            <span className="text-gray-400">Designed with passion.</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
