import { ActionType } from "../Action/Action-type";

const initialState = [{
    Id: "",
    Name: ""
}]


export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.GET_PRODUCTS:
            return { ...state, Product: payload };
        default:
            return state;
    }
}


