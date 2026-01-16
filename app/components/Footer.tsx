import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="horizontal-section bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex-shrink-0">
      <div className="h-full w-full flex flex-col items-center justify-center px-8 py-12 max-w-lg mx-auto">
        {/* Logo */}
        <div className="mb-8 text-center animate-slide-in-right">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg">
            HZ
          </div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-2">
            Hallo Züri
          </h3>
          <p className="text-gray-600">
            Ihre moderne Webseite für Zürich
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-8 text-center animate-slide-in-right animate-delay-100">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">Navigation</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors px-3 py-1 rounded-full hover:bg-white/50">
              Home
            </Link>
            <Link href="/ueber-uns" className="text-gray-600 hover:text-pink-500 transition-colors px-3 py-1 rounded-full hover:bg-white/50">
              Über uns
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-pink-500 transition-colors px-3 py-1 rounded-full hover:bg-white/50">
              Features
            </Link>
            <Link href="/impressum" className="text-gray-600 hover:text-pink-500 transition-colors px-3 py-1 rounded-full hover:bg-white/50">
              Impressum
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 text-center animate-slide-in-right animate-delay-200">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">Kontakt</h4>
          <div className="space-y-2 text-gray-600">
            <p>info@hallo-zueri.ch</p>
            <p>+41 44 123 45 67</p>
            <p>Musterstrasse 123, 8000 Zürich</p>
          </div>
        </div>

        {/* Social / Decorative */}
        <div className="flex gap-3 mb-8 animate-slide-in-right animate-delay-300">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
            ✉
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
            📍
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
            📞
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-200/50 pt-6 w-full animate-slide-in-right animate-delay-400">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hallo Züri
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Alle Rechte vorbehalten
          </p>
        </div>

        {/* Scroll hint */}
        <div className="mt-6 text-gray-400 text-sm flex items-center gap-2 animate-pulse">
          <span>←</span>
          <span>Zurück scrollen</span>
        </div>
      </div>
    </footer>
  )
}
