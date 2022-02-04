import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getAllDogs,getTemperaments,filterRaza, getDetail} from '../actions/index.js'
import InputBusqueda from './InputBusqueda.js'
import Loading from "./Loading.js";
import Paginado from "./Paginado.js"
import '../css/styles.css'


function Homepage(){
    const statedogs = useSelector((state)=> state.todosLosdogs)
    const stateFilter = useSelector((state)=> state.dogsfiltrados)
    const stateTemperaments = useSelector((state)=> state.temperamentos)
    const dispatch = useDispatch()
    
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setsearch] = useState('');

    setTimeout(() => {
        document.querySelector('.botonesPaginado-dispel').className = 'botonesPaginado'
    }, 500);

    useEffect(()=>{
        dispatch(getAllDogs())
        dispatch(getTemperaments())
        dispatch(getDetail())
    }, [dispatch])

    const numeroDogs = search === '' ? statedogs.slice(currentPage,currentPage+8) : stateFilter.slice(currentPage,currentPage+8)

    const nextPage = () => {
        
        if(statedogs.slice(currentPage+8,currentPage+16).length > 0 && stateFilter.length < 1){
            setCurrentPage(currentPage+8)
        }
        if(stateFilter.slice(currentPage+8,currentPage+16).length > 0 && statedogs.slice(currentPage+8,currentPage+16).length > 0){
            setCurrentPage(currentPage+8)
        }
        
    }
    const prevPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage-8)
        }
    }
    // const onSearchChange = (event) => {
    //     setCurrentPage(0)
    //     setsearch(event.target.value)
    //     dispatch(filterTemperament(event.target.value))
    // }

    // const onSearchChange = (event) => {
    //     setCurrentPage(0)
    //     setsearch(event.target.value)
    //     dispatch(filterTemperament(event.target.value))
    // }

    return (
        <div className="Homepage">
            <div className="contenedor-paginado">
                {/* <input type="text" value={search} onChange={onSearchChange}/>
                <hr/>*/}
                <InputBusqueda setCurrentPage={setCurrentPage} setsearch={setsearch} temp={stateTemperaments}/>
                {/* <select name="select" onChange={e => onSearchChange(e)}>
                    <option value=''>Temperamento</option>
                    {stateTemperaments.map(e => (
                        <option value={e.Nombre}>{e.Nombre}</option>
                    ))}
                </select> */}
                <div className="botonesPaginado-dispel">
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Siguiente</button>
                </div> 
                { search && stateFilter.length < 1 ? <Loading/>: null}
                { !search && statedogs.length < 1 ? <Loading/>: null}
                <Paginado arraydogs={numeroDogs}/>
                {/* {numeroDogs ? numeroDogs.map(elemento => (
                        <Carddog id={elemento.ID} raza={elemento.Nombre} 
                        pesomin={elemento.PesoMin} pesomax={elemento.PesoMax} 
                        temperamento={elemento.Temperamento} image={elemento.image}/>
                )) : <p>No hay perros</p>} */}
            </div>
        </div>
    )
}

export default Homepage