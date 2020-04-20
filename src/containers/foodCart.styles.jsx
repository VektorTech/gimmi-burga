import styled from 'styled-components';

export const FoodCartWrapper = styled.div`
    padding: 3rem 2rem 0 2rem;
    background-color: #f9f9f9;
      
    @media screen and (max-width: 1024px) {
        padding: 3rem 2rem;
    }
`;

export const ListInfo = styled.li`
    float: right;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: .7rem;
    background-color: #e6c212;
    text-transform: uppercase;
`;

export const CartTitle = styled.h1`
    margin-bottom: 1rem;
`;

export const Total = styled.p`
    font-size: 1rem;
    font-weight: 800;
    display:inline;
`;

export const CartItemsContainer = styled.div`
    height: calc(60vh - 10rem);  
    overflow-x: hidden;
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