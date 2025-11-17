import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-100">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-40">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-black/10 text-xs text-gray-700 mb-4 pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live 3D: Apple Headphones
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Sound that moves with you
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Explore and queue tracks while interacting with a sleek 3D object. Modern, minimal, and delightful.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#tracks" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Browse Tracks</a>
            <a href="/test" className="px-4 py-2 rounded-lg bg-white/70 backdrop-blur border border-black/10 text-gray-800 hover:bg-white transition-colors">Check Status</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
