import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    font-size: .8rem;
    white-space: nowrap;
`;

export const ItemImage = styled.img`
    display: inline-block;
    width: 3rem;
`;

export const Remove = styled.button`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    text-align: center;
    color: #f01843;
    background: transparent;
    border: .15rem solid #f01843;
    margin-right: .5rem;
`;

export const Span = styled.span`
    display: inline-block;
    margin-right: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.right ? "float:right;" : ""}

    &:nth-of-type(3){
        width: 55%;
    }
`;