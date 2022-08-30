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
    data: state,
    getAllProducts: (page)=>{
        const asyncDispatch = async (page) => {
            dispatch({ type: "loading" });
            await getAllProducts(page).then((res) => {
              dispatch({ type: actions.GET_ALL_PRODUCTS, data: res.data });
            });
          };
          asyncDispatch(page)
    }
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
