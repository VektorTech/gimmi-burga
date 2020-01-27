import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FoodItem } from '../components/foodListItem';
import { getFoodList } from '../redux/selectors/food-list.selector';

const FoodListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const FoodList = ({products}) => (
    <FoodListWrapper>
        {Object.keys(products).length ? Object.keys(products).map( id => (
            <FoodItem key={id} {...products[id]} />
        )) : <p>Populating...</p>} 
    </FoodListWrapper>
);

const mapStateToProps = (store, props) => {
    return {
        products: getFoodList(store, props.category)
    };
};

export default connect(mapStateToProps)(FoodList);