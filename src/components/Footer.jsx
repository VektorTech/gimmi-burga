import React from 'react';
import {
    FooterWrapper,
    Heading,
    NavList,
    NavItem,
    CopyText
} from './Footer.style';


const Footer = () => {
    return (
        <footer>
            <FooterWrapper>
                <NavList>
                    <NavItem> <Heading>Learn More</Heading> </NavItem>
                    <NavItem><a href="/">About</a></NavItem>
                    <NavItem><a href="/">Terms and Conditions</a></NavItem>
                    <NavItem><a href="/">Privacy Policy</a></NavItem>
                </NavList>

                <NavList>
                    <NavItem> <Heading>Help</Heading> </NavItem>
                    <NavItem><a href="/">FAQ</a></NavItem>
                    <NavItem><a href="/">Support</a></NavItem>
                    <NavItem><a href="/">Delivery Info</a></NavItem>
                </NavList>

                <NavList>
                    <NavItem> <Heading>Social Media</Heading> </NavItem>
                    <NavItem><a href="/">Facebook</a></NavItem>
                    <NavItem><a href="/">Instagram</a></NavItem>
                    <NavItem><a href="/">Twitter</a></NavItem>
                </NavList>
            </FooterWrapper>
            <CopyText>Powered By <strong>Kenny Sutherland</strong></CopyText>
        </footer>
    );
};

export default Footer;