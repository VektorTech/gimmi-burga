import { combineReducers } from 'redux';
import product from './product.reducer';
import cart from './cart.reducer';
import user from './user.reducer';

const reducer = combineReducers({product, cart, user});

export default reducer;