import React from 'react';
import * as c from '../styles/foodListItem.styles';

export const FoodItem = () => {
    return (
        <c.FoodItemWrapper>
            <c.Anchor>
                <c.ItemImage></c.ItemImage>
                <c.ItemTitle></c.ItemTitle>
                <c.ItemPrice></c.ItemPrice>
            </c.Anchor>
        </c.FoodItemWrapper>
    );
}