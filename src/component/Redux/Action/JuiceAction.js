import { ActionType } from "./Action-type";
import axios from "axios";



export const GET_JUICE=()=>{
    return async (dispatch )=>{
        let response
    try{
       response= await axios
        .get("http://localhost:3005/Juice")
    }
    catch(error){
        console.log(error,"Error in Get juice not found")
    }
    finally{
        if(response.data){
            dispatch({
                type:ActionType.GET_JUICE,payload:response.data
            })
        }
        else{

             console.log("Juice get calling  not Found..!!!")
        }
    }
       
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
           // dispatch(GET_JUICE())
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

export const PUT_JUICE=(Data,Id)=>{
    console.log([Data,Id],"PUT_JUICEEEE")
    return async (dispatch)=>{
        await axios
        .put(`http://localhost:3005/Juice/2`,Data)
        console.log(Data.Id,"PUT_JUICe")
        .then((response)=>{
            console.log(response,"post juice")
            dispatch({
                type:ActionType.POST_JUICE,payload:response.data
            })
        })
        .catch((error)=>{console.log(error,"Error in post juice")})
    }
}

