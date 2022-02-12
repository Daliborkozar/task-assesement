import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAIL,
  ADD_TO_CART,
} from "./types";

import axios from "axios";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSucess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductFail = (error) => {
  return {
    type: FETCH_PRODUCT_FAIL,
    payload: error,
  };
};

export const addToCart = (quantity) => {
  return {
    type: ADD_TO_CART,
    payload: quantity,
  };
};

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(fetchProductRequest());
    const { data } = await axios.get("/data/data.json");
    dispatch(fetchProductSucess(data));
  } catch (error) {
    dispatch(fetchProductFail(error));
  }
};
