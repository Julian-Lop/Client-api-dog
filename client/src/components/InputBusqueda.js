import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getAllDogs,filterTemperament,organizeByWeight,organizeByAlphabet,filterRaza} from '../actions/index.js'
import { Link } from 'react-router-dom'
import '../css/styles.css'

function InputBusqueda({setCurrentPage,setsearch,temp}){
    const dispatch = useDispatch()

    const razas = useSelector((state) => state.todosLosdogs)
    const razasfiltradas = useSelector((state) => state.dogsfiltrados)
    const tem = useSelector((state) => state.tempfiltrados)

    let showraza = razasfiltradas.length < 1 ? razas : razasfiltradas
    let showtemp = tem.length < 1 ? temp : tem

    const [searchn, setsearchn] = useState('');

    const onSearchChange = async (event) => {
        setCurrentPage(0)
        setsearchn(event.target.value)
        setsearch('')
        let esper = await dispatch(getAllDogs(event.target.value)).then(e => {return e.type})
        if(esper === 'OBTENER_dOGS'){
            dispatch(filterRaza())
        }
        setsearch('')
    }

    const onSearchChangeTemp = (event) => {
        setCurrentPage(0)
        setsearch(event.target.value)
        dispatch(filterTemperament(event.target.value))
    }

    const organizateData = (event) => {
        if(event.target.value === "asc" || event.target.value === "des"){
            setCurrentPage(0)
            setsearch(event.target.value)
            dispatch(organizeByWeight(event.target.value))
        }else{
            setCurrentPage(0)
            setsearch(event.target.value)
            dispatch(organizeByAlphabet(event.target.value))
        }
    }
    

    return (
        <div className="InputBusqueda">
            <select name="select" onChange={e => organizateData(e)}>
                <option key="ordenar" value=''>Ordenar</option>
                    <option key="pesomin" value="asc" >PesoAscendente</option>
                    <option key="pesomax" value="des">PesoDescendente</option>
                    <option key="a-z" value="az">AlfabeticoAscendente</option>
                    <option key="z-a" value="za">alfabeticoDescendente</option>
            </select>
            <select name="select" onChange={e => onSearchChange(e)}>
                <option key="razaDog" value=''>Raza</option>
                {showraza.map(e => (
                    <option key={e.ID} value={e.Nombre}>{e.Nombre}</option>
                ))}
            </select>
            <select name="select" onChange={e => onSearchChangeTemp(e)}>
                <option key="tempera" value=''>Temperamento</option>
                {showtemp.map(e => (
                    <option  key={e.ID} value={e.Nombre}>{e.Nombre}</option>
                ))}
            </select>
            <input type="text" value={searchn} onChange={onSearchChange} placeholder="Nombre de Raza"/>
            <Link to="/createDog"><button>Crear Perro</button></Link>
        </div>    
    )
} 

export default InputBusqueda