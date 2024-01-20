import React from 'react'
import { FacebookButton, Github, Gmail, InstagramButton, WhatsApp, LinkedIn } from '../components-redes'


export const Footer = () => {
  return (
    <footer className='ms-1 me-1 border border-light border-opacity-10 rounded'>
      <div className='container-fluid'>
        <div className='row '>
          <div className="col ">
            <div className='hstack gap-3'>
              <Github />
              <div className="vr" style={{color: "white"}}></div>
              <LinkedIn />
              <div className="vr" style={{color: "white"}}></div>
              <InstagramButton />
              <div className="vr" style={{color: "white"}}></div>
              <FacebookButton />
              <div className="vr" style={{color: "white"}}></div>
              <WhatsApp />
              <div className="vr" style={{color: "white"}}></div>
              <Gmail />
              <div className="vr" style={{color: "white"}}></div>
            </div>
            </div>
            
          <div className='col col-auto' >
            <small style={{color: "#D4C143"}}>Desarrollado por Patricio Zienka Hogan</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
