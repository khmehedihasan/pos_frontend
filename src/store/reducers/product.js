const initialState = { allProduct:[],singleProduct:{} };

function product(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_PRODUCT' : 
            state.allProduct = action.data;
            return state;

        default : return state;
    }

}

export default product;