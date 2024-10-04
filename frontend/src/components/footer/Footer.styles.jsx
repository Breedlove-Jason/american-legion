import styled from "styled-components";

// Ensure the footer sticks to the bottom of the page
export const FooterContainer = styled.footer`
  background-color: #0f2537;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed; /* Changed from absolute to fixed */
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 1000; /* Ensure the footer is above other content */
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const LinksContainer = styled.div`
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const FlagBanner = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  color: white;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align icons to the right */
  margin-top: -10px; /* Adjust this to bring the icons up into the first row */
  position: absolute;
  right: 20px; /* Adjust this value to move icons closer or farther from the right edge */
  top: 10px; /* Adjust to align with the first row */
`;

export const StyledArrowUpwardIcon = styled.i`
  color: white;
  font-size: 24px;
  margin-right: 10px; /* Adjust spacing between icons */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px); /* Existing hover effect */
  }
`;

export const StyledChatbotIcon = styled.i`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1); /* Example hover effect, you can adjust this */
  }
`;
