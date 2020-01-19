import { takeLatest, put } from "redux-saga/effects";
import actionTypes from '../actions/action-types';

function* searchProducts(query){
    try {
        const products = yield fetch(`http://localhost:5000/search?q=${query}`).then(res => res.json());
        yield put({type:actionTypes.SEARCH_LIST_FETCHED, payload: products});
    } catch(err){
        console.log(err);
    }
}

function* fetchSearchList(){
    yield takeLatest(actionTypes.GET_SEARCH_LIST, searchProducts);
}

export default fetchSearchList;