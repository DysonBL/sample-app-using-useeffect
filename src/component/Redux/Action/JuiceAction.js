import { ActionType } from "./Action-type";
import axios from "axios";

export const GET_JUICE=()=>{
    return async (dispatch )=>{
      await axios
    .get("http://localhost:3005/Juice")
    .then((response)=>{
        dispatch({
            type:ActionType.GET_JUICE,payload:response.data
        })
        console.log(response,"juice")   
    })
    .catch((error)=>{console.log(error,"error in get")}) 
    }
}
export const POST_JUICE=(Data)=>{
    return async (dispatch)=>{
        await axios
        .post("http://localhost:3005/Juice",Data)
        .then((response)=>{
            console.log(response,"post juice")
            dispatch({
                type:ActionType.POST_JUICE,payload:response.data
            })
        })
        .catch((error)=>{console.log(error,"Error in post juice")})
    }
}
export const REMOVE_JUICE=(data)=>{
    return async(dispatch)=>{
        await axios
        .delete(`http://localhost:3005/Juice/${data}`)
        .then((response)=>{
            dispatch({
                type:ActionType.REMOVE_JUICE,payload:response.data
            })
            console.log(response,"Juice del")
        })
        .catch((error)=>{console.log(error,"Error in juice remove")})
    }
}

export const PUT_JUICE=(Data)=>{
    return async (dispatch)=>{
        await axios
        .put(`http://localhost:3005/Juice${Data.Id}`,Data)
        .then((response)=>{
            console.log(response,"post juice")
            dispatch({
                type:ActionType.POST_JUICE,payload:response.data
            })
        })
        .catch((error)=>{console.log(error,"Error in post juice")})
    }
}

