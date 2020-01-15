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
        {products.map( product => (
            <FoodItem key={product._id} {...product} />
        ))}
    </FoodListWrapper>
);

const mapStateToProps = (store) => {
    return {
        products: store.products.all_products
    };
};

export default connect(mapStateToProps)(FoodList);