import React from 'react';
import {
    FoodItemWrapper,
    Anchor, ItemImage,
    ItemImg,
    ItemTitle,
    ItemPrice
} from './foodListItem.styles';

export const FoodItem = ({name, _id, price, imgLow}) => {

    const addFavorite = (e) => {
        e.preventDefault();//stopPropagation won't work here
        fetch("http://localhost:5000/favorite", {
            method: "post",
            credentials: "include",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: "id="+_id
        }).then();
    }

    return (
        <FoodItemWrapper>
            <Anchor to={'add-to-cart/'+_id}>
                <ItemImage>
                    <ItemImg src={imgLow} alt={name} />
                    <button onClick={addFavorite}>{"<3"}</button>
                </ItemImage>
                <ItemTitle>{name}</ItemTitle>
                <ItemPrice>{price}</ItemPrice>
            </Anchor>
        </FoodItemWrapper>
    );
}