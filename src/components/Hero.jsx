import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Luxury Real Estate Marketing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
            Elevate your listings with cinematic visuals and data‑driven campaigns
          </h1>
          
          <p className="mt-5 text-lg text-blue-100/90 max-w-2xl">
            We help premium agencies and developers sell faster with brand systems, 3D renders, lifestyle video, and targeted lead funnels.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-sm hover:shadow-md transition-all">
              Get proposal
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white px-6 py-3 font-medium hover:bg-white/10">
              View work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-blue-100/70 text-sm">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full border border-white/20" />
              <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full border border-white/20" />
              <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full border border-white/20" />
            </div>
            <p>Trusted by 120+ listings across NYC, Miami, and Dubai</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
