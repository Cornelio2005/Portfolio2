import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projets = [
  {
    id: 1,
    nom: 'GymManager Pro',
    sousTitre: 'Gestion intelligente de salle de sport',
    description: 'Application desktop complète pour gérer une salle de sport. Gestion des abonnés, abonnements, statistiques et authentification utilisateur.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: null,
    enligne: null,
  },
  {
    id: 2,
    nom: 'Référentiel Centralisé Multi-SGBD',
    sousTitre: 'Centralisation et gestion de scripts SQL',
    description: 'Application web permettant de centraliser des scripts SQL provenant de plusieurs SGBD. Import/export, versioning, recherche avancée et gestion des utilisateurs.',
    technologies: ['PHP', 'Laravel', 'PostgreSQL'],
    github: null,
    enligne: null,
  },
  {
    id: 3,
    nom: 'TaskFlow',
    sousTitre: 'Organise tes tâches, libère ton esprit',
    description: 'Application web de gestion de tâches moderne et intuitive. Création, organisation et suivi de tâches avec une interface épurée et responsive.',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Cornelio2005/Todo.github',
    enligne: 'https://corneliotodo.vercel.app/',
  },
]

function Projets() {
  return (
    <section id="projets" className="min-h-screen px-6 py-24 max-w-5xl mx-auto">

      {/* TITRE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <h2 className="text-5xl font-extrabold text-white">
          Projets<span className="text-primary">.</span>
        </h2>
        <p className="text-base-content/70 mt-4 mb-16 max-w-xl">
          Une sélection de projets réalisés en formation et en stage.
        </p>
      </motion.div>

      {/* GRILLE DE CARTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projets.map((projet, index) => (
          <motion.div
            key={projet.id}
            className="rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
          >
            {/* CONTENU CARTE */}
            <div>
              {/* NOM + SOUS-TITRE */}
              <h3 className="text-xl font-bold text-white mb-1">
                {projet.nom}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                {projet.sousTitre}
              </p>

              {/* DESCRIPTION */}
              <p className="text-base-content/70 text-sm leading-relaxed mb-6">
                {projet.description}
              </p>

              {/* BADGES TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projet.technologies.map((tech, i) => (
                  <span key={i} className="badge badge-outline text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BOUTON DÉCOUVRIR */}
            <Link
              to={`/projets/${projet.id}`}
              className="btn btn-outline btn-sm w-fit tracking-widest text-xs"
            >
              DÉCOUVRIR →
            </Link>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projets