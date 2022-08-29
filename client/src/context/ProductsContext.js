import React, { useReducer } from "react";
import {
  actions,
  initialState,
  productReducer,
} from "../reducers/ProductReducer";
import { getAllProducts } from "../services";

export const ProductContext = React.createContext({});

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const value = {
    products: state.products,
    getAllProducts: ()=>{
        const asyncDispatch = async () => {
            dispatch({ type: "loading" });
            await getAllProducts().then((res) => {
              dispatch({ type: actions.GET_ALL_PRODUCTS, products: res.data });
            });
          };
          asyncDispatch()
    }
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
