import { useEffect, useState } from 'react'

function Accueil() {
  const [etoiles, setEtoiles] = useState([])
  const [filantes, setFilantes] = useState([])

  // Génère 150 étoiles fixes aléatoires
  useEffect(() => {
    const nouvellesEtoiles = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      taille: Math.random() * 2 + 1,
      duree: Math.random() * 3 + 2,
    }))
    setEtoiles(nouvellesEtoiles)
  }, [])

  // Génère 8 étoiles filantes aléatoires
  useEffect(() => {
    const nouvellesFilantes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 100,
      duree: Math.random() * 3 + 2,
      delai: Math.random() * 8,
    }))
    setFilantes(nouvellesFilantes)
  }, [])

  return (
    <section id="accueil" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      {/* FOND GRADIENT SYNTHWAVE */}
      <div className="absolute inset-0 -z-10 bg-[#1a1033]" /> 
           {/* ANIMATIONS CSS */}
      <style>{`
  @keyframes scintiller {
    0%   { opacity: 0.2; transform: scale(1); }
    100% { opacity: 1;   transform: scale(1.4); }
  }
  @keyframes filer {
    0%   { transform: translateX(0) translateY(0); opacity: 1; }
    100% { transform: translateX(300px) translateY(300px); opacity: 0; }
  }
  @keyframes entree {
    0%   { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`}</style>

      {/* ÉTOILES FIXES */}
      {etoiles.map(etoile => (
        <div
          key={etoile.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${etoile.top}%`,
            left: `${etoile.left}%`,
            width: `${etoile.taille}px`,
            height: `${etoile.taille}px`,
            animation: `scintiller ${etoile.duree}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* ÉTOILES FILANTES */}
      {filantes.map(filante => (
        <div
          key={filante.id}
          className="absolute h-px bg-white"
          style={{
            top: `${filante.top}%`,
            left: `${filante.left}%`,
            width: '100px',
            animation: `filer ${filante.duree}s ease-in ${filante.delai}s infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* CONTENU PRINCIPAL */}
      <div className="text-center z-10 px-4 space-y-6">

        {/* NOM */}
        <h1
  className="text-5xl md:text-7xl font-extrabold text-white"
  style={{
    fontFamily: 'Orbitron, sans-serif',
    animation: 'entree 1s ease-out forwards',
  }}
>
          BENISSAN <span className="text-secondary">Cornelio</span>
        </h1>

        {/* TITRE */}
        <p className="text-xl md:text-2xl text-blue-300 font-medium tracking-widest">
          Étudiant en Bachelor Développement Web
        </p>

        {/* PHRASE D'ACCROCHE */}
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Construisons l'avenir ligne par ligne
        </p>

        {/* BOUTONS */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a href="/#projets" className="btn btn-primary btn-lg">
            Mes Projets
          </a>
          <a href="/#contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-purple-900">
            Me Contacter
          </a>
        </div>

      </div>
      {/* DÉGRADÉ DE TRANSITION vers la section suivante */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10"
  style={{
    background: 'linear-gradient(to bottom, transparent, #1a1033)'
  }}
/>

    </section>
  )
}

export default Accueil