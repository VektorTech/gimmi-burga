import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    font-size: 1.2rem;
    white-space: nowrap;
`;

export const Remove = styled.button`
    font-size: 1rem;
    vertical-align: middle;
    text-align: center;
    background: transparent;
    border: none;
    margin-right: .5rem;
`;

export const Span = styled.span`
    display: inline-block;
    margin-right: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;

    &:nth-of-type(1){
        width: 1rem;
        margin-right: 0;
    }

    &:nth-of-type(3){
        width: 60%;
        font-weight: bold;
        white-space: normal;
    }

    &:nth-of-type(4){
        color: #555;
    }
`;