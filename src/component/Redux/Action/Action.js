import {ActionType}  from "./Action-type";
import axios from "axios";

export const GET_PRODUCTS=()=>{
    return async (dispatch)=>{
      await axios
    .get("http://localhost:3006/product")
    .then((res)=>{
        console.log(res,"data==>")
        dispatch(setProducts(res.data))
    })
    .catch((error)=>{
        console.log(error,"error in get")
    }) 
    }
}

export const POST_PRODUCT=(datas)=>{
    return async (dispatch)=>{
        await axios
        .post("http://localhost:3006/product",datas)
        .then((res)=>{
            console.log(res,"post")
            dispatch( postProdect(res.datas))
        })
        .catch((error)=>{
            console.log(error,"error in post")
        })
    }
}
export const REMOVE_PRODECT=(data)=>{
     return async (dispatch)=>{
         await axios
         .delete(`http://localhost:3006/product/${data}`)
         .then((res)=>{
             console.log(res,"Remove")
             dispatch(removedProdect(data))
             dispatch(GET_PRODUCTS())
         })
         .catch((error)=>{
             console.log(error,"Error in Remove")
         })
         console.log(data,"removedata")
     }
}
export const setProducts=(Products)=>{

    return{
        type:ActionType.GET_PRODUCTS,
        payload:Products,
    } 
};
export const postProdect=(Product)=>{
    return{
        type:ActionType.POST_PRODUCT,
        payload:Product,
    }    
};
export const removedProdect=(Product)=>{
    return{
        type:ActionType.REMOVE_PRODECT,
        payload:Product,
    }    
}
