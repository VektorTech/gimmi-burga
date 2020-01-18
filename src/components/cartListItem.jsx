import React from 'react';
import * as c from './cartListItem.styles';

export const CartListItem = ({price, amount, name, removeFromCart, _id}) => (
    <c.ItemWrapper>
        <button onClick={() => removeFromCart(_id)} >Remove</button>
        <c.Span>{amount}</c.Span>
        <c.Span>X</c.Span>
        <c.Span>{name}</c.Span>
        <c.Span right>{price}</c.Span>
    </c.ItemWrapper>
);

export const DeliveryItem = () => (
    <c.ItemWrapper>
        <c.ItemImage alt="" />
        <c.Span>Delivery</c.Span>
        <c.Span right>$4.99</c.Span>
    </c.ItemWrapper>
);