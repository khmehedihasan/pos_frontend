import { combineReducers } from 'redux';
import category from './category';
import subCategory from './subCategory';
import porduct from './product';
import supplier from './supplier';
import customer from './customer';
import purchase from './purchase';
import sale from './sale';

const rootReducer = combineReducers({
    category,
    subCategory,
    porduct,
    supplier,
    customer,
    purchase,
    sale,
});

export default rootReducer;