import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 4.5rem;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    width: calc(100% - 4rem);
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const MenuBtn = styled.div`
    font-size: 1.8rem;
`;

export const LogoContainer = styled.div`
    width: 15%;
`;


export const LogoImg = styled.img`
    width: 100%;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    margin-right: 1rem;
    width: 65%;
`;

export const SearchIcon = styled.div`
    width: 10%;
    padding: .6rem 0 0 3%;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 2.1rem;
    border-radius: .2rem;
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