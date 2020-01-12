import React, { useState } from 'react';
import * as c from '../styles/categoryList.styles';
import listData from '../config/categories.json';

export const CategoryList = () => {
    const [page, nextPage] = useState(6);

    return(
        <c.CategoryWrapper>
            <c.CategoriesList>
            {listData.map((item, index) => { 
                if( index >= page-6 && index < page ){
                    return <c.CategoriesListItem><a href="#">{item.name}</a></c.CategoriesListItem>    
                } return null;     
            })}
            </c.CategoriesList>
            <button style={{marginLeft: 'auto'}} onClick={() => { page<=listData.length ? nextPage(page+6) : nextPage(6) }}>Next</button>
        </c.CategoryWrapper>
    );
};