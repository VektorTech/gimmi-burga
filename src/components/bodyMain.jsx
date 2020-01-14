import React from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryList } from './categoryList';
import { FoodList } from '../containers/foodList';

const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 4.5rem);
    overflow-y: scroll;
    padding: 2rem 0 0 10%;
`;

const HomeScreen = () => (
    <>
        <CategoryList />
        <FoodList />
    </>
);

const AddToCart = () => {
    let { foodID } = useParams();
    console.log(foodID);

    return (
    <>
        <FoodList />
    </>);
};

export const BodyMain = ({children}) => (
    <Wrapper>
         <BrowserRouter>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/add-to-cart/:foodID" component={AddToCart} />
        </BrowserRouter>  
    </Wrapper>
);