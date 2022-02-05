import React from 'react'
import '../css/styles.css'
import {Link} from 'react-router-dom'

function Landingpage(){
    const cambiar= ()=>{
        document.querySelector('.glass-left').className = 'mover-left'
        document.querySelector('.transparent-right').className = 'mover-right'
        setTimeout(() => {
            window.location.href='/Client-api-dog/home'
        }, 1500);
    }

    return (
        <div className='Landingpage'>
            <div className='glass-left'>
                <h1>PROYECTO</h1>
                <h1>INDIVI</h1>
            </div>
            <div className='transparent-right'>
                <h1 className='invisible'></h1>
                <h1>DUAL</h1>
                <h1>DOGS</h1>
                <div className='contenedor'>
                    <Link to='/home'><button>home</button></Link>
                </div> 
            </div>
        </div>
    )
}

export default Landingpage