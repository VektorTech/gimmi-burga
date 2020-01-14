import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as c from './header.styles';

const Header = () => {
    return ( 
    <c.HeaderWrapper>
        <c.HeaderContainer>
            <c.LogoContainer></c.LogoContainer>
            <c.SearchContainer>
                <c.SearchInput placeholder="Search" />
            </c.SearchContainer>
            <c.MenuContainer>
                <c.List>
                    <c.ListInfo><Link to="signin">Ico</Link></c.ListInfo>
                    <c.ListInfo>Cart</c.ListInfo>
                </c.List>
            </c.MenuContainer>
        </c.HeaderContainer>
    </c.HeaderWrapper> 
    );
};

export default Header;