import React, { useState } from 'react';
import * as c from '../styles/header.styles';

const Header = () => {
    const [ searchVal, setSearchVal ] = useState("");

    const handleChangeText = (e) => {
        setSearchVal(e.target.value);
    }

    return ( 
    <c.HeaderWrapper>
        <c.HeaderContainer>
            <c.LogoContainer></c.LogoContainer>
            <c.SearchContainer>
                <c.SearchInput placeholder="Search" value={searchVal} onChange={handleChangeText} />
            </c.SearchContainer>
            <c.MenuContainer>
                <c.List>
                    <c.ListInfo>Ico</c.ListInfo>
                    <c.ListInfo>Cart</c.ListInfo>
                </c.List>
            </c.MenuContainer>
        </c.HeaderContainer>
    </c.HeaderWrapper> 
    );
};

export default Header;