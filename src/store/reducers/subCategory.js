const initialState = { allSubCategory:[], singleCategory:{} };

function subCategory(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_SUB_CATEGORY' : 
            state.allSubCategory = action.data;
            return state;
           

        default : return state;
    }

}

export default subCategory ;