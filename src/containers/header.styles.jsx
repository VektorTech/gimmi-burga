import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 4.5rem;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    width: 92%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div``;
export const LogoImg = styled.img`
    /* width: 8rem; */
    width: 35%;
    margin-left: .5rem;
`;

export const SearchContainer = styled.div`
    margin-left: -37%;
    width: 47%;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 2.1rem;
    border-radius: .2rem;
    padding: 0 1rem;
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