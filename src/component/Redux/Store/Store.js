import { createStore,applyMiddleware } from "redux";
import reducer from "../Reducer/Compinall";
import thunk from "redux-thunk";

const middleware=[thunk]
const Store =createStore(reducer,(applyMiddleware(...middleware)));


export default Store ;