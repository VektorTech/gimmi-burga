import styled from 'styled-components';

export const FoodCartWrapper = styled.div`
    padding: 1rem 4rem 0 4rem;
    background-color: #f9f9f9;

    @media screen and (max-width: 1024px) {
        padding: 6rem 3rem;
    }
`;

export const ListInfo = styled.li`
    float: right;
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: .7rem;
    background-color: #e6c212;
`;

export const CartTitle = styled.h1`
    margin-bottom: 2rem;
`;

export const Total = styled.p`
    font-size: 1.8rem;
    font-weight: 800;
    display:inline;
`;

export const CartItemsContainer = styled.div`
    height: calc(60vh - 13rem);  
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const TotalAmount = styled.h1`
    font-size: 2.2rem;
    float: right;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 2rem;
    margin-top: 3.5rem;
`;

export const CheckoutBtn = styled.button`
    position: absolute;
    right: 0;
    width: 15%;
    height: 5rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem 0 0 1rem;
    background-color: #e6c212;

    & span {
        margin-left: .5rem;
    }

        
    @media screen and (max-width: 1024px) {
        width: 40%;
    }
`;