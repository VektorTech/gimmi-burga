import React from 'react';
import { connect } from 'react-redux';

import {
    FoodCartWrapper,
    CartTitle,
    Total, TotalAmount,
    ButtonWrapper,
    CheckoutBtn,
    CartItemsContainer,
    ListInfo
} from './foodCart.styles';

import CartDeliveryInfo from './cartDeliveryInfo';
import { CartListItem, DeliveryItem } from '../components/cartListItem';

import { removeFromCart } from '../redux/actions/cart.actions';


const FoodCart = ({cart, removeFromCart, current_user, amount, cartSize}) => {
    return (
        <FoodCartWrapper>
            <ListInfo>{cartSize}</ListInfo>       
            <CartTitle>Order List <span>😋</span></CartTitle>
            <CartDeliveryInfo address={current_user.address} />
                <CartItemsContainer>      
                    { cart.map( (item, i) => <CartListItem key={item._id} {...item} removeFromCart={removeFromCart} />) }
                    <DeliveryItem />
                </CartItemsContainer>
            <div style={{marginTop:'2.5rem'}}>
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
    ({cart, user}) => ({ cartSize: cart.cart.length, cart: cart.cart, current_user: user.current_user || "" }),
    (dispatch) => ({removeFromCart: (id) => dispatch(removeFromCart(id))}) 
)(FoodCart);

    //make total calc more efficient using state