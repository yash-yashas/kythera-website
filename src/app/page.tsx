import Link from "next/link";
import { ArrowRight, Code, Terminal, Cloud, Camera, GraduationCap, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    { title: "Website Development + Maintenance Package", description: "Business website development, setup, and monthly maintenance.", icon: <Code /> },
    { title: "Billing / Inventory Software for Small Shops", description: "Custom billing and inventory management systems tailored for retail.", icon: <Terminal /> },
    { title: "Internship + Training Program", description: "Real-time projects, mentorship, and practical industry experience.", icon: <GraduationCap /> },
    { title: "Digital Services for Local Businesses", description: "Branding, social media management, shoots, and promotions.", icon: <Camera /> },
    { title: "Cloud Services", description: "Website hosting, server setup, backups, and infrastructure monitoring.", icon: <Cloud /> },
  ];

  const benefits = [
    "Cost-effective development",
    "Modern technology stack",
    "Cloud and automation expertise",
    "Long-term maintenance and support",
    "Internship-based development team",
    "Remote and international project support",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-950"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up">
          Kythera<span className="text-sky-500">Systems</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto">
          Software, Cloud, Digital & Business Solutions
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help businesses grow using technology by building software, websites, automation systems, and cloud solutions. Partner with us for a digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all">
            Our Services
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-slate-800 border border-slate-700 rounded-lg shadow-sm hover:bg-slate-700 hover:border-slate-600 transition-all">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Providing end-to-end technology solutions to scale your business operations efficiently.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Kythera Systems?</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We combine technical excellence with business acumen to deliver solutions that drive real results. Our dynamic team architecture ensures innovation and scalability at every step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-sky-500/10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Internship Program</h3>
              <p className="text-slate-300 mb-6 relative z-10">
                Are you a student looking to start your career in tech? We offer hands-on internship programs focusing on Web Development, Digital Marketing, Data Analytics, Cyber Security, and Artificial Intelligence.
              </p>
              <Link href="/internships" className="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold transition-colors relative z-10">
                Explore Internships <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-slate-950 to-slate-950"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Let us build your software and digital infrastructure.
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
          Ready to transform your business with cutting-edge technology? Get in touch with our team today map out your success.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-lg shadow-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-all">
          Contact Kythera Systems
        </Link>
      </section>
    </div>
  );
}
