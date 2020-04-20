import styled from 'styled-components';

export const FooterWrapper = styled.div`
    max-width: 100%;
    background-color: #e6c212;
    padding: 2rem 10%;
    text-align: center;
`;

export const Heading = styled.h2`
    font-size: 1rem;
    color: #633ac9;
    user-select: none;
`;

export const NavList = styled.ul`
    display: inline-block;
    width: 33.33%;
    min-width: 15rem;
    margin-bottom: 1rem;
`;

export const NavItem = styled.li`
    font-size: .7rem;
    font-weight: bold;
    padding: .2rem 0;
`;

export const CopyText = styled.div`
    width: 100%;
    height: 1.8rem;
    text-align: center;
    color: #fff;
    background-color: #222;
    font-size: .8rem;
    line-height: 1.8rem;

    & strong {
        color: #fff;
    }
`;