import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #633ac9;
    line-height: 1.5rem;
    border-radius: 1rem;
    padding: 5%;
`;

export const Span = styled.span`
    ${(props) => props.right ? "float:right;color:yellow;" : "color: white;"}
`;