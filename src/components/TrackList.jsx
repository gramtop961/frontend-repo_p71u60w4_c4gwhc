import { useEffect, useState } from 'react'

const placeholderCovers = [
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513863323353-6f8290a59d13?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
]

function TrackList() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/tracks`)
        if (!res.ok) throw new Error('Failed to load tracks')
        const data = await res.json()
        setTracks(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTracks()
  }, [])

  return (
    <section id="tracks" className="relative z-10 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Tracks</h2>
            <p className="text-gray-600">A starter feed you can extend</p>
          </div>
          <button
            onClick={async () => {
              try {
                const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
                const sample = {
                  title: `Demo Beat #${Math.floor(Math.random()*1000)}`,
                  artist: 'Unknown Artist',
                  audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                  cover_url: placeholderCovers[Math.floor(Math.random()*placeholderCovers.length)],
                  duration: 356
                }
                const res = await fetch(`${baseUrl}/api/tracks`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sample) })
                if (!res.ok) throw new Error('Failed to add track')
                const newTrack = await res.json()
                setTracks(prev => [newTrack, ...prev])
              } catch (e) {
                alert(e.message)
              }
            }}
            className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-black"
          >
            Add demo track
          </button>
        </div>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <div key={i} className="rounded-xl border border-black/10 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 relative">
                <img src={t.cover_url || placeholderCovers[i % placeholderCovers.length]} alt={t.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 truncate">{t.title}</h3>
                <p className="text-sm text-gray-600 truncate">{t.artist}</p>
                {t.duration ? (
                  <p className="text-xs text-gray-500 mt-1">{Math.floor(t.duration/60)}:{String(Math.floor(t.duration%60)).padStart(2,'0')}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrackList
