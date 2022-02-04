import { Link } from 'react-router-dom'
import '../css/styles.css'

function Carddog({id,raza,pesomin,pesomax,temperamento,image}){


    return (
        <div className="Carddog" key={id}>
            <div className='imageDog'><img src={image}/></div>
            <div className='info'>
            <Link to={`/dogDetail/${id}`}><h4>Raza: {raza}</h4></Link>
                <h4>Peso: {pesomin} - {pesomax} kg</h4>
                <h4>Temperamento: {temperamento}</h4>
            </div>
        </div>
    )
}

export default Carddog