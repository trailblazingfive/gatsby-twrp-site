import React from 'react'
import styled from "styled-components"

const FooterArea = styled.div`
  grid-area: FooterArea;
  background: yellow;
`

const Footer = ({ props, children }) => {

  return (
    <FooterArea>
      Footer
    </FooterArea>
  );
}

export default Footer;

