export const initialState= {
    products: []
}

export const actions = {
    GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
    FILTER: "FILTER",
    ORDER: "ORDER",
    SEARCH: "SEARCH"
}

export const productReducer = (state, action)=>{
    switch(action.type){
        case actions.GET_ALL_PRODUCTS:
            return {
                products: action.products
            }
        default:
            return state
    }
}