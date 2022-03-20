const initialState = [] ;

function purchase(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_PURCHASE' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default purchase;