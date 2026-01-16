import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="horizontal-scroll-container">
      {/* Hero Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="text-center space-y-6 px-8 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-slide-in-right">
            Hallo Züri!
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-medium animate-slide-in-right animate-delay-100">
            Willkommen auf meiner Webseite
          </p>
          <div className="flex justify-center gap-4 mt-8 animate-slide-in-right animate-delay-200">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* Scroll Hint */}
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-400 animate-pulse">
            <span className="text-sm">Scroll nach rechts</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="horizontal-section bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="text-center px-8 max-w-3xl">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white text-5xl mx-auto mb-8 shadow-xl animate-fade-in-scale">
            👋
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-in-right">
            Schön, dass Sie da sind!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 animate-slide-in-right animate-delay-100">
            Wir sind ein dynamisches Team aus Zürich, das sich leidenschaftlich für 
            innovative digitale Lösungen einsetzt. Entdecken Sie, was uns besonders macht.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in-right animate-delay-200">
            <a href="/ueber-uns" className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium hover:shadow-lg transition-shadow">
              Mehr über uns
            </a>
            <a href="/features" className="px-6 py-3 bg-white/80 text-gray-700 rounded-full font-medium hover:bg-white hover:shadow-lg transition-all border border-gray-200">
              Unsere Features
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="horizontal-section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-slide-in-right">
            Warum wir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-right">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Schnell</h3>
              <p className="text-gray-600 text-sm">
                Optimiert für beste Performance und blitzschnelle Ladezeiten.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-right animate-delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern</h3>
              <p className="text-gray-600 text-sm">
                Zeitgemässes Design mit durchdachter Benutzerführung.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-right animate-delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovativ</h3>
              <p className="text-gray-600 text-sm">
                Zukunftsorientierte Technologien für nachhaltige Lösungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
