const initialState = [] ;

function sale(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_SALE' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default sale;