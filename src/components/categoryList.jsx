import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as c from './categoryList.styles';
import listData from '../config/categories.json';

export const CategoryList = () => {
    const [page, nextPage] = useState(6);

    return(
        <c.CategoryWrapper>
            <c.CategoriesList>
            {listData.map((item, index) => { 
                if( index >= page-6 && index < page ){
                    return <c.CategoriesListItem key={item.name}><Link to={"category?type="+item.name}>{item.name}</Link></c.CategoriesListItem>    
                } return null;     
            })}
            </c.CategoriesList>
            <div>
            <button style={{marginLeft: 'auto'}} onClick={() => { page<=listData.length ? nextPage(page+6) : nextPage(6) }}>Next</button>
            </div>
        </c.CategoryWrapper>
    );
};