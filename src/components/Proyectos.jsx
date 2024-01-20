import React from 'react'
import { proyectos } from '../data/proyectos'
import { Download } from 'react-feather'

export const Proyectos = () => {

  const estiloProyectos = {
    backgroundImage: "linear-gradient(210deg, hsl(222deg 46% 80%) 0%, hsl(228deg 54% 73%) 4%, hsl(237deg 53% 68%) 9%, hsl(250deg 50% 59%) 15%, hsl(260deg 45% 48%) 23%, hsl(256deg 47% 36%) 32%, hsl(252deg 51% 25%) 44%, hsl(247deg 61% 14%) 56%, hsl(214deg 100% 13%) 70%, hsl(201deg 100% 17%) 83%, hsl(188deg 100% 18%) 94%, hsl(172deg 50% 28%) 100%)"
  }
 

  return (
    <>
    <br />
    <div className='ms-3'>
      <p>El contenido de esta sección abarca los proyectos mas significativos que fui desarrollando a lo largo de mi formación.</p>
      <p>Son de código libre, se encuentran en <a href="https://github.com"  rel="noreferrer" target='_blank' className='estiloAnchor' >GitHub</a> y todos ellos tienen un link que te lleva al repositorio del proyecto. Para correrlo en un servidor local, se necesita descargar <a href="https://nodejs.org/en" rel='noreferrer' target='_blank' className='estiloAnchor'>NodeJS</a> e instalar la versión LTS (recomendada). </p>
      <p>No es necesario contar con un editor de código. Se puede hacer un "Fork" del proyecto (si tiene una cuenta en GitHub), o simplemente descargarlo apretando el botón "Code", y "Download ZIP". </p>
      <p>Luego abriendo la terminal integrada del sistema operativo que poseas (Windows, Mac o Linux), escribimos "cd", luego un espacio, y arrastramos la carpeta del proyecto descargado y se da un "enter".</p>
      <p>Para instalar las dependencias que corren en el código, dependiendo de la gestión del paquete, se escribe "npm install" en la terminal (Para proyectos gestionados con NPM, Parcel, o Nodemon), o "yarn install" (Para los proyectos con Yarn).</p>
      <p>Para finalizar, correr el código, y ver en tu servidor local el proyecto, se ejecuta, en la terminal, el "script" que cada uno de ellos tiene especificado abajo.</p>
    </div>
  <br />
      <div className='container d-sm-flex' id='container-proyectos'>
        <div className='grid'>
          <div className="row">
             {
            proyectos.map((proyecto, index) => (
              <div className='col-2 mt-2 border border-light border-opacity-25 rounded p-2 mb-2 m-1' key={index} style={estiloProyectos}>
                <h6 style={{color: "#4A235A"}}>{proyecto.nombre}</h6>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={proyecto.img} id='img-proyectos' alt={proyecto.nombre} className='img-fluid'/>
                </div>
                
                <br />
                <div className='border p-2 mb-2 justify-content-center'>
                  <p><u>Descripción:</u> </p>
                <p>{proyecto.descripcion}</p>
                </div>
                {/* <div className='d-flex justify-content-center'>

                </div> */}
                <p className='border p-2 mb-2' >
                  La gestión del paquete es "{proyecto.gestion_paquete}" y para correr el proyecto, se ejecuta en la terminal "{proyecto.script}".
                </p>
                <p>Página para la descarga del proyecto: <a href={proyecto.url}  rel="noreferrer" target='_blank' ><Download size={20} color='green'/></a></p>
              </div>

            ) )
          }
          </div>
        </div>
      </div>
    </>
    
  )
}
