import { ActionType } from "./Action-type";
import axios from "axios";

export const GET_PRODUCTS = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3004/user")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((error) => {
        console.log(error, "error in get");
      });
  };
};

export const POST_PRODUCT = (datas) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3004/user", datas)
      .then((res) => {
        dispatch(postProdect(res.datas));
      })
      .catch((error) => {
        console.log(error, "error in post");
      });
  };
};
export const REMOVE_PRODUCT = (data) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:3004/user/${data}`)
      .then((res) => {
        dispatch(GET_PRODUCTS());
        dispatch(removedProduct(data));
      })
      .catch((error) => {
        console.log(error, "Error in Remove");
      });
    console.log(data, "removedata");
  };
};
export const PUT_PRODUCT = (Data, id) => {
  console.log(Data, "PUT_PRODUCT");
  return async (dispatch) => {
    await axios
      .put(`http://localhost:3004/user/${id}`, Data)
      .then((res) => {
        console.log(res, "EDIT==>");
      })
      .catch((error) => {
        console.log(error, " Error in EDit");
      });
    console.log(Data, "EDIt==>");
  };
};
export const setProducts = (Products) => {
  return {
    type: ActionType.GET_PRODUCTS,
    payload: Products,
  };
};
export const postProdect = (Product) => {
  return {
    type: ActionType.POST_PRODUCT,
    payload: Product,
  };
};
export const removedProduct = (Product) => {
  return {
    type: ActionType.REMOVE_PRODUCT,
    payload: Product,
  };
};
export const editProduct = (Data) => {
  return {
    type: ActionType.PUT_PRODUCT,
    payload: Data,
  };
};
