import {
    GET_ACTIVITY,
    BY_ACTIVITY,
    BY_CONTINENT,
    BY_NAME,
    BY_ODER,
    BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    FAILURE,
    LOADING
}from './ActionsName'
import axios from 'axios';

const url = 'https://servercountries-2u1b.onrender.com';

export function getCountries() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries`)
            return dispatch({
                type: GET_COUNTRIES,                            //Realiza una solicitud GET al endpoint
                                                                //y una vez que se recibe la respuesta, 
                                                                //dispara una acción para almacenar la lista de países
                                                                //en el store de la aplicación.
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            dispatch({
                type: LOADING
            })
            const res = await axios.get(`${url}/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post('https://servercountries-2u1b.onrender.com/activity', payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}



export function getByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries?name=${name}`)
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getActivity() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/activity`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//devuelven un objeto de acción con un tipo específico y un payload que serán
// usado para ordenar, filtrar o realizar acciones en el Home
export function byOrder(payload) {
    return {
        type: BY_ODER,
        payload
    }
}

export function byPopulation(payload) {
    return {
        type: BY_POPULATION,
        payload
    }
}

export function byContinent(payload) {
    return {
        type: BY_CONTINENT,
        payload
    }
}

export function byActivity(payload) {
    return {
        type: BY_ACTIVITY,
        payload
    }
}