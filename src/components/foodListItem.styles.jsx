import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FoodItemWrapper = styled.div`
    width: 30%;
    height: 10rem;
    margin: .7rem 1%;
    border: 3px solid red;
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 1rem;
`;

export const ItemImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 1rem;
`;

export const ItemTitle = styled.div`
    width: 100%;
    height: 20%;
`;

export const ItemPrice = styled.div`
    width: 100%;
    height: 20%;
`;

export const Anchor = styled(Link)`
`;