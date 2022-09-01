export const initialState= {
    products: [],
    count: 0
}

export const actions = {
    GET_PRODUCTS: "GET_PRODUCTS",
    FILTER: "FILTER",
    ORDER: "ORDER",
    SEARCH: "SEARCH"
}

export const productReducer = (state, action)=>{
    switch(action.type){
        case actions.GET_PRODUCTS:
            return {
                ...state, products: action.data.products, count: action.data.count
            }
        case actions.ORDER:
            return{
                ...state, products: action.products
            }
        default:
            return state
    }
}