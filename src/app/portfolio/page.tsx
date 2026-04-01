import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Portfolio & Projects | Kythera Systems",
  description: "Browse our portfolio of software development, web applications, cloud infrastructure, and automation systems.",
};

export default function PortfolioPage() {
  const categories = ["All", "Business Websites", "Software Projects", "Automation Systems", "Cloud Deployments", "Internal SaaS"];
  
  const projects = [
    { title: "Global Logistics CRM", category: "Software Projects", description: "A comprehensive CRM and inventory tracking system built for a global shipping company.", image: "bg-blue-900/40" },
    { title: "MedCare Booking Portal", category: "Business Websites", description: "Responsive appointment scheduling platform for a regional healthcare provider network.", image: "bg-emerald-900/40" },
    { title: "FinTech Data Pipeline", category: "Cloud Deployments", description: "AWS big data pipeline handling millions of transactions per second with 99.99% uptime.", image: "bg-indigo-900/40" },
    { title: "Invoice Automation Bot", category: "Automation Systems", description: "OCR-powered automated accounting bot that extracts data from PDF invoices to populate QuickBooks.", image: "bg-purple-900/40" },
    { title: "Kythera Host", category: "Internal SaaS", description: "Our upcoming high-performance, developer-focused cloud hosting platform.", image: "bg-slate-800" },
    { title: "Retail E-Commerce App", category: "Business Websites", description: "End-to-end e-commerce solution with integrated payment gateways and headless CMS.", image: "bg-sky-900/40" },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Our Work</h1>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          Explore a selection of our recent projects. From cutting-edge cloud architecture to beautiful web experiences, see how we deliver value.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat, idx) => (
          <button 
            key={idx} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-24">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className={`w-full h-48 ${project.image} relative flex items-center justify-center`}>
               {/* Decorative tech placeholder graphic instead of images */}
               <div className="absolute inset-0 bg-slate-950/20"></div>
               <div className="w-16 h-16 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                 <ExternalLink className="text-white/50 w-8 h-8" />
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                View Case Study <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-900 w-full rounded-3xl border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Have a project in mind?</h2>
          <p className="text-slate-400 max-w-xl">Whether you need an enterprise integration or a custom web app, our team is ready to scope it out.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-lg whitespace-nowrap hover:bg-slate-200 transition-colors">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
