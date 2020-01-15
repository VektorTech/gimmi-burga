import React from 'react';
import * as c from './foodListItem.styles';

export const FoodItem = ({key}) => {
    return (
        <c.FoodItemWrapper>
            <c.Anchor to={'add-to-cart/'+key}>
                <c.ItemImage></c.ItemImage>
                    <c.ItemTitle>{key}</c.ItemTitle>
                <c.ItemPrice></c.ItemPrice>
            </c.Anchor>
        </c.FoodItemWrapper>
    );
}