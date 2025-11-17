import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrackList from './components/TrackList'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <TrackList />
      <Footer />
    </div>
  )
}

export default App
