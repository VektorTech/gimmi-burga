import React from 'react';
import {
    FoodItemWrapper,
    Anchor, ItemImage,
    ItemImg,
    ItemTitle,
    ItemPrice,
    Transparent
} from './foodListItem.styles';

export const FoodItem = ({name, _id, price, imgLow, category}) => {

    // const addFavorite = (e) => {
    //     e.preventDefault();//stopPropagation not working here
    //     fetch("http://localhost:5000/favorite", {
    //         method: "post",
    //         credentials: "include",
    //         headers: {
    //             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //         },
    //         body: "id="+_id
    //     }).then();
    // }

    return (
        <FoodItemWrapper>
            <Anchor to={"add-to-cart/"+_id}>
                <ItemImage image={imgLow}>
                    <Transparent>
                        <ItemImg src={imgLow} alt={name} />
                    </Transparent>
                </ItemImage>
                <ItemTitle>{name}</ItemTitle>
                <ItemPrice>
                    <span>{category}</span> {price}
                </ItemPrice>
            </Anchor>
        </FoodItemWrapper>
    );
}