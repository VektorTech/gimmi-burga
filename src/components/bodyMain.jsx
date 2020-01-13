import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryList } from './categoryList';
import { FoodList } from '../containers/foodList';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0 0 10%;
`;

const HomeScreen = () => (
    <>
        <CategoryList />
        <FoodList />
    </>
);

export const BodyMain = ({children}) => (
    <Wrapper>
         <BrowserRouter>
            <Route path="/" component={HomeScreen} />
        </BrowserRouter>  
    </Wrapper>
);