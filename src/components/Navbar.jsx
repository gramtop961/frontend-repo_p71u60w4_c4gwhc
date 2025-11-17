import { Menu, Music, Search } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white">
            <Music size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Muse</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700">
            <Search size={16} />
            <span className="text-sm">Search</span>
          </button>
          <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">Status</a>
          <a href="#tracks" className="text-sm text-gray-600 hover:text-gray-900">Tracks</a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
