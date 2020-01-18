import React from 'react';
import styled from 'styled-components';
import { FoodItem } from '../components/foodListItem';
import { connect } from 'react-redux';

const FoodListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const FoodList = ({products}) => (
    <FoodListWrapper>
        {products.length ? products.map( product => (
            <FoodItem key={product._id} {...product} />
        )) : <p>Populating...</p>} 
    </FoodListWrapper>
);

const mapStateToProps = (store) => {
    return {
        products: store.product.all_products
    };
};

export default connect(mapStateToProps)(FoodList);