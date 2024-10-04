import {
  FooterContainer,
  FooterText,
  LinksContainer,
  FooterLink,
  Overlay,
  StyledArrowUpwardIcon,
  StyledChatbotIcon,
  IconContainer,
} from "./Footer.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUp, faHeadSideGear } from "@fortawesome/pro-solid-svg-icons";

import Chatbot from "../chatbot/Chatbot.jsx";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <Overlay>
        <FooterText>
          © 2024 American Legion Post 84 | PO Box 7004, Auburn, California
          95604 | Phone: 530-889-8574
        </FooterText>
        <LinksContainer>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/membership">Membership</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/programs">Programs</FooterLink>
          <FooterLink href="/events">Events</FooterLink>
          <FooterLink href="/sponsors">Sponsors</FooterLink>
          <FooterLink href="/login">Login</FooterLink>
        </LinksContainer>
        <IconContainer>
          <StyledArrowUpwardIcon>
            <FontAwesomeIcon icon={faSquareUp} onClick={handleBackToTop} />
          </StyledArrowUpwardIcon>
          <StyledChatbotIcon>
            {/*<FontAwesomeIcon icon={faHeadSideGear} onClick={handleBackToTop} />*/}
            <Chatbot />
          </StyledChatbotIcon>
        </IconContainer>
      </Overlay>
    </FooterContainer>
  );
};

export default Footer;
