function CV() {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 max-w-5xl mx-auto">
    {/* EN-TÊTE */}
<div className="card bg-base-200 rounded-2xl p-8 mb-6">
  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
    
    {/* INFOS GAUCHE */}
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white">
        Cornelio <span className="text-primary">BENISSAN</span>
      </h1>
      <p className="text-primary text-lg mt-2 font-medium">
        Stagiaire en Développement Informatique
      </p>
    </div>

    {/* BOUTON DROITE */}
    <a href="/cv.pdf" download className="btn btn-outline btn-primary whitespace-nowrap">
      Télécharger CV →
    </a>

  </div>
</div>

    </div>
  )
}

export default CV