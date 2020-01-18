import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { addToCart } from '../redux/actions/cart.actions';

const AddToCart = ({ addToCart, products }) => {
    const { foodID } = useParams();
    const history = useHistory()

    const product = products.filter( (product) => product._id === foodID)[0];

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
        <form>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <br/>
            <label>Additional Details</label>
            <br/>
            <textarea></textarea>
            <br/>
            <button onClick={(e) => onContrlHander(e)}>-</button>
                <input type="text" id="amount" value="1" readOnly />
            <button onClick={(e) => onContrlHander(e, true)}>+</button>
            <br/>
            <input type='submit' value='Add To Cart' onClick={(e) => onSubmitHandler(e)} />
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (data) => dispatch(addToCart(data))
});

export default connect( ({product}) => ({ products: product.all_products }), mapDispatchToProps)(AddToCart);