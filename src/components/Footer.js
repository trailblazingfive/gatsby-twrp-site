import React from 'react'
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faYoutube, faFacebook, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons"

const FooterArea = styled.div`
  grid-area: FooterArea;
`

const GlyphArea = styled.div`
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`
const CustomGlyph = styled(FontAwesomeIcon)`
  color:#375e96;
  font-size: 3em;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  &:hover{
    color: #eef5fb;
    background: #375e96;
    transform: scale(1.1);
    border-radius: 5px;
  }
`

const CopyrightNote = styled.div`
  text-align: center;
  font-size: 0.9em;
  color:#375e96;
  margin: 5px;
  padding: 10px;
  height: 100%;
  user-select: none;
`

const CopyrightLink = styled.a`
  color:#375e96;
  text-decoration: underline;
  font-size: 1em;
  &:hover{
    color: #ed98db;
  }
`

const Author = styled.p`
  font-size: 0.8em;
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterArea>
      <GlyphArea>
        <a href="https://twitter.com/TWRPband" target="_blank" rel="noopener noreferrer" title="TWRP Twitter">
          <CustomGlyph icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/TWRPtube" target="_blank" rel="noopener noreferrer" title="TWRPtube">
          <CustomGlyph icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/twrpband/" target="_blank" rel="noopener noreferrer" title="TWRP Instagram">
          <CustomGlyph icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/twrpband/" target="_blank" rel="noopener noreferrer" title="TWRP Facebook">
          <CustomGlyph icon={faFacebook} />
        </a>
        <a href="https://www.twitch.tv/thetwrpshow" target="_blank" rel="noopener noreferrer" title="TWRP Twitch">
          <CustomGlyph icon={faTwitch} />
        </a>
      </GlyphArea>
      <CopyrightNote>Copyright TWRP {year}<br/><Author>fan made by <CopyrightLink href="https://github.com/trailblazingfive" target="_blank" rel="noopener noreferrer">trailblazingfive {year}</CopyrightLink></Author></CopyrightNote>
    </FooterArea>
  );
}

export default Footer;

