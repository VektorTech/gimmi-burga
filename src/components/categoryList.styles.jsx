import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    height: 5rem;
    line-height: 5rem;
    display: flex;
    flex-direction:row;
`;

export const CategoriesList = styled.ul`
    white-space: nowrap;
    overflow: hidden;
    width: 99%;
`;

export const CategoriesListItem = styled.li`
    padding: 0 .5rem;
    display: inline-block;
    &:last-child {
        float: right;
    }
`;