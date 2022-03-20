const initialState = [] ;

function supplier(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_SUPPLIER' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default supplier;