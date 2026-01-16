'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/ueber-uns', label: 'Über uns', icon: '👥' },
    { href: '/features', label: 'Features', icon: '✨' },
    { href: '/impressum', label: 'Impressum', icon: '📋' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Desktop Navigation - Vertikale Sidebar links */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-20 hover:w-56 bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 group">
        <div className="flex flex-col h-full py-6 px-3 w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 mb-10 px-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              HZ
            </div>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Hallo Züri
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-2 flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-pink-100 to-blue-100 text-pink-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-pink-500'
                }`}
              >
                <span className="text-xl flex-shrink-0 w-8 text-center">{link.icon}</span>
                <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-auto px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>←</span>
              <span className="whitespace-nowrap">Scroll horizontal</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
        <div className="flex items-center justify-between px-4 h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
              HZ
            </div>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              Hallo Züri
            </span>
          </Link>
          
          {/* Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-600 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-600 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-600 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-4 py-2 bg-white/95 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-pink-100 to-blue-100 text-pink-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
