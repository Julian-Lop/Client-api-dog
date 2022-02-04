import axios from 'axios';
export const OBTENER_DOGS = 'OBTENER_dOGS'
export const OBTENER_TEMPERAMENTOS = 'OBTENER_TEMPERAMENTOS'
export const OBTENER_INFO_RAZA = 'OBTENER_INFO_RAZA'
export const FILTRAR_TEMPERAMENTO = 'FILTRAR_TEMPERAMENTO'
export const FILTRAR_RAZA = 'FILTRAR_RAZA'
export const ORDENAR_PESO = 'ORDENAR_PESO'
export const ORDENAR_ALFABETICO = 'ORDENAR_ALFABETICO'
export const CREAR_DOG = 'CREAR_DOG'


export function getAllDogs(dogname){
    return async function(dispatch){
        try {
            if(dogname){
                return fetch(`http://localhost:3001/dogs?name=${dogname}`)
                .then(response => response.json())
                .then(json => {
                   return dispatch({type: OBTENER_DOGS, payload: json})
                }).catch(err => {
                    return dispatch({type: OBTENER_DOGS, payload: err})
                })
            }else{
                let json = await fetch(`http://localhost:3001/dogs`)
                .then(response => response.json())
                return dispatch({type: OBTENER_DOGS, payload: json})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTemperaments(){
    return async function(dispatch){
        let json = await fetch('http://localhost:3001/temperament')
        .then(response => response.json())
        return dispatch({type: OBTENER_TEMPERAMENTOS, payload: json})
    }
}

export function getDetail(idRaza){
    return function(dispatch){
        try {
            if(idRaza){
                return fetch(`http://localhost:3001/dogs/${idRaza}`)
                .then(response => response.json())
                .then(json => {
                    dispatch({type: OBTENER_INFO_RAZA, payload: json})
                }).catch(err => {
                    dispatch({type: OBTENER_INFO_RAZA, payload: err})
                })
            }else{
                dispatch({type: OBTENER_INFO_RAZA, payload: idRaza})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterTemperament(temeperamento){
    return {type: FILTRAR_TEMPERAMENTO, payload: temeperamento}
}

export function filterRaza(){
    return{type: FILTRAR_RAZA}
}

export function organizeByWeight(opcionWeight){
    return {type: ORDENAR_PESO,payload:opcionWeight}
}

export function organizeByAlphabet(opcionAlphabet){
    return {type: ORDENAR_ALFABETICO, payload: opcionAlphabet}
}

export function createDog(attributesDog){
    return async function(dispatch){
        let createdDog = await axios.post(`http://localhost:3001/dog`,attributesDog)
        console.log(createDog)
        return createdDog
    } 
}