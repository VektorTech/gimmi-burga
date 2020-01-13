import React from 'react';
import * as c from './foodCart.styles';
import { CartDeliveryInfo } from '../components/cartDeliveryInfo';

const FoodCart = () => {
    return (
        <c.FoodCartWrapper>
            <c.CartTitle>Order List</c.CartTitle>
            <CartDeliveryInfo />
        </c.FoodCartWrapper>
    );
}

export default FoodCart;