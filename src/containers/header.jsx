import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    HeaderWrapper,
    HeaderContainer,
    LogoContainer,
    SearchContainer,
    MenuContainer,
    SearchInput,
    List, ListInfo
} from './header.styles';

const Header = () => {
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const query = document.getElementById("search").value;
        history.push(`/search?q=${query}`);
    } 

    const onSignout = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/signout", {
            method: 'post',
            credentials: "include"
        }).then(res => res.json).then(console.log);
    } 

    return ( 
    <HeaderWrapper>
        <HeaderContainer>
            <LogoContainer></LogoContainer>
            <SearchContainer>
                <form>
                    <SearchInput placeholder="Search" id="search" /> 
                    <input type="submit" onClick={onSubmitHandler} style={{"display":"none"}}/> 
                </form>
            </SearchContainer>
            <MenuContainer>
                <List>
                    <ListInfo><Link to="signin">Ico</Link></ListInfo>
                    <ListInfo>
                        <form>
                            <input type="submit" value="Signout" onClick={onSignout}/>
                        </form>
                    </ListInfo>
                    <ListInfo>Cart</ListInfo>
                </List>
            </MenuContainer>
        </HeaderContainer>
    </HeaderWrapper> 
    );
};

export default Header;