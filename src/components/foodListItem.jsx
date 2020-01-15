import React from 'react';
import * as c from './foodListItem.styles';

export const FoodItem = ({name, _id, price, imgLow}) => {
    return (
        <c.FoodItemWrapper>
            <c.Anchor to={'add-to-cart/'+_id}>
                <c.ItemImage>
                    <c.ItemImg src={imgLow} alt={name} />
                </c.ItemImage>
                <c.ItemTitle>{name}</c.ItemTitle>
                <c.ItemPrice>{price}</c.ItemPrice>
            </c.Anchor>
        </c.FoodItemWrapper>
    );
}