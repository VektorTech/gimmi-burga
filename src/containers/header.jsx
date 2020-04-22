import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    HeaderWrapper,
    HeaderContainer,
    LogoContainer,
    SearchContainer,
    SearchForm,
    // MenuContainer,
    SearchInput,
    SearchIcon,
    // List, 
    MenuBtn,
    // ListInfo,
    LogoImg,
    // FavModal,
    // ModalBackdrop
} from './header.styles';
import { signOut } from '../redux/actions/user.action';

const Header = ({currentUser, SignOut, cartSize, products}) => {
    const history = useHistory();
    // const [favList, setFav] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    // const [modalView, toggleModal] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const query = document.getElementById("search").value;
        history.push(`/search?q=${query}`);
    } 

    // const onSignout = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:5000/signout", {
    //         method: 'post',
    //         credentials: "include"
    //     }).then(res => res.json).then(SignOut);
    // } 

    // const getFavorites = () => {
    //     fetch("http://localhost:5000/favorite", {
    //         credentials: "include"
    //     }).then(res => res.json()).then( res => {
    //         setFav(res);
    //         toggleModal(false);
    //     });
    // }

    return ( 
    <HeaderWrapper>

        {/* <ModalBackdrop onClick={() => toggleModal(true)} hidden={modalView}>
            <FavModal onClick={e => e.stopPropagation()}>
            <button onClick={() => toggleModal(true)}>close</button>
            {favList.map( id => products[id].name )}
            </FavModal>
        </ModalBackdrop> */}

        <HeaderContainer>
            <MenuBtn><span>🍔</span></MenuBtn>
            <LogoContainer><Link to='/'> <LogoImg src="/logo.png"/> </Link></LogoContainer>

            <SearchContainer>
                <SearchIcon>
            <svg width="15px" 
                 height="15px" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 18 18" 
                 aria-hidden="true">
                    <g  id="Page-1" 
                        stroke="none" 
                        stroke-width="1" 
                        fill="none" 
                        fill-rule="evenodd">
                    <g  id="Artboard-1" 
                        stroke="#777777" 
                        stroke-width="1.3">
                    <g  id="Group">
                        <path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z" id="Stroke-3"></path>
                        <path d="M11.4913,11.4913 L17.8683,17.8683" id="Stroke-7"></path>
                    </g></g></g></svg>
                </SearchIcon>
                <SearchForm>
                    <SearchInput 
                        placeholder="Search" 
                        id="search" 
                        list="meals"  
                        onChange={(e) => setSearchVal(e.target.value.trim())} />
                        
                    <datalist id="meals">
                        { Object.keys(products).map( (acc => id => {
                            const search = new RegExp(searchVal.replace(/[^a-zA-Z ]/g, ''), 'i');
                            if(search.test(products[id].name) && acc <= 6){
                                acc += 1;
                                return <option key={id} value={products[id].name} />;
                            }
                        })(0)) }
                    </datalist> 

                    <input type="submit" onClick={onSubmitHandler} style={{"display":"none"}}/> 
                </SearchForm>
            </SearchContainer>
            {/* <MenuContainer>
                <List>
                    { currentUser ?
                        <>
                        <ListInfo>
                            <form>
                                <input type="submit" value="Sign Out" onClick={onSignout}/>
                            </form>
                        </ListInfo> 
                        <ListInfo><button onClick={getFavorites}>{"<3"}</button></ListInfo>
                        </>
                        :
                        <ListInfo><Link to="signin">Sign In</Link></ListInfo>
                    }
                </List>
            </MenuContainer> */}
        </HeaderContainer>
    </HeaderWrapper> 
    );
};

export default connect(
    state => ({
        currentUser: state.user.current_user,
        products: state.product.all_products
    }), dispatch => ({
        SignOut: () => dispatch(signOut())
    }))(Header);