import { Code, Terminal, Camera, GraduationCap, Cloud } from "lucide-react";

export const metadata = {
  title: "Our Services | Kythera Systems",
  description: "Explore our comprehensive technology services including website development, billing software, and digital services.",
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      title: "Website Development + Maintenance Package",
      description: "Get a professional business website built, deployed, and continuously managed by our expert team. We handle the heavy lifting so you can focus on your business.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Business website development",
        "Website setup and deployment",
        "Monthly maintenance and updates",
        "Backup and security",
        "Technical support",
        "Performance monitoring"
      ],
    },
    {
      title: "Billing / Inventory Software for Small Shops",
      description: "Streamline your retail operations with our custom software solutions designed specifically for small businesses to track sales, manage inventory, and maintain customer records smoothly.",
      icon: <Terminal className="w-8 h-8" />,
      features: [
        "Billing software for retail shops",
        "Inventory management system",
        "Sales and reports",
        "Customer records",
        "Custom software solutions for small businesses"
      ],
    },
    {
      title: "Internship + Training Program",
      description: "Empowering the next generation of tech talent through immersive training programs that bridge the gap between academic theory and practical industry demands.",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Internship programs for students",
        "Training and mentorship",
        "Opportunity to work on real-time projects",
        "Industry exposure and practical learning",
        "Internship certificate and experience"
      ],
    },
    {
      title: "Digital Services for Local Businesses",
      description: "Elevate your local brand presence digitally. Our comprehensive suite covers everything from social media management to professional photo and video production.",
      icon: <Camera className="w-8 h-8" />,
      features: [
        "Instagram page management",
        "Poster and content creation",
        "Reels and short video content",
        "Photo and video shoots",
        "Advertisement and promotions",
        "Branding and digital presence for local businesses"
      ],
    },
    {
      title: "Cloud Services",
      description: "Robust, scalable, and secure cloud infrastructure setup built to support websites and applications of all sizes with maximum uptime constraints.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Website hosting",
        "Server setup",
        "Cloud deployment",
        "Backup systems",
        "Monitoring and maintenance",
        "Infrastructure setup"
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Our Services</h1>
        <p className="max-w-3xl mx-auto text-xl text-slate-400">
          Transforming business challenges into technical achievements. Explore our specialized services built explicitly for scale and reliability.
        </p>
      </div>

      <div className="space-y-24">
        {serviceDetails.map((service, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 mb-6">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center text-slate-300 bg-slate-800/50 py-3 px-4 rounded-lg border border-slate-800">
                    <div className="w-2 h-2 flex-shrink-0 rounded-full bg-sky-500 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden flex items-center justify-center min-h-[300px]">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-transparent blur-3xl"></div>
               <div className="relative text-sky-400 opacity-50 transform scale-150">
                 {service.icon}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
