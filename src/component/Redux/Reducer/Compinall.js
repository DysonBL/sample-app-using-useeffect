import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const reducer = combineReducers({
    allproducts:ProductReducer,
})
export default reducer;