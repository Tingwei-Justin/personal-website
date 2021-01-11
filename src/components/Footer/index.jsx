import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkTitle,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./styles/Footer";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Home</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Test</FooterLink>
              <FooterLink to="/signin">Projects</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Home</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Test</FooterLink>
              <FooterLink to="/signin">Projects</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Home</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Test</FooterLink>
              <FooterLink to="/signin">Projects</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Home</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Test</FooterLink>
              <FooterLink to="/signin">Projects</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
              <FooterLink to="/signin">Questions</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              USCZone
            </SocialLogo>
            <WebsiteRights>USCZone @ 2021 All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
