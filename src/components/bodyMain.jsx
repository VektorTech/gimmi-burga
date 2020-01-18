import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { CategoryList } from './categoryList';
import FoodList from '../containers/foodList';

const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 4.5rem);
    overflow-y: scroll;
    padding: 2rem 0 0 10%;
`;

export const BodyMain = () => {
    const history = useHistory();
    return (
        <Wrapper>
            <>
            <CategoryList />
            <FoodList category={history.location.search.split("=")[1]} />
            </> 
        </Wrapper>
    );
};