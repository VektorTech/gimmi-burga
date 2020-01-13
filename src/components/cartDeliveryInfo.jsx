import React from 'react';
import * as c from './cartDeliveryInfo.styles';

export const CartDeliveryInfo = () => (
    <c.Wrapper>
        <c.Span>Address</c.Span>
        <c.Span right>Edit</c.Span>
        <br />
        <c.Span>35min</c.Span>
        <c.Span right>Choose Time</c.Span>
    </c.Wrapper>
);