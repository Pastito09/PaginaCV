import {  NavLink } from "react-router-dom"


export const Navbar = () => {

  const navegacion = {
    backgroundImage: "linear-gradient(75deg, hsl(240deg 100% 20%) 0%, hsl(262deg 100% 25%) 23%, hsl(266deg 100% 29%) 33%, hsl(269deg 100% 33%) 38%, hsl(270deg 100% 37%) 42%, hsl(271deg 100% 40%) 45%, hsl(272deg 100% 42%) 49%, hsl(272deg 100% 45%) 54%, hsl(273deg 100% 48%) 65%, hsl(273deg 100% 50%) 100%)"
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark rounded-3 ms-1 me-1" style={navegacion}>
    <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <NavLink  
        className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''} nav-item` }
        to="/"
        >
          Home
        </NavLink>

        <NavLink  
        className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}  nav-item` } 
        to="/estudios"
        >
          Estudios
        </NavLink>

        <NavLink  
        className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}  nav-item` } 
        to="/proyectos"
        >
          Proyectos
        </NavLink>

        <NavLink  
        className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}  nav-item` } 
        to="/intereses"
        >
          Intereses
        </NavLink>

        <NavLink  
        className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}  nav-item` } 
        to="/contacto"
        >
          Contacto
        </NavLink>        

        
      </ul>
    </div>
  </div>
</nav>
  )
}
