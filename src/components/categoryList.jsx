import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    CategoryWrapper,
    CategoriesList,
    CategoriesListItem
} from './categoryList.styles';
import listData from '../config/categories.json';

export const CategoryList = () => {
    const history = useHistory();
    const current_category = decodeURI(history.location.search.split("=")[1]);
    return(
        <CategoryWrapper>
            <CategoriesList>
                <CategoriesListItem>
                    <select defaultValue={current_category} onChange={(e) => history.push("/category?type="+e.target.value)}>
                    {listData.map((item, index) => { 
                        return <option key={item.name} value={item.name}>{item.name}</option>
                    })}
                    </select>
                </CategoriesListItem>
                <CategoriesListItem>
                    <h1><span>🍔</span> { current_category==="undefined" ? "All" : current_category }</h1>
                </CategoriesListItem>
            </CategoriesList>
        </CategoryWrapper>
    );
};