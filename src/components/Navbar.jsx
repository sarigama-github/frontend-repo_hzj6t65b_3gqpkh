import { ShoppingCart } from 'lucide-react'

export default function Navbar({ cartCount }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">Helioskin</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#tuotteet" className="hover:text-black transition-colors">Tuotteet</a>
          <a href="#tarina" className="hover:text-black transition-colors">Tarina</a>
          <a href="#yhteys" className="hover:text-black transition-colors">Yhteys</a>
        </nav>
        <a href="#cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </a>
      </div>
    </header>
  )
}
