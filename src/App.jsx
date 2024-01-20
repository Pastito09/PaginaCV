import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar, Footer, Home, Estudios, Proyectos, Contacto, Intereses } from "./components";



function App() {
  return (
    <div  className="d-flex flex-column fondo" style={{ minHeight: "100vh" }} > {/*className="bg-dark" container-fluid*/}
  <Navbar />
      <div className="flex-grow-1 ms-1">
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="estudios" element={ <Estudios /> } />
        <Route path="proyectos" element={ <Proyectos /> } />
        <Route path="contacto" element={ <Contacto /> } />
        <Route path="intereses" element={ <Intereses /> } />

        <Route path="/*" element={ <Navigate to='/contacto' />}/>

      </Routes>
      </div>
      
     
      <hr />

    <Footer className="mt-auto"/>
    
    </ div>
  );
}

export default App;
