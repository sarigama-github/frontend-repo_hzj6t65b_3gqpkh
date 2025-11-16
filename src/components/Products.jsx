import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Products({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/products`)
        if (!res.ok) throw new Error('Virhe ladattaessa tuotteita')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="py-12 text-center text-gray-600">Ladataan tuotteita...</div>
  if (error) return <div className="py-12 text-center text-red-600">{error}</div>

  return (
    <section id="tuotteet" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Valikoima</h2>
          <p className="text-sm text-gray-600">10 tuotteesta kaikki mitä tarvitset</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.slug} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
