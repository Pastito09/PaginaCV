import React from 'react'
import { Foto } from './Foto'
import { FacebookButton, Github, InstagramButton, LinkedIn, WhatsApp, Gmail } from '../components-redes'
import { Calendar, MapPin } from 'react-feather'


export const Contacto = () => {


  const estiloNombre = {
    color: "#2874A6",
    fontFamily: "Tahoma, Verdana, Segoe, sans-serif",
    fontWeight: "bold"
  };
  const estiloParrafo = {
    color: "#ECF0F1",
    fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-seri",

  };


  return (
   <>
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '84vh' }}>
        <div className="col-md-6" style={{
          backgroundImage: "linear-gradient(250deg, hsl(240deg 88% 26%) 0%, hsl(252deg 74% 25%) 5%, hsl(258deg 60% 24%) 13%, hsl(262deg 46% 22%) 23%, hsl(256deg 41% 20%) 34%, hsl(244deg 42% 16%) 47%, hsl(235deg 52% 11%) 60%, hsl(229deg 73% 10%) 72%, hsl(222deg 97% 16%) 83%, hsl(226deg 91% 24%) 93%, hsl(237deg 67% 35%) 100%)",
          borderRadius: 10
        }}>
          
          
          <div className=" row m-2" >
          <div className='col-3 border border-light border-opacity-25'>
            <Foto estilo='img border border-light border-3 rounded border-opacity-25'/>
          </div>
            <div className='col border border-light border-opacity-25 text-center'>
              <div className='mt-1'>
                <h1 style={estiloNombre}>Patricio Augusto </h1>
                <h1 style={estiloNombre}>Zienka Hogan</h1>
              </div>
              <br />
              <div className='row'>
                 <div className='col-3'></div>
                 <div className='col-1'><MapPin style={{color: "#BDC3C7"}}/></div>
                 <div className='col text-start'><p style={estiloParrafo}>Almagro, CABA. Argentina</p></div>   
              </div>
              
              <div className='row'>
                 <div className='col-3'></div>
                 <div className='col-1 '><Calendar style={{color: "#BDC3C7"}}/></div>
                 <div className='col text-start'><p style={estiloParrafo}>15/02/87 Sao Pablo, Brasil.</p></div>   
              </div>
             
              <div className='row'>
                 <div className='col-3'></div>
                 <div className='col-1'><WhatsApp /></div>
                 <div className='col text-start ms-1'><p style={estiloParrafo}>(54)9 11-3856-0060</p></div>   
              </div>
             
              <div className='row'>
                 <div className='col-3'></div>
                 <div className='col-1'><Gmail /></div>
                 <div className='col text-start ms-1'><p style={estiloParrafo}>patriciozhogan@gmail.com</p></div>   
              </div>
              <div className='container-fluid  border border-light border-opacity-25 mb-2'>
                <h6 style={estiloNombre}>Mis redes y perfiles de contacto:</h6>
              <div className='row mb-1 justify-content-center'>
                <div className="col col-auto">
                   <Github />
                </div>
                <div className="col col-auto">
                  <LinkedIn />
                </div>
                <div className="col col-auto">
                  <InstagramButton />
                </div>
                <div className="col col-auto">
                  <FacebookButton />
                </div>
                <div className="col col-auto">
                  <WhatsApp />
                </div>
                <div className="col col-auto">
                  <Gmail />
                </div>
                 
              </div>
             
              </div>
              
           </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
