"use client";
import React, { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollY / height) * 100);
      setScrolled(scrollY > 50);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* 🔥 Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-white/5">
        <div
          className="h-full bg-linear-to-r from-indigo-500 to-rose-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500
        ${scrolled ? "py-4 glass border-b border-white/10" : "py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <div />
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="/logo.JPG" alt="" />
            </div>
            <span>
              DEV<span className="text-indigo-400">PORTFOLIO</span>
            </span>
          </a>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative text-sm font-semibold transition
                  ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <>
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-500" />
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-500 blur-md opacity-70" />
                    </>
                  )}
                </a>
              );
            })}
          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex items-center gap-6 md:hidden">
            {/* Only Home & About */}
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-semibold
                ${active === link.id ? "text-white" : "text-gray-400"}`}
              >
                {link.label}
              </a>
            ))}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden mt-4 mx-6 rounded-xl glass p-4 flex flex-col gap-4">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-gray-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
