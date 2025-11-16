export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="aspect-square bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg leading-snug">{product.name}</h3>
          <span className="font-semibold">{product.price.toFixed(2)} €</span>
        </div>
        {product.size_ml && (
          <p className="text-xs text-gray-500 mt-1">{product.size_ml} ml</p>
        )}
        <p className="text-sm text-gray-600 line-clamp-2 mt-2">{product.description}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition"
        >
          Lisää koriin
        </button>
      </div>
    </div>
  )
}
