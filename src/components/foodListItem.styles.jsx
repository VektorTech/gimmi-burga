import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FoodItemWrapper = styled.div`
    width: 31.2%;
    min-width: 25rem;
    height: 15rem;
    margin: 1rem .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover div:nth-of-type(1) {
        background-size: 250%;

        & div {
            background: rgba(240,240,240,.4);
        }
    }
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 1rem;
    text-align: center;
    background: url(${props => props.image}) center;
    background-size: 170%;
    transition: background-size .5s;
`;

export const Transparent = styled.div`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background: rgba(240,240,240,.75);
    transition: .5s;
`;

export const ItemImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    filter: drop-shadow(0 0 .3rem rgba(100,100,100,0.3));
`;

export const ItemTitle = styled.div`
    width: 95%;
    height: 20%;
    font-size: 1.3rem;
    padding-top: .6rem;
    margin-left: .2rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ItemPrice = styled.div`
    width: 100%;
    height: 20%;
    font-size: 1.1rem;
    font-weight: bold;
    margin-left: .2rem;
    
    span {
        margin-right: .5rem;
        color: #888;
    }
`;

export const Anchor = styled(Link)`
`;