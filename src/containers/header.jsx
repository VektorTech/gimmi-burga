import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as c from './header.styles';

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
    <c.HeaderWrapper>
        <c.HeaderContainer>
            <c.LogoContainer></c.LogoContainer>
            <c.SearchContainer>
                <form>
                    <c.SearchInput placeholder="Search" id="search" /> 
                    <input type="submit" onClick={onSubmitHandler} style={{"display":"none"}}/> 
                </form>
            </c.SearchContainer>
            <c.MenuContainer>
                <c.List>
                    <c.ListInfo><Link to="signin">Ico</Link></c.ListInfo>
                    <c.ListInfo>
                        <form>
                            <input type="submit" value="Signout" onClick={onSignout}/>
                        </form>
                    </c.ListInfo>
                    <c.ListInfo>Cart</c.ListInfo>
                </c.List>
            </c.MenuContainer>
        </c.HeaderContainer>
    </c.HeaderWrapper> 
    );
};

export default Header;