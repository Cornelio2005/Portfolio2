import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const projets = [
  {
    id: '1',
    nom: 'GymManager Pro',
    sousTitre: 'Gestion intelligente de salle de sport',
    details: 'Développée en Java avec Swing pour l\'interface graphique et MySQL pour la base de données. L\'application permet une gestion complète des abonnés avec ajout, modification, suppression et recherche. Elle inclut également un système d\'authentification et des statistiques en temps réel.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: null,
    enligne: null,
    images: [],
  },
  {
    id: '2',
    nom: 'Référentiel Centralisé Multi-SGBD',
    sousTitre: 'Centralisation et gestion de scripts SQL',
    details: 'Développée avec Laravel et PostgreSQL, cette application centralise les scripts SQL de plusieurs systèmes (PostgreSQL, MySQL, SQL Server, DB2). Elle offre un import/export de scripts, un historique des versions, une recherche avancée multicritères et une gestion des utilisateurs avec rôles.',
    technologies: ['PHP', 'Laravel', 'PostgreSQL'],
    github: null,
    enligne: null,
    images: ["/public/ceet/Capture d'écran 2025-09-02 210719.png", "/public/ceet/Capture d'écran 2025-09-02 210851.png", "/public/ceet/Capture d'écran 2025-09-02 210846.png"],
  },
  {
    id: '3',
    nom: 'TaskFlow',
    sousTitre: 'Organise tes tâches, libère ton esprit',
    details: 'TaskFlow est une application React permettant de créer, organiser et suivre ses tâches quotidiennes. Interface épurée avec Tailwind CSS, persistance des données et expérience utilisateur optimisée.',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Cornelio2005/Todo.github',
    enligne: 'https://corneliotodo.vercel.app/',
    images: [],
  },
]

function ProjetDetail() {
  const { id } = useParams()
  const projet = projets.find(p => p.id === id)
  const [indexActuel, setIndexActuel] = useState(0)

  useEffect(() => {
    if (!projet || projet.images.length === 0) return
    const interval = setInterval(() => {
      setIndexActuel(i => (i + 1) % projet.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [projet])

  if (!projet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Projet introuvable</h1>
          <Link to="/#projets" className="btn btn-primary">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-24 max-w-4xl mx-auto">

      {/* BOUTON RETOUR */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <Link to="/#projets" className="btn btn-ghost btn-outline mb-8">
          ← Retour aux projets
        </Link>
      </motion.div>

      {/* EN-TÊTE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          {projet.nom}
        </h1>
        <p className="text-primary text-lg font-medium mb-6">
          {projet.sousTitre}
        </p>
        <div className="flex flex-wrap gap-3">
          {projet.github && (
            <a href={projet.github} target="_blank" className="btn btn-outline btn-sm">
              GitHub →
            </a>
          )}
          {projet.enligne && (
            <a href={projet.enligne} target="_blank" className="btn btn-primary btn-sm">
              Voir en ligne →
            </a>
          )}
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        className="rounded-2xl p-6 border border-white/10 mb-8"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Description</h2>
        <p className="text-base-content/70 leading-relaxed">{projet.details}</p>
      </motion.div>

      {/* TECHNOLOGIES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
        className="rounded-2xl p-6 border border-white/10 mb-8"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {projet.technologies.map((tech, i) => (
            <span key={i} className="badge badge-outline">{tech}</span>
          ))}
        </div>
      </motion.div>

      {/* CARROUSEL D'IMAGES */}
      {projet.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
          className="rounded-2xl p-6 border border-white/10"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Images</h2>

          {/* IMAGE PRINCIPALE */}
          <div className="relative w-full h-72 overflow-hidden rounded-xl mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={indexActuel}
                src={projet.images[indexActuel]}
                alt={`${projet.nom} ${indexActuel + 1}`}
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            {/* BOUTONS NAVIGATION */}
            <button
              onClick={() => setIndexActuel(i => (i - 1 + projet.images.length) % projet.images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50"
            >
              ←
            </button>
            <button
              onClick={() => setIndexActuel(i => (i + 1) % projet.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50"
            >
              →
            </button>
          </div>

          {/* POINTS DE NAVIGATION */}
          <div className="flex justify-center gap-2">
            {projet.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndexActuel(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === indexActuel ? 'bg-primary w-4' : 'bg-white/30'}`}
              />
            ))}
          </div>

        </motion.div>
      )}

    </div>
  )
}

export default ProjetDetail