"use client";
import React, { useState } from "react";
import { CONTACT_INFO } from "./../../constants";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    setStatus("success");
    setTimeout(() => setStatus(null), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">Get In Touch</h2>
          <p className="text-gray-400">
            Ready to start your next project? Drop me a message.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Details + Socials */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Contact Details */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Phone
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-white hover:text-rose-400 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Socials</h3>
              <div className="flex gap-4">
                {[
                  { name: "Github", href: CONTACT_INFO.github },
                  { name: "Youtube", href: CONTACT_INFO.youtube },
                  { name: "Instagram", href: CONTACT_INFO.instagram },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 glass rounded-2xl text-center text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass p-8 rounded-3xl flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Alok Kumar "
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alokraj@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold text-white transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                Send Message
              </button>

              {status === "success" && (
                <p className="text-center text-green-400 font-medium">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
