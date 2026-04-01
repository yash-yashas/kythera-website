import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-4 block">
              Kythera<span className="text-sky-400">Systems</span>
            </Link>
            <p className="text-slate-400 mb-6 font-light">
              Kythera Systems – Software, Cloud, Digital & Business Solutions
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Network</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Social</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Forum</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Billing / Inventory Software</Link></li>
              <li><Link href="/internships" className="text-slate-400 hover:text-sky-400 transition-colors">Internship + Training Program</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Digital Services</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Cloud Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-sky-400 transition-colors">Portfolio & Projects</Link></li>
              <li><Link href="/internships" className="text-slate-400 hover:text-sky-400 transition-colors">Internship Program</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Innovation Hub, Tech Park<br />Global & Remote</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sky-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sky-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400">hello@kytherasystems.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kythera Systems. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
