import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      title: "Email Address",
      value: "dhirajnimje@somaiya.edu",
      subText: "Official Academic Email",
      href: "mailto:dhirajnimje@somaiya.edu",
      icon: Mail,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Phone Number",
      value: "+91 8454958714",
      subText: "Direct Call & WhatsApp",
      href: "tel:+918454958714",
      icon: Phone,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Location",
      value: "Kalyan, Maharashtra, India",
      subText: "Mumbai Metropolitan Region",
      href: null,
      icon: MapPin,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "LinkedIn Profile",
      value: "dhiraj-nimje-bb822139b",
      subText: "Professional Network",
      href: "https://www.linkedin.com/in/dhiraj-nimje-bb822139b",
      icon: LinkedinIcon,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect & Build Together
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Open for AI/ML engineering roles, research opportunities, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const CardWrapper = card.href ? 'a' : 'div';
              return (
                <CardWrapper
                  key={idx}
                  href={card.href || undefined}
                  target={card.href?.startsWith('http') ? '_blank' : undefined}
                  rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 ${
                    card.href ? 'hover:border-blue-300 group' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      {card.title}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors">
                      {card.value}
                    </h4>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {card.subText}
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-slate-600 text-sm mb-6">
              Have an opportunity or question? Feel free to drop a message below.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-in fade-in">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm text-slate-800 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
