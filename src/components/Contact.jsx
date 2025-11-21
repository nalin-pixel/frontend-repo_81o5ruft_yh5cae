import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-8 backdrop-blur-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-semibold text-white">Let's move your next listing</h3>
              <p className="mt-3 text-blue-100/80">Tell us about the property and goals. We'll share a tailored plan within 24 hours.</p>
              <ul className="mt-6 space-y-2 text-blue-100/70 text-sm list-disc list-inside">
                <li>Strategy call to align on audience and positioning</li>
                <li>Cinematic creative direction and production plan</li>
                <li>Performance roadmap with budget tiers</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
              <input placeholder="Company / Brokerage" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <textarea required rows="4" placeholder="Tell us about the property" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <div className="flex items-center justify-between gap-4">
                <button disabled={status!=="idle"} className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-sm hover:shadow-md disabled:opacity-60">
                  {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Request proposal"}
                </button>
                <p className="text-xs text-blue-200/70">No spam. We'll just reply with a proposal.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
