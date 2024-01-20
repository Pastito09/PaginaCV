import { DatosRandom } from "../random/DatosRandom"


export const Intereses = () => {
  
  return (
    <div className='container-fluid'>
      <div>
      <h3 className="mt-2" style={{fontFamily: "Calisto MT, Bookman Old Style, Bookman, Goudy Old Style, Garamond, Hoefler Text, Bitstream Charter, Georgia, serif", fontWeight: "bold", color: "#2C3E50"}}>He aquí una ventana a mi lado más personal e intimo.</h3>
      <h5 className='ms-3' style={{fontFamily: "Calisto MT, Bookman Old Style, Bookman, Goudy Old Style, Garamond, Hoefler Text, Bitstream Charter, Georgia, serif", color: "#2C3E50"}}> Gustos, intereses, actividades. Detalles que me identifican.</h5>
      <br />
      <h6 className='text-center mb-4' style={{color: "#2C3E50", fontWeight: "bold"}}>Bienvenid@s</h6>
      </div>

      <DatosRandom /> 
       
      <div className="mb-5">
        <p>Nací en Sao Pablo, Brasil. Al año y diez meses, me radiqué en Argentina. Tengo nacionalidad Lituana, por parte de mi abuelos maternos. <br />
            Ávido lector, preferentemente novelas policiales. Autores como John Fante, Frederick Brown, Phillip Dick, Jean-Paul Sartre, Paul Auster, entre otros. <br />
            Masajista descontracturante-relajante en <a href="https://www.instagram.com/patohoganmasajista/" rel="noreferrer" target='_blank'>@patohoganmasajista</a>. <br />
            Trabajé como agente de tráfico en el aeropuerto internacional de Ezeiza durante 7 años, para las cuentas de Air France y KLM, manejadas por <a href="https://crossracer.aero/?lang=es" rel="noreferrer" target='_blank'>CrossRacer</a>. <br />
            Deportista, ex-jugador de Handball en la Sociedad Alemana de Gimnasia de Almirante Brown (<a href="http://sagab.com.ar/" rel="noreferrer" target='_blank'>SAGAB</a>). Ciclista aficionado. <br />
            Músico, guitarrista y bajista. Actualmente formo parte de dos proyectos, con los cuales viajo por el país en ocaciones. Tambien tenemos una agenda de presentaciones por Bs.As. <br />
            Amante de las plantas, realicé un terciario en <a href="https://www.instagram.com/emajea.lomas/" rel="noreferrer" target="_blank">E.M.A.J.E.A.</a> (Escuela Municipal de Arboricultura, Jardinería, y Ecología Aplicada de Lomas de Zamora). Hoy cultivo algunos de mis alimentos. <br />
            Los animales son muy importantes para mí. Comparto mi hogar con mi hermosa gatita, Ipa. <br />
            Melómano, no solamente de la música clasica. Todos los géneros me son atractivos, encuentro en todos ellos algo que aprender y aplicar en mis composiciones. <br />
            Hice dos cursos de armado y reparación de pedales analogicos para guitarra y bajo. Tambien de calibración de instrumentos de cuerda. Todos los pedales que uso, los cables, y la calibración y cambio de cuerdas de mis intrumentos, son realizados por mi. <br />
            Durante la pandemia, de manera virtual, me capacité en electricidad domiciliaria, instalación de aire acondicionado y reparación de lavarropas. Ayudo con esas tareas a familiares y amigos. Instalando un ventilador de techo, haciendo una conexión para un horno de cerámica, ó cambiando el bloqueapuertas del lavaropas, por citar algún ejemplo.
        </p>

             
      </div>
    </div>
  )
}
