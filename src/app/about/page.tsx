import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Kythera Systems",
  description: "Learn about Kythera Systems, our mission, vision, and the dynamic team driving technological innovation.",
};

export default function AboutPage() {
  const team = [
    { role: "CEO & Founder", dept: "Leadership", desc: "Driving the strategic vision and growth roadmap." },
    { role: "CTO", dept: "Engineering", desc: "Architecting scalable systems and overseeing project execution." },
    { role: "Senior Developers", dept: "Engineering", desc: "Building the core infrastructure and mentoring juniors." },
    { role: "Intern Core Team", dept: "Development", desc: "The engine of new ideas and dynamic agile development." }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">About Kythera Systems</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Kythera Systems is a forward-thinking technology partner dedicated to building robust digital architectures. Founded on the principles of efficiency and innovation, we transitioned from an experimental initiative to a full-fledged IT services agency.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our unique operational model integrates seasoned senior professionals with a high-energy internship program, allowing us to deliver highly scalable, cost-effective solutions while simultaneously nurturing the next generation of tech talent.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center text-center items-center shadow-lg">
              <span className="text-4xl font-bold text-sky-400 mb-2">50+</span>
              <span className="text-sm text-slate-400 font-medium">Projects Delivered</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center text-center items-center shadow-lg mt-8">
              <span className="text-4xl font-bold text-sky-400 mb-2">99%</span>
              <span className="text-sm text-slate-400 font-medium">Uptime Managed</span>
            </div>
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center text-center items-center shadow-lg -mt-8">
              <span className="text-4xl font-bold text-sky-400 mb-2">24/7</span>
              <span className="text-sm text-slate-400 font-medium">Support Operations</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center text-center items-center shadow-lg">
              <span className="text-4xl font-bold text-sky-400 mb-2">10+</span>
              <span className="text-sm text-slate-400 font-medium">Interns Mentored</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
          <Target className="h-10 w-10 text-rose-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            To provide businesses of all sizes with enterprise-grade software and automation tools, eliminating operational friction and enabling massive scale without technical debt.
          </p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
          <Lightbulb className="h-10 w-10 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-slate-400 leading-relaxed">
            To eventually transition from a premier service provider into a global SaaS powerhouse, establishing a tech ecosystem that redefines business automation and cloud infrastructure.
          </p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
          <TrendingUp className="h-10 w-10 text-emerald-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Future Goals</h2>
          <p className="text-slate-400 leading-relaxed">
            Over the next two years, we aim to launch three internal SaaS products, expand our global internship program, and build a fully automated continuous deployment platform for our clients.
          </p>
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-sky-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Team Structure</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A dynamic, lean architecture designed for high-velocity output and continuous learning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
             <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-colors">
               <div className="w-12 h-12 bg-slate-800 rounded-full mb-4 flex items-center justify-center">
                 <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">{member.dept.slice(0,3)}</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{member.role}</h3>
               <span className="inline-block px-2 py-1 bg-sky-900/30 text-sky-400 text-xs font-semibold rounded mb-3">{member.dept}</span>
               <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
