import Footer from '../components/Footer'

const values = [
  {
    icon: '⚡',
    title: 'Innovation',
    description: 'Wir bleiben am Puls der Zeit und setzen auf zukunftsorientierte Technologien.',
    gradient: 'from-pink-400 to-purple-400'
  },
  {
    icon: '✨',
    title: 'Qualität',
    description: 'Exzellenz in jedem Detail – das ist unser Anspruch an uns selbst.',
    gradient: 'from-purple-400 to-blue-400'
  },
  {
    icon: '🤝',
    title: 'Partnerschaft',
    description: 'Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als Partner.',
    gradient: 'from-pink-400 to-red-400'
  },
  {
    icon: '🌱',
    title: 'Nachhaltigkeit',
    description: 'Verantwortungsvolles Handeln für eine bessere Zukunft ist uns wichtig.',
    gradient: 'from-blue-400 to-cyan-400'
  }
]

export default function UeberUns() {
  return (
    <main className="horizontal-scroll-container">
      {/* Hero Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="text-center px-8 max-w-3xl">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white text-5xl mx-auto mb-8 shadow-xl animate-fade-in-scale">
            👥
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6 animate-slide-in-right">
            Über uns
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-in-right animate-delay-100">
            Lernen Sie das Team hinter Hallo Züri kennen
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-400 animate-pulse">
            <span className="text-sm">Scroll nach rechts</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </section>

      {/* Wer wir sind Section */}
      <section className="horizontal-section bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="px-8 max-w-3xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 animate-fade-in-scale">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-in-right">
              Wer wir sind
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg animate-slide-in-right animate-delay-100">
              Willkommen bei Hallo Züri! Wir sind ein dynamisches Team aus Zürich, das sich 
              leidenschaftlich für innovative digitale Lösungen einsetzt. Mit unserem Sitz im 
              Herzen der Limmatstadt verbinden wir lokale Expertise mit globalen Standards.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg animate-slide-in-right animate-delay-200">
              Seit unserer Gründung haben wir es uns zur Aufgabe gemacht, moderne und 
              benutzerfreundliche Weblösungen zu schaffen, die sowohl funktional als auch 
              ästhetisch überzeugen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="horizontal-section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="px-8 max-w-3xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 animate-fade-in-scale">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-3xl mb-6 animate-slide-in-right">
              🎯
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-in-right animate-delay-100">
              Unsere Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg animate-slide-in-right animate-delay-200">
              Wir glauben daran, dass exzellente digitale Erlebnisse für jeden zugänglich sein 
              sollten. Unsere Mission ist es, Technologie zu nutzen, um die Lebensqualität zu 
              verbessern und Menschen miteinander zu verbinden. Dabei setzen wir auf modernste 
              Technologien und zeitlose Designprinzipien.
            </p>
          </div>
        </div>
      </section>

      {/* Werte Section */}
      <section className="horizontal-section bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center animate-slide-in-right">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="horizontal-section bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="px-8 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-slide-in-right">
            Unser Team
          </h2>
          
          {/* Team Member Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 animate-fade-in-scale">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white text-5xl mx-auto mb-6 shadow-lg">
              👩‍💼
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-slide-in-right animate-delay-100">
              Lia Straub
            </h3>
            <p className="text-pink-500 font-medium mb-4 animate-slide-in-right animate-delay-200">
              Geschäftsführerin
            </p>
            <p className="text-gray-600 leading-relaxed animate-slide-in-right animate-delay-300">
              Hinter Hallo Züri steht ein diverses Team aus kreativen Köpfen, erfahrenen 
              Entwicklern und engagierten Projektmanagern. Gemeinsam bringen wir jahrelange 
              Erfahrung in Webentwicklung, Design und digitaler Strategie mit.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
