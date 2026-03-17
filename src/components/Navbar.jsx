import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const liens = [
  { label: 'Accueil',     href: '/#accueil',     isRoute: false },
  { label: 'À Propos',    href: '/#apropos',     isRoute: false },
  { label: 'Compétences', href: '/#competences', isRoute: false },
  { label: 'Projets',     href: '/#projets',     isRoute: false },
  { label: 'Contact',     href: '/#contact',     isRoute: false },
  { label: 'CV',          href: '/cv',           isRoute: true  },
]

function Navbar(){
    const [theme, setTheme] = useState('synthwave')
    useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
}, [theme])
     

    const toggleTheme = () => {
  setTheme(theme === 'synthwave' ? 'light' : 'synthwave')
}
 


    return(
<nav className="navbar bg-base-100 sticky top-0 z-50 shadow-md">            <div className="navbar-start">
                     <a href="#accueil" className="text-2xl font-extrabold " style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        BC
                    </a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-1">
                {liens.map((lien, index) => (
               <li key={index}>
  {lien.isRoute ? (
    <Link to={lien.href} className="font-medium hover:text-primary transition-colors duration-200">
      {lien.label}
    </Link>
 ) : (
    <HashLink smooth to={lien.href} className="font-medium hover:text-primary transition-colors duration-200">
      {lien.label}
    </HashLink>
  )}
</li>
                            ))}   
              </ul>
            </div>
             
             <div className="navbar-end">
                <button onClick={toggleTheme} className='btn btn-ghost btn-circle text-xl'>
                    {theme === 'synthwave' ? '🌞' : '🌙'}
                </button>

             </div>

            
        </nav>
    )

}
export default Navbar