"use client";

import Link from "next/link";
import { GraduationCap, Award, Briefcase, Star, ArrowRight } from "lucide-react";

export default function InternshipPage() {
  const tracks = [
    { name: "Web Development" },
    { name: "Digital Marketing" },
    { name: "Data Analytics / Business Analytics" },
    { name: "Cyber Security" },
    { name: "Artificial Intelligence" },
  ];

  const benefits = [
    "Students will work on real-time projects",
    "Students will gain practical industry experience",
    "Mentorship and guidance will be provided",
    "Internship certificate will be provided",
    "Opportunity to work on company and client projects",
    "Best interns may get opportunity to continue with the company"
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-16 max-w-3xl">
        <GraduationCap className="h-16 w-16 mx-auto mb-6 text-sky-400" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Launch Your Career</h1>
        <p className="text-2xl font-semibold text-sky-400 mb-8 italic">
          "Learn. Work on Real Projects. Gain Industry Experience with Kythera Systems."
        </p>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          Our Internship Program is designed for ambitious individuals looking to gain hands-on experience by directly contributing to active professional environments.
        </p>
        <Link href="#application-form" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-sky-600 rounded-lg cursor-pointer hover:bg-sky-500 transition-colors">
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="w-full mb-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Program Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start group hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-sky-900/30 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-sky-500/20">
                <Star className="h-5 w-5 text-sky-400" />
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mb-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Available Internship Domains</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tracks.map((track, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 px-6 py-4 rounded-xl flex items-center shadow-sm">
              <Briefcase className="h-5 w-5 text-sky-400 mr-3" />
              <span className="text-lg font-bold text-white">{track.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="w-full max-w-2xl bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Apply for Internship</h2>
        <p className="text-slate-400 mb-8 text-center">Fill out the form below to initiate your application process.</p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
              <input type="text" id="firstName" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="John" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
              <input type="text" id="lastName" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Doe" />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">University / College Email</label>
            <input type="email" id="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="john@university.edu" />
          </div>

          <div>
            <label htmlFor="track" className="block text-sm font-medium text-slate-300 mb-2">Preferred Domain</label>
            <select id="track" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors">
              <option value="">Select a domain...</option>
              {tracks.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-slate-300 mb-2">Why do you want to join Kythera Systems?</label>
            <textarea id="about" rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Tell us about yourself and your goals..."></textarea>
          </div>

          <button type="submit" onClick={() => alert("Application Submitted! (Mock)")} className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
