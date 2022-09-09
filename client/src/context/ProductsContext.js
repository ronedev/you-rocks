import React, { useReducer, useState, useEffect } from "react";
import {
  actions,
  initialState,
  productReducer,
} from "../reducers/ProductReducer";
import { getAllProducts, getFemaleProducts, getMaleProducts, getOfferedProducts, getSearchProduct, getUnisexProducts } from "../services/product.js";
import { getTotalPages } from "../utils";

export const ProductContext = React.createContext({});

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [actualAction, setActualAction] = useState('')
  const [totalPages, setTotalPages] = useState([])
  const [limitProducts, setLimitsProducts] = useState(1);

  function orderByPrice(order){
    switch(order){
      case 'low':
        dispatch({type: actions.ORDER, products: state.products.sort((prevProduct, nextProduct) =>  prevProduct.price - nextProduct.price )})
        break;
      case 'high':
        dispatch({type: actions.ORDER, products: state.products.sort((prevProduct, nextProduct) =>  nextProduct.price - prevProduct.price )})
        break;
      default:
        return state
    }
  }

  function orderByDate(date){
    switch(date){
      case 'close':
        dispatch({type: actions.ORDER, products: state.products.sort((prevProduct, nextProduct) => (new Date(prevProduct.createdAt).getTime()) - (new Date(nextProduct.createdAt).getTime()))})
        break
      case 'distant':
        dispatch({type: actions.ORDER, products: state.products.sort((prevProduct, nextProduct) =>  (new Date(nextProduct.createdAt).getTime()) - (new Date(prevProduct.createdAt).getTime()))})
        break
      default:
        return state
    } 
  }

  async function getSearch(search){
    const response = await getSearchProduct(search)

    dispatch({type: actions.SEARCH, data: response.data})
  }

  useEffect(()=>{
    setLimitsProducts(1)
  },[actualAction])

  useEffect(() => {
    setTotalPages(getTotalPages(state))
  }, [state]);

  const value = {
    actualAction,
    data: state,
    totalPages,
    limitProducts,
    setLimitsProducts,
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
  orderByPrice,
  orderByDate,
  getSearch
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
