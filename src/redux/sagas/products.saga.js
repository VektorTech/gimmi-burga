import { put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actions/action-types';

function* allProducts(){
    try {
        const products = yield fetch('http://localhost:5000/products').then(res => res.json());
        yield put({type: actionTypes.PRODUCTS_FETCHED, payload: products});
    } catch(err){
        console.log(err)
    }
}

function* fetchAllProducts(){
    yield takeLatest(actionTypes.GET_ALL_PRODUCTS, allProducts);
}

export default fetchAllProducts;