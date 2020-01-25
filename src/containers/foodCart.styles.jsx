import styled from 'styled-components';

export const FoodCartWrapper = styled.div`
    /* margin-right: 10%; */
`;

export const CartTitle = styled.h1``;

export const Total = styled.p`
    display:inline;
`;

export const CartItemsContainer = styled.div`
    height: calc(60vh - 6rem);
    overflow-y: scroll;
`;

export const TotalAmount = styled.h1`
    float: right;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 2rem;
`;

export const CheckoutBtn = styled.button`
    position: absolute;
    right: 0;
    margin-top: 3rem;
    width: 15%;
`;