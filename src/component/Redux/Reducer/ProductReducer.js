import { ActionType } from "../Action/Action-type";

const initialState = {
    Product: [],
    JUICE: []
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return { state, Products: action.payload };

        case ActionType.POST_PRODUCT:
            return { state, Products: action.payload };

        case ActionType.REMOVE_PRODUCT:
            return state
        case ActionType.PUT_PRODUCT:
            return state
        default:
            return state;
    }
}
export const JuiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_JUICE:
            return { state, JUICE: action.payload };

        case ActionType.POST_JUICE:
            return { state, JUICE: action.payload };

        case ActionType.REMOVE_JUICE:
            return state
        case ActionType.PUT_JUICE:
            return state
        default:
            return state;
    }

}






