import { createSelector } from 'reselect';

const getProducts = (state) => state.product.all_products;
const getCatName = (_, cat_name) => decodeURI(cat_name);

export const getFoodList = createSelector( 
    [getProducts, getCatName],
    (products, cat_name) => {
    return ((acc) => {
        if(cat_name !=='undefined' && cat_name!=="All") {
            Object.keys(products).forEach( id => products[id].category === cat_name ? acc[id] = products[id] : null );
            return acc;
        } else return products;
    })({})
});