import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Hallo Züri',
  description: 'Willkommen auf unserer modernen Webseite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <Navigation />
        {/* Content mit Platz für Sidebar-Navigation (md:ml-20) */}
        <div className="md:ml-20 mt-16 md:mt-0 h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
