import { ActionType } from "../Action/Action-type";

const initialState = {
    Product:[]
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            console.log(action,"vada")
            return {state, Products: action.payload };

        case ActionType.POST_PRODUCT:
            return {state, Products: action.payload };

        case ActionType.REMOVE_PRODECT:
            return state
            //  state.filter(user => user.id !== action.payload) 
        default:
            return state;
    }
}


