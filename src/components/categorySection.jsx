import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width:100%;
    height: 5rem;
`;

export const CategorySection = ({children}) => <Section>{children}</Section>;