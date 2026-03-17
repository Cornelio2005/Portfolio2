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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
        </div>

    </div>
  )
}

export default CV