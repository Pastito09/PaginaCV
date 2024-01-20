import React from 'react';
import { Foto } from './Foto';
import { teckStack } from '../data/techStack';
import { Link } from 'react-router-dom';

export const Home = () => {
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 d-flex align-items-center ms-2'>
          <Foto />
        </div>
        <div className='col text-center mt-5'>
            <h1 style={{fontFamily: "Verdana, Geneva, sans-serif", fontSize: "50px", fontWeight: "bold", color: "#000066 "}}>Patricio Augusto Zienka Hogan</h1>
            <h2 style={{fontFamily: "Verdana, Geneva, sans-serif", color: "#003399"}}>Front End Developer <i>Jr</i></h2>
            <br />
            <em style={{fontFamily: "Verdana, Geneva, sans-serif", color: "#000033" }}>"En la busqueda constante del aprendizaje"</em>
            <br />
            <br />
        </div>
      </div>
      
      <hr />
      <div >
        
        <p>A lo largo de mi vida he incursionado en distintos ámbitos y áreas. Siento que esa capacidad de mutabilidad me ha ayudado a encontrar en todos esos aspectos, un interes común, que es el desarrollo personal e intelectual.</p>
        <p>Como Web Developer Front End comence por curiosidad, y a cada paso que fui dando en mi formación, mas consideré que ese instinto me llevó al lugar correcto. </p>
        <p>Encuentro desafiante superar la frustración que se experimenta en todo proceso de asimilación de nuevos conceptos. Todo error es por intentar, y en todo intento está el afán de ser mejor.</p>
        <p>La capacitación es permanente, pero hasta ahora, manejo el siguiente <u>Tech Stack:</u></p>
        
        <div className='container text-center mb-2'>
          <div className='row row-cols-4'> 
          {
            teckStack.map(tech => (             
             <div key={crypto.randomUUID()} className='col md-auto mb-2 text-center' >              
            <p>{tech}</p>
             </div> 
            ))
          }
          </div>
        </div>
        <p> Hoy estoy enfocado en la especialización del desarrollo front end con ReactJs con los <Link to="/estudios" > cursos</Link> que he completado, con esa orientación. </p>
        <p> Aunque también realicé el back end, con NodeJs, de la CalendarApp (especificado en <Link>Proyectos</Link>). El cual abrió otro canal de interés en mi, con la intención de llegar a ser Full Stack Developer.</p>
        <hr />
        <div className='row'>
          <div className='col'>
            <h6 style={{color: "white"}}>Idiomas:</h6>
            <div style={{marginLeft: 70}}>
              <p><b>Español</b> (Nativo) </p>
              <p><b>Inglés</b> (Avanzado) </p>
              <p><b>Portugués</b> (Básico) </p>
                </div>           
          </div>
          <div className='col-3 align-self-end'>
            <h6 style={{color: "white"}}>Nacionalidad:</h6>
            <div style={{marginLeft: 170}}>
              <p>Brasilero, Lituano.</p>
            </div>
            <h6 style={{color: "white"}}>Residente permanente:</h6>
            <div style={{marginLeft: 170}}>
              <p>Buenos Aires, Argentina.</p>
            </div>
          </div>
        </div>
              
      </div>
    </div>
  )
};
