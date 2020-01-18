import { combineReducers } from 'redux';
import product from './product.reducer';
import cart from './cart.reducer';

const reducer = combineReducers({product, cart});

export default reducer;