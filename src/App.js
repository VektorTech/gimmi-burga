import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getAllProducts } from './redux/actions/product.actions';

import Header from './containers/header';
import FoodCart from './containers/foodCart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BodyMain } from './components/bodyMain';
import Footer from './components/Footer';

import Signup from './pages/signup';
import Signin from './pages/signin';
import AddToCart from './pages/add-to-cart';
import FoodSearchList from './containers/foodSearchList';


const BodyDiv = styled.div`
    max-width: 92%;
    margin: 0 4%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0 2.5%;
`;


const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 4.5rem);
    overflow-y: scroll;
    padding: 2rem 0 0 10%;
`;

const Body = () => <BodyDiv><BodyMain /><FoodCart /></BodyDiv>;

const SearchView = () => (
    <BodyDiv>
        <Wrapper><FoodSearchList /></Wrapper>
        <FoodCart />
    </BodyDiv>);

const AddItemView = () => <BodyDiv><AddToCart /><FoodCart /></BodyDiv>;

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
                <Switch>
                    <Route exact path="/" component={Body}/>
                    <Route exact path="/category" component={Body}/>
                    <Route exact path="/search" component={SearchView}/>
                    <Route path="/add-to-cart/:foodID" component={AddItemView} />
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
                <Footer />
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