const initialState = [] ;

function category(state = initialState, action){
    switch(action.type){
        case 'ADD_ALL_CATEGORY' : 
            state = action.data;
            return state;

        case 'ADD_CATEGORY' : 
            
            state = [...state, action.data]
            return state;

        case 'REMOVE_CATEGORY' : 
            
            const ndata = state.filter((data)=>{
                return(data._id !== action.data);
            });
            state = ndata;
            return state;
           

        default : return state;
    }

}

export default category;