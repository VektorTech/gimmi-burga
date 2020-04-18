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

export const SearchContainer = styled.div`
    width: 40.5%;
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

export const ListInfo = styled.li`
    float: right;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: .7rem;
    background-color: #e6c212;
    text-transform: uppercase;
`;

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