import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {store, persistor} from './redux/store';
import Header from './containers/header';
import Footer from './components/Footer';

import * as serviceWorker from './serviceWorker';

import './styles/style.css'; 

ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Header />
            <App />
            <Footer/>
        </BrowserRouter>
    </PersistGate>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
