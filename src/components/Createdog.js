import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {getTemperaments,createDog} from '../actions/index.js'
import '../css/styles.css'
import Navbar from "./Navbar.js";
import Alert from "./Alert.js";

function Createdog(){
    const dispatch = useDispatch()
    const stateTemp = useSelector((state)=> state.temperamentos)

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    setTimeout(() => {
        document.querySelector('.Createdog-dispel').className = 'Createdog'
    }, 200);

    const [error, setError] = useState({
        nombre:'Debe contener un nombre',
        alturamin: 'Debe contener una altura min valida',
        alturamax : "Deber contener una altura max valida",
        pesomin : "Debe contener un peso min valido",
        pesomax : "Debe contener un peso max valido",
        vida : "Debe contener un tiempo de vida valido"
    })
    const [temp, setTemp] = useState([])
    const [datos, setDatos] = useState({
        nombre: '',
        alturamin: 0,
        alturamax: 0,
        pesomin: 0,
        pesomax: 0,
        vida: 0,
        temperamentos : []
    })

    const validarCampos = (e) => {
        let error = {}
        if(!e.nombre){
            error.nombre = 'Debe contener un nombre'
        }else if(!(/^[a-zA-Z]+$/.test(e.nombre))){
            error.nombre = 'Debe contener solo letras'
        }
        if(!e.alturamin || e.alturamin < 1){
            error.alturamin = 'Debe contener una altura min valida'
        }
        if(!e.alturamax || e.alturamax < e.alturamin){
            error.alturamax = "Deber contener una altura max valida"
        }
        if(!e.pesomin || e.pesomin < 1){
            error.pesomin = "Debe contener un peso min valido"
        }
        if(!e.pesomax || e.pesomax < e.pesomin){
            error.pesomax = "Debe contener un peso max valido"
        }
        if(!e.vida){
            error.vida = "Debe contener un tiempo de vida valido"
        }else if(e.vida < 1){
            error.vida = "Debe contener un tiempo de vida valido"
        }

        return error
    }

    const handleOnchange = (e) => {
        setDatos({...datos,
            [e.target.id]: e.target.value
        })

        setError(validarCampos({...datos,
            [e.target.id]: e.target.value
        }))
        console.log(datos)
    }

    const handleOnchangeTemp= (e) => {
        let tem = temp.indexOf(e)
        if(tem === -1){
            setTemp(old => [...old,e]);
            setDatos({...datos, 
                temperamentos: [...datos.temperamentos, e]})
        }else{
            temp.splice(tem,1)
            setDatos({...datos, temperamentos: temp})
        }
    }

    const submitDatos = () => {
        if(error.hasOwnProperty('nombre') || error.hasOwnProperty('alturamin')
        || error.hasOwnProperty('alturamax') || error.hasOwnProperty('pesomin') || 
        error.hasOwnProperty('pesomax') || error.hasOwnProperty('vida')){
            console.log('Hay errores en los datos')
            document.querySelector('.Alert-dispel').className = 'Alert'
            setTimeout(() => {
                document.querySelector('.Alert').className = 'Alert-dispel'
            }, 3000);
        }else{
            document.querySelector('.Alert-dispel').className = 'Alert-successful-dispel'
            document.querySelector('.Alert-successful-dispel').className = 'Alert-successful'
            setTimeout(() => {
                document.querySelector('.Alert-successful').className = 'Alert-successful-dispel'
                document.querySelector('.Alert-successful-dispel').className = 'Alert-dispel'
            }, 3000);
            dispatch(createDog(datos))
            console.log('enviado')
            setDatos({
                nombre: '',
                alturamin: 0,
                alturamax: 0,
                pesomin: 0,
                pesomax: 0,
                vida: 0,
                temperamentos : []
            })
            setTemp([])
        }
    }
    

    return (
        <div className="Createdog-dispel">
            <Navbar title={'Crear Dog'}/>
            <Alert error={error}/>
            <div className="contenedor-glass-createdog"></div>
            <div className="contenedor-formulario">
                <form type onSubmit={(e) => {
                    e.preventDefault();
                    submitDatos()
                }} method="post" >
                    <div className="contenedorinputs">
                        <div className="inputnombre">
                            <input type="text" id="nombre" placeholder="Nombre de la raza" 
                            value={datos.nombre} onChange={e => handleOnchange(e)}/>
                        </div>
                    
                        <div className="input-altura">
                            <label>Altura (cm): </label>
                            <br/>
                            <input type="number" id="alturamin" placeholder="Alturamin"
                            value={datos.alturamin} onChange={e => handleOnchange(e)}/>
                            <input type="number" id="alturamax" placeholder="Altura máxima"
                            value={datos.alturamax} onChange={e => handleOnchange(e)}/>
                        </div>
                        
                        <div className="input-peso">
                            <label>Peso (kg): </label>
                            <br/>
                            <input type="number" id="pesomin" placeholder="Peso mínimo"
                            value={datos.pesomin} onChange={e => handleOnchange(e)}/>
                            <input type="number" id="pesomax" placeholder="Peso máximo"
                            value={datos.pesomax} onChange={e => handleOnchange(e)}/>
                        </div>
                        
                        <div className="input-temperamento">
                            <div>
                                <label>Seleccione los temperamentos: </label>
                                <select name="select" onChange={e => handleOnchangeTemp(e.target.value)}>
                                    {stateTemp.map(temp => (
                                        <option value={temp.Nombre} key={temp.ID}>{temp.Nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <textarea id="textarea" value={temp} 
                                disabled>Write something here</textarea>
                            </div>
                            <label>Tiempo de vida (Years): </label>
                            <br/>
                            <div>
                                <input type="number" id="vida" placeholder="tiempo de vida"
                                value={datos.vida} onChange={e => handleOnchange(e)} className="input-vida"/>
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="enviar" className="boton-createdog"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createdog