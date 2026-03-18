import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const liens = [
  { label: 'Accueil',     href: '/#accueil',     isRoute: false },
  { label: 'À Propos',    href: '/#apropos',     isRoute: false },
  { label: 'Competences', href: '/#competences', isRoute: false },
  { label: 'Projets',     href: '/#projets',     isRoute: false },
  { label: 'Contact',     href: '/#contact',     isRoute: false },
  { label: 'CV',          href: '/cv',           isRoute: true  },
]

function Navbar(){
 


 return (
  <nav className="navbar bg-base-100 sticky top-0 z-50 shadow-md">

    {/* ZONE GAUCHE — Logo */}
    <div className="navbar-start">
      <a href="/#accueil" className="text-2xl font-extrabold"
        style={{ fontFamily: 'Orbitron, sans-serif' }}>
        BC
      </a>
    </div>

    {/* ZONE DROITE — Liens */}
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal gap-1">
        {liens.map((lien, index) => (
          <li key={index}>
            {lien.isRoute ? (
              <Link to={lien.href} className="text-base font-bold hover:text-primary uppercase transition-colors duration-200  ">
                {lien.label}
              </Link>
            ) : (
              <HashLink smooth to={lien.href} className="text-base font-bold hover:text-primary uppercase transition-colors duration-200  ">
                {lien.label}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    </div>

  </nav>
)

}
export default Navbar