import React, { useReducer, useState } from "react";
import {
  actions,
  initialState,
  productReducer,
} from "../reducers/ProductReducer";
import { getAllProducts, getFemaleProducts, getMaleProducts, getOfferedProducts, getUnisexProducts } from "../services";

export const ProductContext = React.createContext({});

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [actualAction, setActualAction] = useState('')

  const value = {
    actualAction,
    data: state,
    getAllProducts: (page)=>{
        const asyncDispatch = async (page) => {
            dispatch({ type: "loading" });
            await getAllProducts(page).then((res) => {
              dispatch({ type: actions.GET_PRODUCTS, data: res.data });
            });
          };
          asyncDispatch(page)
          setActualAction('ALL')
    },
    getOfferedProducts: (page)=>{
      const asyncDispatch = async (page) => {
          dispatch({ type: "loading" });
          await getOfferedProducts(page).then((res) => {
            dispatch({ type: actions.GET_PRODUCTS, data: res.data });
          });
        };
        asyncDispatch(page)
        setActualAction('OFFERED')
  },
    getMaleProducts: (page)=>{
      const asyncDispatch = async (page) => {
          dispatch({ type: "loading" });
          await getMaleProducts(page).then((res) => {
            dispatch({ type: actions.GET_PRODUCTS, data: res.data });
          });
        };
        asyncDispatch(page)
        setActualAction('MALE')
  },
    getFemaleProducts: (page)=>{
      const asyncDispatch = async (page) => {
          dispatch({ type: "loading" });
          await getFemaleProducts(page).then((res) => {
            dispatch({ type: actions.GET_PRODUCTS, data: res.data });
          });
        };
        asyncDispatch(page)
        setActualAction('FEMALE')
  },
    getUnisexProducts: (page)=>{
      const asyncDispatch = async (page) => {
          dispatch({ type: "loading" });
          await getUnisexProducts(page).then((res) => {
            dispatch({ type: actions.GET_PRODUCTS, data: res.data });
          });
        };
        asyncDispatch(page)
        setActualAction('UNISEX')
  },
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
