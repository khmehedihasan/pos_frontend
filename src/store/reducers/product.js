const initialState = [] ;

function product(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_PRODUCT' : 
            state = action.data;
            return state;

        default : return state;
    }

}

export default product;