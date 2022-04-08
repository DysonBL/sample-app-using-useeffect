import { ActionType } from "../Action/Action-type";

const initialState = {
    Product:[]
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            console.log(action,"vada")
            return {state, Products: action.payload };
        default:
            return state;
    }
}
export const PostReducer =(state=initialState,action)=>{
    switch(action.type){
        
        case ActionType.POST_PRODUCT:
            return {state, Products: action.payload };
        default:
                return state;
    }
}
export const RemoveReducer =(state=initialState,action)=>{
    switch(action.type){
        case ActionType.REMOVE_PRODUCT:
            return state
        default:
                return state;
    }
}
export const PutReducer =(state=initialState,action)=>{
    switch(action.type){
        case ActionType.PUT_PRODUCT:
            return 
        default:
            return state;
    }
}

            




