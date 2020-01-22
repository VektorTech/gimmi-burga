import React from 'react';
import { connect } from 'react-redux';

import {
    FoodCartWrapper,
    CartTitle,
    Total, TotalAmount,
    ButtonWrapper,
    CheckoutBtn
} from './foodCart.styles';

import { CartDeliveryInfo } from '../components/cartDeliveryInfo';
import { CartListItem, DeliveryItem } from '../components/cartListItem';

import { removeFromCart } from '../redux/actions/cart.actions';

const FoodCart = ({cart, removeFromCart}) => {
    return (
        <FoodCartWrapper>
            <CartTitle>Order List</CartTitle>
            <CartDeliveryInfo />
            <div>      
                { cart.map( (item, i) => <CartListItem key={item.name+"_"+i} {...item} removeFromCart={removeFromCart} />) }
            </div>
            <DeliveryItem />
            <div>
                <Total>Total:</Total>
                <TotalAmount>$14.99</TotalAmount>
            </div>
            <ButtonWrapper>
                <CheckoutBtn>Checkout</CheckoutBtn>
            </ButtonWrapper>
        </FoodCartWrapper>
    );
}

export default connect( 
    ({cart}) => ({ cart: cart.cart }),
    (dispatch) => ({removeFromCart: (id) => dispatch(removeFromCart(id))}) )(FoodCart);