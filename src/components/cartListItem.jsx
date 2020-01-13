import React from 'react';
import * as c from './cartListItem.styles';

export const CartListItem = () => (
    <c.ItemWrapper>
        <c.ItemImage alt="" />
        <c.Span>1</c.Span>
        <c.Span>X</c.Span>
        <c.Span right>$14.99</c.Span>
    </c.ItemWrapper>
);

export const DeliveryItem = () => (
    <c.ItemWrapper>
        <c.ItemImage alt="" />
        <c.Span>Delivery</c.Span>
        <c.Span right>$14.99</c.Span>
    </c.ItemWrapper>
);