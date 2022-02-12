import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAIL,
  ADD_TO_CART,
} from "../actions/types";

const initialState = {
  product: {},
  loading: false,
  error: "",
  quantity: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity + parseInt(action.payload),
      };
    default:
      return state;
  }
};
