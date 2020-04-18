import styled from 'styled-components';

export const FoodCartWrapper = styled.div`
    /* margin-right: 10%; */
`;

export const CartTitle = styled.h1`
    margin-bottom: 1rem;
`;

export const Total = styled.p`
    font-size: 1rem;
    display:inline;
`;

export const CartItemsContainer = styled.div`
    height: calc(60vh - 10rem);
    overflow-y: scroll;
`;

export const TotalAmount = styled.h1`
    float: right;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 2rem;
    margin-top: 2.5rem;
`;

export const CheckoutBtn = styled.button`
    position: absolute;
    right: 0;
    width: 15%;
    height: 3rem;
    border: none;
    border-radius: 1rem 0 0 1rem;
    background-color: #e6c212;
`;