import { motion } from 'framer-motion'

const contacts = [
  {
    label: 'EMAIL',
    valeur: 'cornelienbissan1@gmail.com',
    description: 'Pour une mission, un projet ou une collaboration.',
    lien: 'mailto:cornelienbissan1@gmail.com',
  },
  {
    label: 'LINKEDIN',
    valeur: 'Cornelio BENISSAN',
    description: 'Parcours, expériences et prise de contact professionnelle.',
    lien: 'https://linkedin.com/in/cornelio-benissan-847095388',
  },
  {
    label: 'GITHUB',
    valeur: 'Cornelio2005',
    description: 'Code source, projets et expérimentations techniques.',
    lien: 'https://github.com/Cornelio2005',
  },
  {
    label: 'TÉLÉPHONE',
    valeur: '+33 07-53-77-29-45',
    description: 'Disponible pour un échange rapide.',
    lien: 'tel:+33753772945',
  },
]

function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 max-w-5xl mx-auto">

      {/* EN-TÊTE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="rounded-2xl p-10 border border-white/10 mb-8"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Contact<span className="text-primary">.</span>
        </h2>
        <p className="text-base-content/70 max-w-xl mb-8">
          Disponible pour échanger autour d'une mission, d'un projet ou d'une 
          opportunité professionnelle. Le moyen le plus rapide reste l'email.
        </p>
        <div className="flex flex-wrap gap-4">
          
           
         <a href="mailto:cornelienbissan1@gmail.com"
            className="btn btn-primary btn-sm tracking-widest">
            ENVOYER UN EMAIL →
          </a>
          
           <a href="/CV_2026-02-10_Cornelio_BENISSAN.pdf"
            download
            className="btn btn-outline btn-sm tracking-widest"
          >
            MON CV (.PDF) ↓
          </a>
        </div>
      </motion.div>

      {/* GRILLE DES LIENS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.lien}
            target={contact.lien.startsWith('http') ? '_blank' : '_self'}
            className="rounded-2xl p-6 border border-white/10 flex flex-col gap-2 group"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* LABEL */}
            <span className="text-xs font-bold text-base-content/40 tracking-widest">
              {contact.label}
            </span>

            {/* VALEUR */}
            <span className="text-xl font-bold text-white">
              {contact.valeur}
            </span>

            {/* DESCRIPTION */}
            <span className="text-sm text-base-content/50">
              {contact.description}
            </span>

            {/* ACCÉDER */}
            <span className="text-primary text-sm font-bold tracking-widest mt-2 group-hover:translate-x-1 transition-transform">
              ACCÉDER →
            </span>

          </motion.a>
        ))}
      </div>

    </section>
  )
}

export default Contact