export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Premium ihonhoitoa miehille
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Helioskin on suomalainen premium-brändi, joka tekee rutiineista yksinkertaisia ja tehokkaita. Vain 10 huolella valittua tuotetta.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#tuotteet" className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition">Osta nyt</a>
            <a href="#tarina" className="px-5 py-3 rounded-lg border border-black/10 hover:bg-black/5 transition">Lue tarinamme</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
        </div>
      </div>
    </section>
  )
}
