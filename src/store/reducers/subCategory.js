const initialState = [] ;

function subCategory(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_SUB_CATEGORY' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default subCategory ;