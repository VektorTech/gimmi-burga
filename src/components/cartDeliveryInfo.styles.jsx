import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: purple;
    padding: 2rem;
`;

export const Span = styled.span`
    ${(props) => props.right ? "float:right;color:yellow;" : "color: white;"}
`;