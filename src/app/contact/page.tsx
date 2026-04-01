"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "62984e68-cd1f-4edf-afcc-046bc59eb3f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Contact Us</h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Ready to kickstart your next software project? Reach out to our team via email, phone, or simply drop us a message below.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <div className="w-full lg:w-5/12 space-y-8 flex flex-col h-full items-start justify-start">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="text-sky-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Office Location</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Kythera Systems <br />
                    1st floor timesquare,mallikatte,kadri,Mangalore,Karnataka, India 560001 <br />
                    <em>(Global Remote Operations)</em>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-slate-400 leading-relaxed">+91 8088885756</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am to 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <p className="text-slate-400 leading-relaxed">Info@kytherasystems.com</p>
                  <p className="text-slate-500 text-sm mt-1">24/7 online support</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800">
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Medium'].map((social) => (
                  <div key={social} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium hover:bg-slate-700 cursor-pointer transition-colors">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl h-full shadow-xl shadow-black/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl"></div>

            <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h2>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {/* Optional: Add subject directly or use hidden input */}
              <input type="hidden" name="subject" value="New Inquiry from Kythera Systems Website" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name <span className="text-rose-400">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company Name (Optional)</label>
                  <input type="text" id="company" name="company" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address <span className="text-rose-400">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Required</label>
                <select id="service" name="service" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors focus:text-white text-slate-300">
                  <option value="Website Development">Website Development</option>
                  <option value="Billing / Inventory Software">Billing / Inventory Software</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="Internship Query">Internship Query</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message <span className="text-rose-400">*</span></label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  type="submit" 
                  disabled={status === "Sending..."}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-lg outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-all disabled:opacity-75"
                >
                  {status === "Sending..." ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                </button>
                {status && status !== "Sending..." && (
                  <span className={`text-sm font-medium ${status.includes("successfully") ? "text-emerald-400" : "text-rose-400"}`}>
                    {status}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-96 mt-16 bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden flex items-center justify-center group">
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Mangalore,India&zoom=12&size=1000x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x9ca3af&style=feature:all|element:labels.text.stroke|color:0x111827&style=feature:water|element:geometry|color:0x1e293b&style=feature:landscape|element:geometry|color:0x0f172a')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500"></div>
        <div className="relative z-10 bg-slate-900/80 backdrop-blur border border-slate-700 px-6 py-4 rounded-xl flex items-center">
          <MapPin className="text-sky-500 w-6 h-6 mr-3" />
          <span className="text-white font-medium">Kythera Systems HQ, Mangalore</span>
        </div>
      </div>
    </div>
  );
}
