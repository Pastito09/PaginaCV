
import fotoPato from '../data/foto/foto perfil.jpeg';

export const Foto = ({estilo = "rounded-circle"}) => {
  return (
    <div>
      <img src={fotoPato} className={`img-fluid ${estilo} mt-1`} alt="Foto de perfil de Patricio" />
    </div>
  )
}
