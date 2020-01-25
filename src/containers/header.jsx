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

const Header = ({currentUser, SignOut, cartSize}) => {
    const history = useHistory();
    const [favList, setFav] = useState([]);

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

    const getFavorites = () => {
        fetch("http://localhost:5000/favorite", {
            credentials: "include"
        }).then(res => res.json()).then(setFav);
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
                        <ListInfo><button onClick={getFavorites}>{"<3"}</button></ListInfo>
                        <select>
                            {
                                favList.map( elem => <option value={elem}>{elem}</option> )
                            }
                        </select>
                        </>
                        :
                        <ListInfo><Link to="signin">Sign In</Link></ListInfo>
                 }     
                    <ListInfo>{cartSize} Items</ListInfo>       
                </List>
            </MenuContainer>
        </HeaderContainer>
    </HeaderWrapper> 
    );
};

export default connect(
    state => ({
        currentUser: state.user.current_user,
        cartSize: state.cart.cart.length,
        products: state.product.all_products
    }), dispatch => ({
        SignOut: () => dispatch(signOut())
    }))(Header);