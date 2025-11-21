import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Testimonials />
      <Contact />
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Skyline Estates. All rights reserved.</p>
          <div className="text-sm text-blue-200/70">Crafted for premium real estate brands.</div>
        </div>
      </footer>
    </div>
  )
}

export default App