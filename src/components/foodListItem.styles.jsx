import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FoodItemWrapper = styled.div`
    width: 31.2%;
    min-width: 16rem;
    height: 10rem;
    margin: .7rem 1%;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 1rem;
    text-align: center;
    background: url(${props => props.image}) center;
    background-size: 170%;
    transition: background-size .5s;

    &:hover {
        background-size: 250%;
    }

    &::before {
        content: '';
        top:0;left:0;
        display: block;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        background: rgba(240,240,240,.75);
    }
`;

export const ItemImg = styled.img`
    margin-top: -100%;
    /* margin-bottom: .7rem; */
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    filter: drop-shadow(0 0 .3rem rgba(100,100,100,0.3));
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
    font-weight: bold;
    margin-left: .2rem;
    
    span {
        margin-right: .5rem;
        color: #888;
    }
`;

export const Anchor = styled(Link)`
`;