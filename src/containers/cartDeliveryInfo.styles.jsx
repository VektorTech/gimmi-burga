import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #633ac9;
    line-height: 1.5rem;
    border-radius: 1rem;
    padding: 5%;
    margin-bottom: 2rem;
`;

export const AddressInput = styled.input`
    background: #eee;
    border-radius: .2rem;
    border: none;
    width: 85%;
    height: 1.5rem;
    padding-left: .5rem;

    &:read-only {
        color: #d0bdff;
        background: transparent;
    }
`;

export const Span = styled.span`
    ${(props) => props.right ? "float:right;color:yellow;cursor:pointer;" : "color: white;"}
    font-size: .8rem;
`;