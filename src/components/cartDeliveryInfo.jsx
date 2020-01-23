import React from 'react';
import {
    Wrapper,
    Span
} from './cartDeliveryInfo.styles';

export const CartDeliveryInfo = ({address}) => (
    <Wrapper>
        <Span><input type="text" value={address} /></Span>
        <Span right>Edit</Span>
        <br />
        <Span>35min</Span>
        <Span right>Choose Time</Span>
    </Wrapper>
);