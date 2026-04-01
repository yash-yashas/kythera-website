"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

export default function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-sky-500/50 hover:bg-slate-800/80">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-400 mb-6 font-light leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={href} 
        className="inline-flex items-center text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors"
      >
        Learn more 
        <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
