import { combineReducers } from "redux";
import { ProductReducer, JuiceReducer } from "../Reducer/ProductReducer";

const reducer = combineReducers({
  allproducts: ProductReducer,
  allJuice: JuiceReducer,
});
export default reducer;
