import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import { signOut } from '../redux/actions/user.action';

const Header = ({currentUser, SignOut}) => {
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
        }).then(res => res.json).then(SignOut);
    } 

    return ( 
    <HeaderWrapper>
        <HeaderContainer>
            <LogoContainer><Link to='/'>LOGO</Link></LogoContainer>
            <SearchContainer>
                <form>
                    <SearchInput placeholder="Search" id="search" /> 
                    <input type="submit" onClick={onSubmitHandler} style={{"display":"none"}}/> 
                </form>
            </SearchContainer>
            <MenuContainer>
                <List>
                    { currentUser ?
                        <>
                        <ListInfo>
                            <form>
                                <input type="submit" value="Sign Out" onClick={onSignout}/>
                            </form>
                        </ListInfo> 
                        <ListInfo>{"<3"}</ListInfo>
                        </>
                        :
                        <ListInfo><Link to="signin">Sign In</Link></ListInfo>
                 }            
                </List>
            </MenuContainer>
        </HeaderContainer>
    </HeaderWrapper> 
    );
};

export default connect(
    state => ({
        currentUser: state.user.current_user
    }), dispatch => ({
        SignOut: () => dispatch(signOut())
    }))(Header);