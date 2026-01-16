export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Hallo Züri!
        </h1>
        <p 
          className="text-gray-600 font-black"
          style={{
            fontSize: '50px',
            lineHeight: '104px',
            letterSpacing: '3px',
            verticalAlign: 'middle',
            borderColor: 'transparent',
            borderStyle: 'none',
            borderImage: 'none',
            background: 'unset',
            backgroundColor: 'unset'
          }}
        >
          Willkommen auf meiner Webseite
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </main>
  )
}
