import react from 'react'
import '../css/styles.css'


function Alert({error}){
    let message = 'Se creó exitosamente el perro XD'
    if(error.hasOwnProperty('nombre') || error.hasOwnProperty('alturamin')
        || error.hasOwnProperty('alturamax') || error.hasOwnProperty('pesomin') || 
        error.hasOwnProperty('pesomax') || error.hasOwnProperty('vida')){
            message = '¡No tiene los valores correctos!'
    }

    return(
        <div className='Alert-dispel'>
            <div className='contenedor-texto'>
                <h1>{message}</h1>
            </div>
        </div>
    )
}

export default Alert