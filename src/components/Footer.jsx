function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Muse — A minimal music demo</p>
        <div className="flex items-center gap-4">
          <a href="/test" className="hover:text-gray-900">Status</a>
          <a href="#tracks" className="hover:text-gray-900">Tracks</a>
          <a href="#top" className="hover:text-gray-900">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
