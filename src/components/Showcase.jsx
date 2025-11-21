function Showcase() {
  const items = [
    {
      title: "The Crown Penthouse",
      tag: "NYC · Film + Photo",
      img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Azure Residences",
      tag: "Dubai · Branding + CGI",
      img: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Bayfront Lofts",
      tag: "Miami · Social + Landing",
      img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected work</h2>
          <p className="mt-3 text-blue-100/80">Launches that moved inventory and built desire.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={it.img} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs text-blue-200/70">{it.tag}</div>
                <div className="mt-1 text-white font-medium">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
