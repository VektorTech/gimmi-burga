import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { getAllProducts } from './redux/actions/product.actions';

import FoodCart from './containers/foodCart';
import { BodyMain } from './components/bodyMain';

// import Signup from './pages/signup';
// import Signin from './pages/signin';
import AddToCart from './pages/add-to-cart';
import FoodSearchList from './containers/foodSearchList';

const BodyDiv = styled(animated.div)`
    will-change: transform, opacity;
    max-width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 100%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-width: thin;
    /* overflow-y: scroll; */
    /* padding: 2rem 0 0 10%; */
`;

const Body = () => (
    <>
    <Wrapper>
        <BodyMain />
    </Wrapper>
    <FoodCart />
    </> );

const SearchView = () => (
    <>
    <Wrapper>
        <FoodSearchList />
    </Wrapper>
    <FoodCart />
    </> );

const AddItemView = () => (
    <>
    <Wrapper>
        <AddToCart />
    </Wrapper>
    <FoodCart />
    </> );

const App = ({products, getAllProducts}) => {
    useEffect(() => {
        if(Object.keys(products).length === 0){
            getAllProducts();
        }
    }, []);

    let location = useLocation();
    
    const transition = useTransition(location, location => location.pathname, {
        from: { transform: 'translate3d(-100%, 0, 0) scale3d(0.5,0.5,1)', opacity: 0, position: 'absolute' },
        enter: { transform: 'translate3d(0%, 0, 0) scale3d(1,1,1)', opacity: 1, position: 'relative' },
        leave: { transform: 'translate3d(100%, 0, 0) scale3d(0.5,0.5,1)', opacity: 0, position: 'absolute' }
    });

    return transition.map( ({item, props, key}) => (
        <BodyDiv key={key} style={props}>
        <Switch location={item}>
            <Route exact path="/" component={Body}/>
            <Route path="/category" component={Body}/>
            <Route path="/search" component={SearchView}/>
            <Route path="/add-to-cart/:foodID" component={AddItemView}/>
            
            {/* <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/> */}
        </Switch>
        </BodyDiv>
    ) );
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