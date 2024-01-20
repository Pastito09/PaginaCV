import { useEffect, useState } from "react"
import { datos } from "./datos";

export const DatosRandom = () => {
  
    const [text, setText] = useState("");

    const random = () => {
        const numAleat = Math.floor(Math.random() * 20);

        setText( datos[numAleat].dato);
       
    };

    const Texto = () => {
        return (
             <p className="col text-center animate__animated animate__fadeIn">
            "{text}"
            </p>
            
        )
    }

   useEffect(() => {
     random()
   }, []);
   
    return (
    <div className="container border mb-5 pt-2 pb-2" style={{
    }}>
        <div className="row">
        <div className="col mb-3"><h6>Datos random:</h6></div>
        </div>
        <div className="row">
            <figure className="text-center">
            <blockquote className="blockquote">
              <Texto />
            </blockquote>
            </figure>
                
            <div className="col d-flex justify-content-end">
                <button type="button" className="btn btn-light " onClick={random}>Mas datos.</button>
            </div>
        </div>
       
        
    </div>
  );
};
