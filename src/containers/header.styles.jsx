import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 4.5rem;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div``;

export const SearchContainer = styled.div`
    width: 50%;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 2.1rem;
`;

export const MenuContainer = styled.div``;


export const List = styled.ul``;

export const ListInfo = styled.li`
    display: inline;
    
    &:first-child {
        padding-right: 1rem;
    }
`;

export const FavModal = styled.div`
    position: absolute;
    display: ${ props => props.hidden ? 'none' : 'inline' };
    width: 60vw;
    height: 60vh;
    margin: 20vh 20vw;
    border: 2px solid yellow;
    background-color: white;
`;