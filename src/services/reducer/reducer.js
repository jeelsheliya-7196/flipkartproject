const initial = {
    login: false,
    products : []
}

export const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case '':
            
            // return {
            //     ...state,
            //     products: [...state.products, action.payload]
            // }
    
        default:
            return state;
    }
}