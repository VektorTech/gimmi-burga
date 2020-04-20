import React,{useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FoodItem } from '../components/foodListItem';
import { useHistory } from 'react-router-dom';
import { getSearchList } from '../redux/actions/product.actions';

const FoodListWrapper = styled.div`
    max-height: calc(100vh - 4.5rem);
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const FoodList = ({products, getSearchList}) => {
    const history = useHistory();
    const query = history.location.search.split("=")[1];
    
    useEffect(() => { getSearchList(query) });

    return (
        <FoodListWrapper>
            {Object.keys(products).length ? Object.keys(products).map( id => (
                <FoodItem key={id} {...products[id]} />
            )): null} 
        </FoodListWrapper>
    );
};

const mapStateToProps = (store) => {
    return {
        products: store.product.searched_products
    };
};

const mapDispatchToProps = (dispatch) => ({
    getSearchList: (query) => dispatch(getSearchList(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);