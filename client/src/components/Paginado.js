import { useEffect } from 'react';
import '../css/styles.css'
import Carddog from './Carddog'

function Paginado({arraydogs}){

    setTimeout(() => {
        document.querySelector('.Paginado-dispel').className = 'Paginado'
    }, 500);

    return (
        <div className='Paginado-dispel' >
            {arraydogs ? arraydogs.map(elemento => (
                    <div>
                        <div className='glass-div2'></div>
                        <div className='glass-div'></div>
                        <Carddog id={elemento.ID} raza={elemento.Nombre} 
                        pesomin={elemento.PesoMin} pesomax={elemento.PesoMax} 
                        temperamento={elemento.Temperamento} image={elemento.image} origen={elemento.origen}/>
                    </div>
            )) : <p>No hay perros</p>}
        </div>
    )
}

export default Paginado