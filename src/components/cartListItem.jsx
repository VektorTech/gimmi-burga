import React from 'react';
import {
    ItemWrapper,
    Span,
    ItemImage
} from './cartListItem.styles';

export const CartListItem = ({price, amount, name, removeFromCart, _id}) => (
    <ItemWrapper>
        <button onClick={() => removeFromCart(_id)} >Remove</button>
        <Span>{amount}</Span>
        <Span>X</Span>
        <Span>{name}</Span>
        <Span right>${price.replace('$', '')*amount}</Span>
    </ItemWrapper>
);

export const DeliveryItem = () => (
    <ItemWrapper>
        <ItemImage alt="" />
        <Span>Delivery</Span>
        <Span right>$4.99</Span>
    </ItemWrapper>
);