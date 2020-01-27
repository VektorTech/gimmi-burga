import React from 'react';
import { connect } from 'react-redux';

import {
    FoodCartWrapper,
    CartTitle,
    Total, TotalAmount,
    ButtonWrapper,
    CheckoutBtn,
    CartItemsContainer
} from './foodCart.styles';

import { CartDeliveryInfo } from '../components/cartDeliveryInfo';
import { CartListItem, DeliveryItem } from '../components/cartListItem';

import { removeFromCart } from '../redux/actions/cart.actions';


const FoodCart = ({cart, removeFromCart, current_user, amount}) => {
    return (
        <FoodCartWrapper>
            <CartTitle>Order List</CartTitle>
            <CartDeliveryInfo address={current_user.address} />
                <CartItemsContainer>      
                { cart.map( (item, i) => <CartListItem key={item._id} {...item} removeFromCart={removeFromCart} />) }
                </CartItemsContainer>
            <DeliveryItem />
            <div>
                <Total>Total:</Total>
                <TotalAmount>${ cart.length ? Number(cart.map( ({price, amount}) => amount * price.replace('$', '') )
                                   .reduce((prev, curr) => prev + curr) + 4.99).toFixed(2): "0.00" }</TotalAmount>
            </div>
            <ButtonWrapper>
                <CheckoutBtn>Checkout</CheckoutBtn>
            </ButtonWrapper>
        </FoodCartWrapper>
    );
}

export default connect( 
    ({cart, user}) => ({ cart: cart.cart, current_user: user.current_user || "" }),
    (dispatch) => ({removeFromCart: (id) => dispatch(removeFromCart(id))}) )(FoodCart);

    //make total calc more efficient using state