import { combineReducers } from "redux";
import { PostReducer, ProductReducer, PutReducer, RemoveReducer } from "./ProductReducer";

const reducer = combineReducers({
    allproducts:ProductReducer,
    postproduct:PostReducer,
    deleteproduct:RemoveReducer,
    editproduct:PutReducer
})
export default reducer;