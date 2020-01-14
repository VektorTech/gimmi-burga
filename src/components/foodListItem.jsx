import React from 'react';
import * as c from './foodListItem.styles';

export const FoodItem = ({id}) => {
    return (
        <c.FoodItemWrapper>
            <c.Anchor to={'add-to-cart/'+id}>
                <c.ItemImage></c.ItemImage>
                <c.ItemTitle></c.ItemTitle>
                <c.ItemPrice></c.ItemPrice>
            </c.Anchor>
        </c.FoodItemWrapper>
    );
}