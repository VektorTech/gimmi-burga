import React from 'react';
import {
    ItemWrapper,
    Span, Remove,
} from './cartListItem.styles';

export const CartListItem = ({price, amount, name, removeFromCart, _id}) => (
    <ItemWrapper>
        <Remove onClick={() => removeFromCart(_id)} ><span role="img" aria-label="X">❌</span></Remove>
        <Span>{amount}</Span>
        <Span>●</Span>
        <Span>{name}</Span>
        <Span>${(price.replace('$', '')*amount).toFixed(2)}</Span>
    </ItemWrapper>
);

export const DeliveryItem = () => (
    <ItemWrapper>
        <Remove><span role="img" aria-label="X">❌</span></Remove>
        <Span>1</Span>
        <Span>●</Span>
        <Span>Delivery</Span>
        <Span right>$4.99</Span>
    </ItemWrapper>
);