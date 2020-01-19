import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root-reducer';

import productSagas from './sagas/products.saga';
import searchFood from './sagas/search_food.saga';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer({key:'root', storage}, rootReducer);

const store = createStore( persistedReducer, applyMiddleware(sagaMiddleware) );
const persistor = persistStore(store);

sagaMiddleware.run(productSagas);
sagaMiddleware.run(searchFood);

export { store, persistor };