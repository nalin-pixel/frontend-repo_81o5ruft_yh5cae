import { Camera, Palette, LineChart, Share2, Video, Layers } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Cinematic Photography",
    desc: "Magazine‑grade shoots, golden‑hour exteriors, and lifestyle storytelling.",
  },
  {
    icon: Video,
    title: "Property Films",
    desc: "Script, shoot, and edit emotive videos that convert interest to showings.",
  },
  {
    icon: Layers,
    title: "3D/CGI & Virtual Staging",
    desc: "Photorealistic renders, floor plans, and interactive tours for off‑plan sales.",
  },
  {
    icon: Palette,
    title: "Brand & Identity",
    desc: "Naming, logo systems, brochures, and launch collateral for new developments.",
  },
  {
    icon: Share2,
    title: "Paid Social Funnels",
    desc: "Audience targeting, landing pages, and always‑on optimization.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    desc: "Lead attribution dashboards and weekly performance insights.",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_60%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-blue-100/80">Full‑service creative and growth for premium property brands.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-slate-900/80">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 text-cyan-300 group-hover:from-blue-500/30 group-hover:to-cyan-400/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="text-sm text-blue-100/70 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
