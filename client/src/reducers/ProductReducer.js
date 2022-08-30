export const initialState= {
    products: [],
    count: 0
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
                ...state, products: action.data.products, count: action.data.count
            }
        default:
            return state
    }
}