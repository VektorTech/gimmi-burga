import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
`;

export const Body = ({children}) => <Wrapper>{children}</Wrapper>;