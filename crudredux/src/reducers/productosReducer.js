import {
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO
} from '../types';
//cada reducer tiene su propo state

const initialState = {
    productos: [],
    error: false, 
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}