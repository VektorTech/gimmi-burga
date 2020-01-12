import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0 0 10%;
`;

export const BodyMain = ({children}) => <Wrapper>{children}</Wrapper>;