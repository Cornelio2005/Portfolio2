function CV() {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 max-w-5xl mx-auto">
        <div className="rounded-2xl p-8 mb-6 border border-white/10"
         style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
            >

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            Cornelio <span className="text-secondary">BENISSAN</span>
                        </h1>
                        <p className="text-secondary text-lg mt-2 font-medium">
                            Stagiaire en Développement Informatique
                        </p>
                        </div>
                        <a href="/public/CV_2026-02-20_Cornelio_BENISSAN.pdf" download
                            className="btn btn-outline btn-secondary whitespace-nowrap self-start">
                            Ouvrir la version PDF →
                            </a>
                </div>
                <div className="mt-6 space-y-3">
                    <p className="text-base-content/80 text-sm leading-relaxed">
                        Actuellement en Bachelor 2 Tronc Commun à l'ESGI-Lyon, je suis à la recherche d'un stage qui permettra la mise en pratique de mes compétences techniques tout en contribuant concrètement à des projets digitaux innovants.
                    </p>
                    <p className="text-base-content/50 text-sm">
                        Lyon, France · cornelienbissan1@gmail.com · +33 07-53-77-29-45
                    </p> 
                    
                    </div>

        </div>
      {/* COMPÉTENCES TECHNIQUES & SOFT SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* COMPÉTENCES TECHNIQUES */}
            <div className="rounded-2xl p-6 border border-white/10"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Compétences techniques
                    </h2>
                    
                        {/*div pour les compétences */}
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs font-bold text-base-content/40 tracking-widest uppercase mb-1">
                            FRONT-END
                            </p>
                            <p className="text-sm text-base-content/80">
                            React, Vue.js, Tailwind CSS, DaisyUI, HTML5, CSS3
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-base-content/40 tracking-widest uppercase mb-1">
                                BACK-END
                            </p>
                            <p className="text-sm text-base-content/80">
                                Node.js, Python, Django, Java, C, Laravel
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-base-content/40 tracking-widest uppercase mb-1">
                                BASES DE DONNÉES
                            </p>
                            <p className="text-sm text-base-content/80">
                                MySQL, PostgreSQL
                            </p>
                        </div>


                    </div>
                    </div>
                     {/*Soft Skills */}
                        <div className="rounded-2xl p-6 border border-white/10"
                        style={{background: 'rgba(255,255,255,0.05)'}} >
                             <h2 className="text-2xl font-bold text-white mb-4">Soft Skills</h2>
                             <div className="space-y-3">
                                <div className="rounded-2xl p-4 border border-white/10">
                                    <p className="text-sm text-base-content/80 font-bold" > Communication en équipe</p>
                                </div>
                                        <div className="rounded-2xl p-4 border border-white/10">
                                    <p className="text-sm text-base-content/80 font-bold" > Autonomie et Curiosité</p>
                                </div>     <div className="rounded-2xl p-4 border border-white/10">
                                    <p className="text-sm text-base-content/80 font-bold" > Résolution de problèmes</p>
                                </div>     <div className="rounded-2xl p-4 border border-white/10">
                                    <p className="text-sm text-base-content/80 font-bold" > Dicipline</p>
                                </div>
                             </div>
                             <h2 className="text-2xl font-bold text-white mb-4 mt-4">Liens utiles</h2>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <a href="https://github.com/Cornelio2005" target="_blank" className="btn  btn-outline rouded-full">
                                        GitHub
                                    </a>
                                    <a href="https://linkedin.com/in/cornelio-benissan-847095388" target="_blank" className="btn  btn-outline rouded-full">
                                        LinkedIn
                                    </a>
                                    <a href="/#projets"  className="btn  btn-outline rouded-full">
                                        Mes Pojets 
                                    </a>
                                </div>
                        </div>

        </div>
        {/* EXPÉRIENCE PROFESSIONNELLE */}
        <div className="rounded-2xl p-8 mb-6 border border-white/10"
         style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
            >
                
                <h2 className="text-2xl font-bold text-white mb-4">Expérience professionnelle</h2>
                <div className="rounded-2xl p-6 border border-white/10 space-y-2">   
                  <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white">Stagiaire en Développement Web · CEET</h3>
                    <span className="badge badge-outline text-xs font-bold">STAGE</span>
                  </div>

                  <p className="text-sm text-base-content/50">
    Lomé, Togo · Juin 2025 - Août 2025
  </p>

  {/* LIGNE 3 — Description */}
  <p className="text-sm text-base-content/80">
    Mise en place d'un Référentiel Centralistique Multi-SGBD. Analyse, conception UML, développement des modules et sécurisation des accès.
  </p>

  {/* LIGNE 4 — Compétences */}
  <p className="text-sm text-base-content/50">
    Compétences utilisées : PostgreSQL, PHP, Laravel 12
  </p>
            </div>
                
            </div>
            {/* FORMATIONS */}
                <div className="rounded-2xl p-8 mb-6 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>

                <h2 className="text-2xl font-bold text-white mb-4">Formations</h2>

                <div className="space-y-4">

                    {/* ESGI */}
                    <div className="rounded-2xl p-6 border border-white/10 space-y-1">
                    <h3 className="text-lg font-bold text-white">ESGI Lyon</h3>
                    <p className="text-secondary text-sm font-medium">
                        Bachelor 2 en Informatique — Tronc Commun
                    </p>
                    <p className="text-sm text-base-content/50">
                        Depuis septembre 2025
                    </p>
                    </div>

                    {/* IAI TOGO */}
                    <div className="rounded-2xl p-6 border border-white/10 space-y-1">
                    <h3 className="text-lg font-bold text-white">IAI-TOGO — Lomé</h3>
                    <p className="text-secondary text-sm font-medium">
                        Licence 1 & Licence 2 en Informatique — Tronc Commun
                    </p>
                    <p className="text-sm text-base-content/50">
                        Novembre 2023 - Août 2025
                    </p>
                    </div>

                    {/* BAC */}
                    <div className="rounded-2xl p-6 border border-white/10 space-y-1">
                    <h3 className="text-lg font-bold text-white">
                        Lycée Baguida-Plantation — Lomé, TOGO
                    </h3>
                    <p className="text-secondary text-sm font-medium">
                        Baccalauréat Scientifique
                    </p>
                    <p className="text-sm text-base-content/50">
                        Septembre 2022 - Juillet 2023
                    </p>
                    </div>

                </div>
                </div>
       
 
    </div>
  )
}

export default CV