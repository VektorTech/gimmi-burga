import React from 'react';
import {
    FoodItemWrapper,
    Anchor, ItemImage,
    ItemImg,
    ItemTitle,
    ItemPrice
} from './foodListItem.styles';

export const FoodItem = ({name, _id, price, imgLow}) => {
    return (
        <FoodItemWrapper>
            <Anchor to={'add-to-cart/'+_id}>
                <ItemImage>
                    <ItemImg src={imgLow} alt={name} />
                </ItemImage>
                <ItemTitle>{name}</ItemTitle>
                <ItemPrice>{price}</ItemPrice>
            </Anchor>
        </FoodItemWrapper>
    );
}