import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getAllProducts } from './redux/actions/product-actions';

import Header from './containers/header';
import FoodCart from './containers/foodCart';
import { BrowserRouter, Route } from 'react-router-dom';
import { BodyMain } from './components/bodyMain';

import Signup from './pages/signup';
import Signin from './pages/signin';

const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
`;

const Body = () => <BodyDiv><BodyMain /><FoodCart /></BodyDiv>;

class App extends Component {
    componentDidMount(){
        if(this.props.products.length === 0){
            this.props.getAllProducts();
        }
    }

    render(){
        return( 
            <>
                <BrowserRouter>
                <Header />
                    <Route exact path="/" component={Body}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                </BrowserRouter>
            </> 
        );
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.product.all_products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => dispatch(getAllProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);