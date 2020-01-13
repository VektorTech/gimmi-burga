import React from 'react';
import * as c from './foodCart.styles';
import { CartDeliveryInfo } from '../components/cartDeliveryInfo';
import { CartListItem, DeliveryItem } from '../components/cartListItem';

const FoodCart = () => {
    return (
        <c.FoodCartWrapper>
            <c.CartTitle>Order List</c.CartTitle>
            <CartDeliveryInfo />
            <div>
                <CartListItem />
                <CartListItem />
                <CartListItem />
                <DeliveryItem />
            </div>
            <div>
                <c.Total>Total:</c.Total>
                <c.TotalAmount>$14.99</c.TotalAmount>
            </div>

            <c.ButtonWrapper>
                <c.CheckoutBtn>Checkout</c.CheckoutBtn>
            </c.ButtonWrapper>
        </c.FoodCartWrapper>
    );
}

export default FoodCart;