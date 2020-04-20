import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height: 8rem;
    max-width: 100%;
    background-color: #e6c212;
    margin: 5rem 0 0 0;
    padding: 1rem 10%;
`;

export const Heading = styled.h2`
    font-size: 1rem;
    color: #633ac9;
`;

export const NavList = styled.ul`
    display: inline-block;
    width: 33.33%;
`;

export const NavItem = styled.li`
    padding: .3rem 0;
`;

export const CopyText = styled.div`
    width: 100%;
    height: 2rem;
    text-align: center;
    color: #fff;
    background-color: #222;
    font-size: .8rem;
    line-height: 1.7rem;

    & strong {
        color: #fff;
    }
`;