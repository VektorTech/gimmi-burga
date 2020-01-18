import { createSelector } from 'reselect';

const getProducts = (state) => state.product.all_products;
const getCatName = (_, cat_name) => cat_name;

export const getFoodList = createSelector( 
    [getProducts, getCatName],
    (products, cat_name) => {
    return cat_name && cat_name!=="All" ? products.filter( (product) => product.category === cat_name ) : products;
});