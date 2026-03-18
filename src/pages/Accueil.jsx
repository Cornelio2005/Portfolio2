import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
function Accueil() {
const [init, setInit] = useState(false)

useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine)
  }).then(() => setInit(true))
}, [])

const particlesOptions = {
  preset: 'stars',
  background: { color: { value: '#0d1117' } },
  particles: {
    number: { value: 160 },
    color: { value: '#ffffff' },
    size: { value: { min: 0.5, max: 2 } },
    opacity: { value: { min: 0.3, max: 1 }, animation: { enable: true, speed: 1 } },
    move: { enable: true, speed: 0.3, direction: 'none', random: true },
  },
}
 
return (
  <section id="accueil" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

    {/* FOND TSPARTICLES */}
    {init && (
      <Particles
        className="absolute inset-0 -z-10"
        options={particlesOptions}
      />
    )}

    {/* CONTENU PRINCIPAL */}
    <motion.div
      className="text-center z-10 px-4 space-y-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* NOM */}
      <h1
        className="text-5xl md:text-7xl font-extrabold text-white"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        BENISSAN <span className="text-primary">Cornelio</span>
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

         <a href="/cv" className="btn  btn-primary btn-lg">
           Mon CV
         </a>
      </div>
       
      
    </motion.div>
      
         

    {/* DÉGRADÉ DE TRANSITION */}
    <div className="absolute bottom-0 left-0 w-full h-32 z-10"
  style={{ background: 'linear-gradient(to bottom, transparent, #0d1117)' }}
/>

  </section>
)
}

export default Accueil