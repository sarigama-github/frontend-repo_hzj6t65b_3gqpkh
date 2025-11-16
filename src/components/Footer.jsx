export default function Footer(){
  return (
    <footer id="yhteys" className="py-12 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-xl font-extrabold">Helioskin</p>
          <p className="text-sm text-gray-600 mt-2">Suomalainen premium ihonhoito miehille.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Asiakaspalvelu</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>tuki@helioskin.fi</li>
            <li>Ma–Pe 9–16</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Seuraa meitä</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Helioskin</div>
    </footer>
  )
}
