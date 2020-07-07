import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer';
import pokeReducer from './pokeReducer';
import promiseMiddleware from 'redux-promise-middleware';


const rootReducer = combineReducers({
    reducer, 
    pokeReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));