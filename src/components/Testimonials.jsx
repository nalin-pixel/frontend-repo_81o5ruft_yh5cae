function Testimonials() {
  const quotes = [
    {
      quote:
        "Our DOM went from 62 to 24 days. The film and paid campaign generated 214 qualified leads in two weeks.",
      author: "Amelia Reyes, Sales Director",
      avatar: "https://i.pravatar.cc/80?u=1",
    },
    {
      quote:
        "Branding that actually sells. The brochure and CGI helped us pre‑lease 70% before the model residence opened.",
      author: "Marco Leone, Developer",
      avatar: "https://i.pravatar.cc/80?u=2",
    },
    {
      quote:
        "The team is strategic and fast. Weekly dashboards made decisions easy and kept the board aligned.",
      author: "Sofia Park, Brokerage Partner",
      avatar: "https://i.pravatar.cc/80?u=3",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Results our clients feel</h2>
          <p className="mt-3 text-blue-100/80">Outcomes, not vanity metrics.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <figure key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <blockquote className="text-blue-100/90">“{q.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={q.avatar} className="h-9 w-9 rounded-full border border-white/20" />
                <span className="text-sm text-blue-200/80">{q.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
