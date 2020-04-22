import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 6rem;
    background: #fff;
    z-index: 1000;
`;

export const HeaderContainer = styled.div`
    width: calc(100% - 8rem);
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.div`
    height: 100%;
`;

export const SearchContainer = styled.div`
    width: calc(2 * 31.2% + 1.5rem);
    height: 3rem;
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    border-radius: .2rem;
    margin-right: 1rem;

    @media screen and (max-width: 1024px) {
        width: 3rem;
        padding-left: .6rem;

        &:hover {
            position: absolute;
            width: 70%;
            right: 2rem;
            padding-left: 0;
        }

        &:hover form {
            visibility: visible;
        }
    }
`;

export const MenuBtn = styled.div`
    font-size: 2.5rem;
`;

export const LogoContainer = styled.div`
    width: 15%;
`;

export const LogoImg = styled.img`
    width: 100%;
`;

export const SearchIcon = styled.div`
    width: 10%;
    padding: .8rem 0 0 3%;
`;

export const SearchForm = styled.form`
    width: 90%;

    @media screen and (max-width: 1024px) {
        visibility: hidden;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 .5rem;
    border:none;
    background-color: #f7f7f7;
`;

export const MenuContainer = styled.div``;


export const List = styled.ul``;

export const FavModal = styled.div`
    z-index: 1001;
    width: 80%;
    height: 90vh;
    margin: 5vh 10%;
    box-shadow: 0 0 20px 1px #666;
`;

export const ModalBackdrop = styled.div`
    content: '';
    position: fixed;
    z-index: 1000;
    display: ${ props => props.hidden ? 'none' : 'inline' };
    width: 100vw;
    height: 100vh;
    background-color: white;
`;