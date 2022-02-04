import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDetail} from '../actions/index.js'
import Loading from "./Loading.js";
import '../css/styles.css'
import Navbar from '../components/Navbar'

function Dogdetail(){
    const stateraza = useSelector((state) => state.detalleRaza)
    const dispatch = useDispatch()
    const {idRaza} = useParams()
    
    useEffect(()=> {
        dispatch(getDetail(idRaza))
    },[dispatch])

    setTimeout(() => {
        document.querySelector('.contenedor-detalle-dispel').className = 'contenedor-detalle'
    }, 200);

    return (
        <div className="Dogdetail">
            <Navbar title={'Detalle de raza'}/>
                {stateraza.length < 1 ? <Loading/>: stateraza.map(e => (
                    <div className="contenedor-detalle-dispel">
                        <div>
                            <h2>{e.Nombre}</h2>
                            <h3>Altura: {e.AlturaMin} - {e.AlturaMax} Cm</h3>
                            <h3>Peso: {e.PesoMin} - {e.PesoMax} Kg</h3>
                            <h3>Temperamento: {e.Temperamento}</h3>
                            <h3>Años de vida: {e.Vida} años</h3>
                            <h3>Origen: {e.origen}</h3>
                        </div>
                        <div>
                            <img src={e.image} width="350" height="350"/>
                        </div>
                        <div className="contenedor-glass-detail"></div>
                    </div>
                ))}
        </div>
    )
}

export default Dogdetail