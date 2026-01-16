import Footer from '../components/Footer'

export default function Impressum() {
  return (
    <main className="horizontal-scroll-container">
      {/* Hero Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="text-center px-8 max-w-3xl">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white text-5xl mx-auto mb-8 shadow-xl animate-fade-in-scale">
            📋
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6 animate-slide-in-right">
            Impressum
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-in-right animate-delay-100">
            Rechtliche Informationen und Kontaktdaten
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-400 animate-pulse">
            <span className="text-sm">Scroll nach rechts</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </section>

      {/* Kontakt & Angaben Section */}
      <section className="horizontal-section bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Angaben */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Angaben gemäss § 5 TMG</h2>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold text-lg">Hallo Züri</p>
                <p>Musterstrasse 123</p>
                <p>8000 Zürich</p>
                <p>Schweiz</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontakt</h2>
              <div className="text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-pink-500">📞</span>
                  +41 44 123 45 67
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-pink-500">✉️</span>
                  info@hallo-zueri.ch
                </p>
              </div>
            </div>

            {/* Vertretung */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vertretungsberechtigte Person</h2>
              <p className="text-gray-700">Lia Straub, Geschäftsführerin</p>
            </div>

            {/* Handelsregister */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Handelsregister</h2>
              <div className="text-gray-700 space-y-2">
                <p>Registergericht: Handelsregister Zürich</p>
                <p>Registernummer: CHE-123.456.789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rechtliches Section */}
      <section className="horizontal-section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-in-right">
            Rechtliche Hinweise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Umsatzsteuer */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Umsatzsteuer-ID</h3>
              <p className="text-gray-700 text-sm">
                Umsatzsteuer-Identifikationsnummer gemäss §27 a Umsatzsteuergesetz: CHE-123.456.789 MWST
              </p>
            </div>

            {/* Haftung Inhalte */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Haftung für Inhalte</h3>
              <p className="text-gray-700 text-sm">
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>

            {/* Haftung Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Haftung für Links</h3>
              <p className="text-gray-700 text-sm">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-slide-in-right animate-delay-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Urheberrecht</h3>
              <p className="text-gray-700 text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
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
