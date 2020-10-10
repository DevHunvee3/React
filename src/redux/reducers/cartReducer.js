import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/types';

const initialState = {
    products:[]
}

export default function (state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT:
        case REMOVE_PRODUCT:
            console.log("Reducer " + action.type);
            return {...state, products : action.payload}
        default:
            return state;
    }
}
