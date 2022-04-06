import {ActionType}  from "./Action-type";

export const setProducts=(Products)=>{
    return{
        type:ActionType.GET_PRODUCTS,
        paload:Products,
    }    
};
export const selectedProdect=(Product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        paload:Product,
    }    
};
export const removedProdect=(Product)=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODECT,
        paload:Product,
    }    
};
