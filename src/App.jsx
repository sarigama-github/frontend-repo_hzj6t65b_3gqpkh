import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.slug === product.slug)
      if (existing) {
        return prev.map(i => i.slug === product.slug ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { slug: product.slug, name: product.name, price: product.price, qty: 1 }]
    })
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="min-h-screen bg-amber-50/30">
      <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} />
      <Hero />
      <Products onAdd={addToCart} />

      {cart.length > 0 && (
        <div className="sticky bottom-4 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white border border-black/10 shadow-xl rounded-2xl p-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                {cart.map(i => (
                  <span key={i.slug} className="mr-4">{i.name} x{i.qty}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">Yhteensä: {total.toFixed(2)} €</span>
                <a href="#checkout" className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">Kassa</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="tarina" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop')] bg-cover bg-center" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Helioskin – suomalainen ydin</h2>
            <p className="text-gray-700 mt-4">
              Rakennettu pohjoisen luonnon inspiroimana: lyhyet INCI-listat, korkea teho ja selkeä rutiini. Helioskin tarjoaa vain sen mitä tarvitset – ei mitään ylimääräistä.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
