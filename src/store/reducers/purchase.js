const initialState = { allPurchase:[], singlePurchase:{} };

function purchase(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_PURCHASE' : 
            state.allPurchase = action.data;
            return state;
           

        default : return state;
    }

}

export default purchase;