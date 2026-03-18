import { motion } from 'framer-motion'

function APropos() {
   const categories = [
  {
    icone: '{ }',
    titre: 'FRONTEND',
    competences: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'DaisyUI'],
  },
  {
    icone: '>_',
    titre: 'BACKEND',
    competences: ['PHP', 'Python', 'Java', 'Django', 'Laravel', 'Node.js'],
  },
  {
    icone: 'db',
    titre: 'DATA',
    competences: ['MySQL', 'PostgreSQL'],
  },
  {
    icone: '⚙️',
    titre: 'DEVOPS',
    competences: ['Docker', 'Git',],
  }
]

  return (
    <section id="apropos" className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
        <motion.div
  initial={{ opacity: 0, y: 60}}
  whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.5}}  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
>
  <h2 className="text-5xl font-extrabold text-white">
    À propos<span className="text-primary">.</span>
  </h2>
  <div className="w-16 h-0.5 bg-primary mt-4 mb-8" />
</motion.div>
<motion.p
  className="text-lg text-base-content/70 max-w-2xl mb-16 leading-relaxed"
  initial={{ opacity: 0, y:60}}
  whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.5}}  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
>
  Actuellement en Bachelor 2 Informatique à l'ESGI Lyon, je suis passionné 
  par le développement web et la conception de solutions logicielles. 
  Curieux, autonome et rigoureux, je cherche constamment à apprendre 
  et à relever de nouveaux défis techniques.
</motion.p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   {categories.map((cat, index) => (
  <motion.div
    key={index}
    className="rounded-2xl p-6 border border-white/10"
    style={{ background: 'rgba(255,255,255,0.05)' }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
  >
    {/* ICONE + TITRE */}
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
        {cat.icone}
      </span>
      <span className="text-primary text-xs font-bold tracking-widest">
        {cat.titre}
      </span>
    </div>

    {/* BADGES */}
    <div className="flex flex-wrap gap-2">
      {cat.competences.map((comp, i) => (
        <span key={i} className="badge badge-outline text-xs">
          {comp}
        </span>
      ))}
    </div>

  </motion.div>
))}
</div>
    </section>
  )
}

export default APropos