import React from 'react';
import {
    ItemWrapper,
    Span, Remove,
    ItemImage
} from './cartListItem.styles';

export const CartListItem = ({price, amount, name, removeFromCart, _id}) => (
    <ItemWrapper>
        <Remove onClick={() => removeFromCart(_id)} >x</Remove>
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