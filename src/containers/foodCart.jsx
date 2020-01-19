import React from 'react';
import * as c from './foodCart.styles';
import { connect } from 'react-redux';

import { CartDeliveryInfo } from '../components/cartDeliveryInfo';
import { CartListItem, DeliveryItem } from '../components/cartListItem';

import { removeFromCart } from '../redux/actions/cart.actions';

const FoodCart = ({cart, removeFromCart}) => {
    return (
        <c.FoodCartWrapper>
            <c.CartTitle>Order List</c.CartTitle>
            <CartDeliveryInfo />
            <div>      
                { cart.map( (item, i) => <CartListItem key={item.name+"_"+i} {...item} removeFromCart={removeFromCart} />) }
            </div>
            <DeliveryItem />
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

export default connect( 
    ({cart}) => ({ cart: cart.cart }),
    (dispatch) => ({removeFromCart: (id) => dispatch(removeFromCart(id))}) )(FoodCart);