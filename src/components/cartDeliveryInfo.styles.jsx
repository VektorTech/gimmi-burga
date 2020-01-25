import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: purple;
    padding: 5%;
`;

export const Span = styled.span`
    ${(props) => props.right ? "float:right;color:yellow;" : "color: white;"}
`;