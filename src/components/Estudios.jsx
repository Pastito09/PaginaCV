import React from 'react'
import { cursos } from '../data/cursos'


export const Estudios = () => {

const estudiosEstilo = {
  backgroundImage: "linear-gradient(210deg, hsl(235deg 43% 29%) 0%, hsl(238deg 43% 34%) 17%, hsl(242deg 44% 38%) 27%, hsl(247deg 47% 42%) 34%, hsl(251deg 50% 46%) 41%, hsl(256deg 52% 49%) 46%, hsl(261deg 60% 52%) 51%, hsl(260deg 60% 51%) 56%, hsl(259deg 59% 50%) 60%, hsl(258deg 60% 49%) 64%, hsl(257deg 62% 49%) 68%, hsl(256deg 63% 48%) 72%, hsl(255deg 65% 47%) 75%, hsl(246deg 58% 51%) 79%, hsl(237deg 60% 52%) 83%, hsl(230deg 64% 50%) 87%, hsl(223deg 71% 49%) 91%, hsl(218deg 79% 46%) 95%, hsl(214deg 88% 44%) 100%)"
}

  return (
    <div>
      <h6 className='mt-2 ms-2' style={{color: "#EAFAF1", fontFamily: "Dejavu Sans, Arial, Verdana, sans-serif", fontWeight: "bold"}}>En este apartado se encuentran mis estudios y capacitaciones más relevantes.</h6>
      <hr />
      <h1 className='ms-3' style={{color: "#E8F6F3", fontFamily:"Dejavu Sans, Arial, Verdana, sans-serif", fontWeight: "bold" }} >Cursos realizados</h1>
      <div className='container-fluid mt-4'>
        {
          cursos.map(curso => (
            <div className='card' style={estudiosEstilo} key={curso.id}
              id={curso.id} >
                <div className='row' >
              
                <div className='col-2 text-center mt-3'>
                  <img src={curso.img} className='img-thumbnail ms-1 h-50' alt={curso.nombre} />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    {/* <Link to={curso.url} target="_blank" >{curso.nombre}
                    </Link> */}
                    <p><a href={curso.url} target='_blank' className='link-opacity-25' rel="noreferrer" >{curso.nombre}</a></p>
                    
                    <div className='mt-3'>
                    <p><b>Contenido del curso: </b>{ curso.contenido }</p>
                    <p><b>Duración: </b>{ curso.duracion }</p>
                    <p><b>Profesor: </b> {curso.profesor} </p>
                    </div>
                   
                
                </div>
                
              </div>

              </div>
              
            </div>
           
          ))
        }
      </div>
    </div>
  )
}
