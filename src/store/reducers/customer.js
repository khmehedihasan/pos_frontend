const initialState = [] ;

function customer(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_CUSTOMER' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default customer;