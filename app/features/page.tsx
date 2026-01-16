import Footer from '../components/Footer'

const features = [
  {
    icon: '🚀',
    title: 'Schnelle Performance',
    description: 'Optimiert für Geschwindigkeit mit modernen Technologien. Ihre Webseite lädt blitzschnell und bietet ein nahtloses Nutzererlebnis.',
    gradient: 'from-pink-400 to-purple-400'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Perfekte Darstellung auf allen Geräten – vom Smartphone über Tablet bis zum Desktop. Mobile-First Ansatz garantiert.',
    gradient: 'from-purple-400 to-blue-400'
  },
  {
    icon: '🎨',
    title: 'Modernes Design',
    description: 'Zeitgemässe Ästhetik mit durchdachter Benutzerführung. Schöne Farbverläufe und animierte Elemente sorgen für visuelle Highlights.',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    icon: '🔒',
    title: 'Sicherheit',
    description: 'Höchste Sicherheitsstandards zum Schutz Ihrer Daten. Regelmässige Updates und Best Practices garantieren maximale Sicherheit.',
    gradient: 'from-pink-400 to-red-400'
  },
  {
    icon: '⚙️',
    title: 'Einfache Verwaltung',
    description: 'Intuitive Benutzeroberfläche für mühelose Content-Verwaltung. Keine technischen Kenntnisse erforderlich.',
    gradient: 'from-yellow-400 to-orange-400'
  },
  {
    icon: '♿',
    title: 'Barrierefreiheit',
    description: 'Zugänglich für alle Nutzer. Wir folgen den WCAG-Richtlinien für bestmögliche Accessibility.',
    gradient: 'from-green-400 to-emerald-400'
  },
  {
    icon: '🔍',
    title: 'SEO-Optimiert',
    description: 'Bessere Sichtbarkeit in Suchmaschinen durch technische und inhaltliche Optimierung. Strukturierte Daten und Meta-Tags inklusive.',
    gradient: 'from-indigo-400 to-purple-400'
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Unser Team steht Ihnen jederzeit zur Verfügung. Schnelle Hilfe bei Fragen oder Problemen garantiert.',
    gradient: 'from-rose-400 to-pink-400'
  },
  {
    icon: '🌍',
    title: 'Mehrsprachig',
    description: 'Unterstützung für mehrere Sprachen. Erreichen Sie ein internationales Publikum mit lokalisierten Inhalten.',
    gradient: 'from-violet-400 to-fuchsia-400'
  }
]

function FeatureCard({ feature, delay }: { feature: typeof features[0], delay: number }) {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-right`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <main className="horizontal-scroll-container">
      {/* Hero Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="text-center px-8 max-w-3xl">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white text-5xl mx-auto mb-8 shadow-xl animate-fade-in-scale">
            ✨
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6 animate-slide-in-right">
            Features
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-in-right animate-delay-100">
            Entdecken Sie die leistungsstarken Funktionen, die unsere Plattform zu etwas Besonderem machen
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-400 animate-pulse">
            <span className="text-sm">Scroll nach rechts</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </section>

      {/* Features Section 1 (3 cards) */}
      <section className="horizontal-section bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="px-8 py-12 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-in-right">
            Performance & Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section 2 (3 cards) */}
      <section className="horizontal-section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="px-8 py-12 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-in-right">
            Sicherheit & Verwaltung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section 3 (3 cards) */}
      <section className="horizontal-section bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="px-8 py-12 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-in-right">
            Support & Erreichbarkeit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(6, 9).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="text-center px-8 max-w-2xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 animate-fade-in-scale">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-right">
              Überzeugt?
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-slide-in-right animate-delay-100">
              Erleben Sie all diese Features und mehr. Starten Sie noch heute mit Ihrer 
              eigenen modernen Webpräsenz.
            </p>
            <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold px-10 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105 text-lg animate-slide-in-right animate-delay-200">
              Jetzt starten
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
