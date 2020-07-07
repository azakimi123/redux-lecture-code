import axios from 'axios';


const initialState = {
    pokemon: {},
    loading: false,
    errorMessage: ''
}

const GET_POKEMON = 'GET_POKEMON';
export function getPokemon(){
    const newPokemon = axios.get('http://pokeapi.co/api/v2/pokemon/1');
    return {
        type: GET_POKEMON,
        payload: newPokemon
    }
}

export default function pokeReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) { 
        case GET_POKEMON + '_PENDING':
            return {...state, loading: true};
        case GET_POKEMON + '_FULFILLED':
            return {...state, pokemon: payload, loading: false};
        case GET_POKEMON + '_REJECTED':
            return {...state, loading: false, errorMessage: payload};
        default:
            return state;
    }
}