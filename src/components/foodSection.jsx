import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width:100%;
    height: 5rem;
`;

export const FoodSection = ({children}) => <Section>{children}</Section>;