import react from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'


function Navbar({title}){
    return (
        <div className='Navbar'>
                <h1>{title}</h1>
                <Link to="/home"><button>home</button></Link>
        </div>
    )
}

export default Navbar