import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FoodItemWrapper = styled.div`
    width: 30%;
    height: 10rem;
    margin: .7rem 1%;
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 1rem;
    background-color: red;
`;

export const ItemTitle = styled.div`
    width: 100%;
    height: 20%;
    background-color: blue;
`;

export const ItemPrice = styled.div`
    width: 100%;
    height: 20%;
    background-color: orange;
`;

export const Anchor = styled(Link)`
`;