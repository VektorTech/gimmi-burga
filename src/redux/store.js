import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root-reducer';

import productSagas from './sagas/products.saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(productSagas);

export default store;