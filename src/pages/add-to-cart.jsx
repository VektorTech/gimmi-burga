import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { addToCart } from '../redux/actions/cart.actions';

import {
    Name, Description, TextArea,
    BtnControl, Submit, Form, Amount
} from './add-to-cart.style';

const AddToCart = ({ addToCart, products }) => {
    const { foodID } = useParams();
    const history = useHistory()

    const product = products[foodID];

    const onContrlHander = (e, incr) => {
        e.preventDefault();
        if(incr){
            document.getElementById("amount").value++;
        } else if(document.getElementById("amount").value > 1){
            document.getElementById("amount").value--;
        }
    }
    
    function onSubmitHandler(e){
        e.preventDefault();
        addToCart({
            ...product, 
            amount: Number(document.getElementById("amount").value) 
        });
        history.goBack();
    }

    return (
        <Form>
            <Helmet>
                <title>Add To Cart: {product.name}</title>
            </Helmet>
            <form action="">
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <br/>
            <label>Additional Details</label>
            <br/>
            <TextArea></TextArea>
            <br/>
            <BtnControl onClick={(e) => onContrlHander(e)}>-</BtnControl>
                <Amount type="text" id="amount" value="1" readOnly />
            <BtnControl onClick={(e) => onContrlHander(e, true)}>+</BtnControl>
            <br/>
            <Submit type='submit' value='Add To Cart' onClick={(e) => onSubmitHandler(e)} />
            </form>
        </Form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (data) => dispatch(addToCart(data))
});

export default connect( ({product}) => ({ products: product.all_products }), mapDispatchToProps)(AddToCart);