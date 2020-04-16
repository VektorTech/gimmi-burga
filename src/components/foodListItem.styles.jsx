import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FoodItemWrapper = styled.div`
    width: 30%;
    height: 10rem;
    margin: .7rem 1%;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 1rem;
    background-color: #eee;
    text-align: center;
`;

export const ItemImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const ItemTitle = styled.div`
    width: 95%;
    height: 20%;
    font-size: 1rem;
    padding-top: .6rem;
    margin-left: .2rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;

`;

export const ItemPrice = styled.div`
    width: 100%;
    height: 20%;
    font-size: .7rem;
    margin-left: .2rem;
    
    span {
        margin-right: .5rem;
    }
`;

export const Anchor = styled(Link)`
`;