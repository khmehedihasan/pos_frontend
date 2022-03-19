const initialState = { allSale:[], singleSale:{} };

function sale(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_SALE' : 
            state.allSale = action.data;
            return state;
           

        default : return state;
    }

}

export default sale;