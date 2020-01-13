import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 100%;
`;

export const ItemImage = styled.img`
    display: inline-block;
    width: 3rem;
`;

export const Span = styled.span`
    display: inline-block;
    ${(props) => props.right ? "float:right;" : ""}
`;